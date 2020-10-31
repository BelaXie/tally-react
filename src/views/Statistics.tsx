import Layout from "components/Layout";
import React, { useState } from "react";
import { CategorySection } from "views/Money/CategorySection";
import styled from "styled-components";
import { useRecords } from "../hooks/useRecords";
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
function Statistics() {
  const [category, setCategory] = useState<"-" | "+">("-");
  const { getName } = useTags();
  const { records } = useRecords();
  const selectedRecords = records.filter((r) => r.category === category);
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category} onChange={(category) => setCategory(category)} />
      </CategoryWrapper>
      <div>
        {selectedRecords.map((r) => {
          return (
            <Item>
              <div className="tags">
                {r.tagIds.map((tagId) => (
                  <span>{getName(tagId)}</span>
                ))}
              </div>
              {r.note && <div className="note">{r.note}</div>}
              <div className="amount">￥{r.amount}</div>
              {/* <span>{dayjs(r.createdAt).format("YYYY年MM月DD日")}</span> */}
            </Item>
          );
        })}
      </div>
    </Layout>
  );
}
export default Statistics;
