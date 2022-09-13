import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import Selectbox from "../components/Post/Selectbox";
import Textbox from "../components/Post/Textbox";
import Postheader from "../components/Post/Postheader";

const Post = () => {
  return (
    <Layout footer={false} header={false}>
      <Postheader />
      <Top>
        <Buttonleft>사진</Buttonleft>
        <Buttonright>동영상</Buttonright>
      </Top>
      <Body>
        <Selectbox />
        <Textbox />
        <></>
      </Body>
    </Layout>
  );
};

export default Post;

const Top = styled.div`
  height: 50px;
  line-height: 50px;
  width: 100%;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;

  margin: 0 0 30px 0;
  padding: 0 0 0 10%;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: #424242;
  line-height: 1;
  letter-spacing: -0.4px;
  font-size: 13px;
  margin: 0;
  padding: 0;
  height: 100%;
`;
const Buttonleft = styled.button`
  border: none;
  background: none;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  color: rgb(53, 197, 240);
  padding-bottom: 15px;
  border-bottom: 2px solid rgb(53, 197, 240);
`;
const Buttonright = styled.button`
  border: none;
  background: none;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
`;
