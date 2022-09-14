import React from "react";
import Layout from "../components/Layout/Layout";
import Comment from "../components/comment/Comment";
import DetailCard from "../components/Detail/DetailCard";
import styled from "styled-components";
import SideButtons from "../components/Detail/SideButtons";
const DetailPage = () => {
  return (
    <div>
      <Layout>
        <DetailLayout>
          <div style={{ display: " flex" }}>
            <DetailCard />
            <SideButtons />
          </div>
          <CommentLayout>
            <Comment />
          </CommentLayout>
        </DetailLayout>
      </Layout>
    </div>
  );
};

export default DetailPage;

const DetailLayout = styled.div`
  width: 85%;
  margin: auto;
  background-size: cover;
  border-radius: 10px;
`;
const CommentLayout = styled.div`
  width: 86%;
`;
