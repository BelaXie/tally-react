import Layout from "components/Layout";
import React, { useState } from "react";
import styled from "styled-components";
import { TagsSection } from "views/Money/TagsSection";
import { NoteSection } from "views/Money/NoteSection";
import { NumberPadSection } from "views/Money/NumberPadSection";
import { CategorySection } from "views/Money/CategorySection";
import { useRecords } from "../hooks/useRecords";

//相当于在MyLayout里加了一个 className的props，默认在 MyLayout 的根元素，可以在这个组件里的任何元素上接受该 props，就可以将样式放在对应元素上了
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const CategoryWrapper = styled.div`
  background: #c4c4c4;
`;
type Category = "-" | "+";
const defaultFormData = {
  tagIds: [] as number[],
  note: "",
  category: "-" as Category,
  amount: 0,
};
function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  const { addRecords } = useRecords();
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj,
    });
  };
  const submit = () => {
    if (addRecords(selected)) {
      alert("保存成功");
      setSelected(defaultFormData);
    }
  };
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds} onChange={(tagIds) => onChange({ tagIds })} />
      <NoteSection value={selected.note} onChange={(note) => onChange({ note })} />
      <CategoryWrapper>
        <CategorySection value={selected.category} onChange={(category) => onChange({ category })} />
      </CategoryWrapper>
      <NumberPadSection onOk={submit} value={selected.amount} onChange={(amount) => onChange({ amount })} />
    </MyLayout>
  );
}

export default Money;
