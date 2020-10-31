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
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, {name}: { name: string }) => {
      setTags(tags.map(tag=>tag.id===id?{id,name}:tag))
  };

  const deleteTag = (id: number) => {
     setTags(tags.filter(tag=>tag.id!==id))
  };
  return { tags, setTags, findTag, findTagIndex, updateTag, deleteTag }; //必须使用对象的形式导出，否则ts会报错
};

export { useTags };
