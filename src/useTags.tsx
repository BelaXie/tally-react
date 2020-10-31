import { useState } from "react";
import { createId } from "lib/createId";

const defaultTags = [
  { id: createId(), name: "衣" },
  { id: createId(), name: "食" },
  { id: createId(), name: "住" },
  { id: createId(), name: "行" },
];
//自定义hook，必须以 use 开头
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter((tag) => tag.id === id)[0];
  return { tags, setTags, findTag }; //必须使用对象的形式导出，否则ts会报错
};

export { useTags };
