import React from "react";
import { useParams } from "react-router-dom";
import { useTags } from "useTags";
import Layout from "components/Layout";
import Icon from "components/Icon";
import { Button } from "components/Button";

type Params = {
  id: string;
};
const Tag = () => {
  const { id } = useParams<Params>(); //获取url中的hash参数
  const { findTag } = useTags();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <header>
        <Icon name="left" />
        <span>编辑标签</span>
        <Icon />
      </header>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="标签名" />
        </label>
        <div>
          <Button>删除标签</Button>
        </div>
      </div>
    </Layout>
  );
};

export { Tag };
