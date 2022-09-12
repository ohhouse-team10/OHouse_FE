import React from "react";
import Layout from "../components/Layout/Layout";
import MainCard from "../components/Main/MainCard";
import MainRecommendCard from "../components/Main/MainRecommendCard";

const MainPage = () => {
  return (
    <Layout>
      <MainRecommendCard />
      <div style={{marginTop: "50px"}}>
        <MainCard />
      </div>
    </Layout>
  );
};

export default MainPage;
