import Layout from "components/Layout";
import React, { useState } from "react";
import styled from "styled-components";
import { TagsSection } from "views/Money/TagsSection";
import { NoteSection } from "views/Money/NoteSection";
import { NumberPadSection } from "views/Money/NumberPadSection";
import { CategorySection } from "views/Money/CategorySection";

//相当于在MyLayout里加了一个 className的props，默认在 MyLayout 的根元素，可以在这个组件里的任何元素上接受该 props，就可以将样式放在对应元素上了
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: "",
    category: "-" as "-" | "+",
    amount: 0,
  });
  return (
    <MyLayout>
      {/* {selected.tags}
      <hr />
      {selected.note}
      <hr />
      {selected.category} */}
      {selected.amount}
      <TagsSection
        value={selected.tags}
        onChange={(tags) =>
          setSelected({
            ...selected,
            tags,
          })
        }
      />
      <NoteSection
        value={selected.note}
        onChange={(note) =>
          setSelected({
            ...selected,
            note,
          })
        }
      />
      <CategorySection
        value={selected.category}
        onChange={(category) =>
          setSelected({
            ...selected,
            category,
          })
        }
      />
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) =>
          setSelected({
            ...selected,
            amount,
          })
        }
      />
    </MyLayout>
  );
}

export default Money;
