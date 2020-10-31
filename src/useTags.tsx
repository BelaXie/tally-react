import { useState } from "react";
//自定义hook，必须以 use 开头
const useTags = () => {
  const [tags, setTags] = useState<{id:number,name:string}[]>([
      {id:1,name:"衣"},
      {id:2,name:"食"},
      {id:3,name:"住"},
      {id:4,name:"行"},
    ]);
  return { tags, setTags }; //必须使用对象的形式导出，否则ts会报错
};

export { useTags };
