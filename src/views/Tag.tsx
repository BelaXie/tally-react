import React from "react";
import { useParams,useHistory } from "react-router-dom";
import { useTags } from "useTags";
import Layout from "components/Layout";
import Icon from "components/Icon";
import { Button } from "components/Button";
import { Input } from "components/Input";
import styled from "styled-components";
import { Center } from "components/Center";
import { Space } from "components/Space";
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;
type Params = {
  id: string;
};
const Tag = () => {
  const { id: idString } = useParams<Params>(); //获取url中的hash参数
  const { findTag, updateTag, deleteTag } = useTags();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number; name: string }) => {
    return (
      <div>
        <InputWrapper>
          <Input label="标签名" value={tag.name} onChange={(e) => updateTag(tag.id, { name: e.target.value })} />
        </InputWrapper>
        <div>
          <Center>
            <Space />
            <Space />
            <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
          </Center>
        </div>
      </div>
    );
  };
  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  };
  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={onClickBack} />
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      {tag ? (
        tagContent(tag)
      ) : (
        <Center>
          <Space />
          <Space />
          <div>标签不存在</div>
        </Center>
      )}
    </Layout>
  );
};

export { Tag };
