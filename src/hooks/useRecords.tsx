import { useState } from "react";
import { useEffect } from "react";
import { useUpdate } from "./useUpdate";
type RecordsItem = {
  tagIds: number[];
  note: string;
  category: "+" | "-";
  amount: number;
  createdAt: string;
};
type newRecordsItem = Omit<RecordsItem, "createdAt">;
export const useRecords = () => {
  const [records, setRecords] = useState<RecordsItem[]>([]);
  useEffect(() => {
    const localRecords = JSON.parse(localStorage.getItem("records") || "[]");
    setRecords(localRecords);
  }, []);
  useUpdate(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);
  const addRecords = (newRecord: newRecordsItem) => {
    if (newRecord.tagIds.length === 0) {
      alert("请选择标签");
      return false;
    }
    if (newRecord.amount <= 0) {
      alert("请输入金额");
      return false;
    }
    const record = { ...newRecord, createdAt: new Date().toISOString() };
    setRecords([...records, record]);
    return true;
  };
  return { records, addRecords };
};
