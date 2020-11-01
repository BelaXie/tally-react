import Layout from "components/Layout";
import React, { useState, ReactNode } from "react";
import { CategorySection } from "views/Money/CategorySection";
import styled from "styled-components";
import { useRecords, RecordsItem } from "../hooks/useRecords";
import { useTags } from "hooks/useTags";
import dayjs from "dayjs";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
const CategoryWrapper = styled.div`
  background: white;
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;
function Statistics() {
  const [category, setCategory] = useState<"-" | "+">("-");
  const { getName } = useTags();
  const { records } = useRecords();
  const selectedRecords = records.filter((r) => r.category === category);
  let hash: { [date: string]: RecordsItem[] } = {};
  selectedRecords.forEach((r) => {
    const key = dayjs(r.createdAt).format("YYYY年MM月DD日");
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  //将 hash 中的内容变成一个数组并降序排序
  const arrayHash = Object.entries(hash).sort((a, b) => {
    return a[0] >= b[0] ? -1 : 1;
  });
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={(category) => setCategory(category)} />
      </CategoryWrapper>
      {arrayHash.map(([date, records]) => (
        <div key={date}>
          <Header>{date}</Header>
          <div>
            {records.map((r) => {
              return (
                <Item key={r.createdAt}>
                  <div className="tags">{r.tagIds.map((tagId) => <span key={tagId}>{getName(tagId)}</span>).reduce((result, span, index, array) => result.concat(index < array.length - 1 ? [span, "，"] : [span]), [] as ReactNode[])}</div>
                  {r.note && <div className="note">{r.note}</div>}
                  <div className="amount">￥{r.amount}</div>
                </Item>
              );
            })}
          </div>
        </div>
      ))}
    </Layout>
  );
}
export default Statistics;
