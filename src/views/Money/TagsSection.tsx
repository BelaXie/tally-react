import styled from "styled-components";
import React, { useState } from "react";
const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
        background: #f60;
      }
    }
  }
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

type Props = {
  value: string[];
  onChange: (value: string[]) => void;
};
const TagsSection: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(["衣", "食", "住", "行"]);
  const selectedTags = props.value;
  const onAddTag = () => {
    const tagName = window.prompt("请输入你要添加的标签名");
    if (tagName) {
      setTags([...tags, tagName]);
    }
  };
  const getClass = (tag: string) => (selectedTags.indexOf(tag) >= 0 ? "selected" : "");
  const onToggleSelected = (tag: string) => {
    if (selectedTags.indexOf(tag) >= 0) {
      props.onChange(selectedTags.filter((t) => t !== tag));
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };
  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => (
          <li key={tag} className={getClass(tag)} onClick={() => onToggleSelected(tag)}>
            {tag}
          </li>
        ))}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};

export { TagsSection };
