import React from "react";
import Layout from "../components/Layout/Layout";

import PostContainer from "../components/Post/PostContainer";

const Post = () => {
  return (
    <Layout footer={false} header={true}>
      <PostContainer></PostContainer>
    </Layout>
  );
};

export default Post;
