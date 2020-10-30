import Layout from "components/Layout";
import React from "react";
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
  return (
    <MyLayout>
      <TagsSection />
      <NoteSection />
      <CategorySection />
      <NumberPadSection />
    </MyLayout>
  );
}

export default Money;
