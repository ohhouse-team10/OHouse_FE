import React from "react";
import Layout from "../components/Layout/Layout";
import EditUserForm from "../components/MyPage/EditUserForm";
import MyPageContainer from "../components/MyPage/MyPageContainer";
import MyPageLayout from "../components/MyPage/MyPageLayout";
import MyPageNav from "../components/MyPage/MyPageNav";

const MyPage = () => {
  return (
    <Layout>
      <MyPageLayout>
        <MyPageNav />
        <MyPageContainer>
          <EditUserForm />
        </MyPageContainer>
      </MyPageLayout>
    </Layout>
  );
};

export default MyPage;
