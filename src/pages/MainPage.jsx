import React from "react";
import Layout from "../components/Layout/Layout";

import MainRecommendCard from "../components/Main/MainRecommendCard";
import MainMidNav from "../components/Main/MainMidNav";
import MainCategory from "../components/Main/MainCategory";

const MainPage = () => {
  return (
    <Layout>
      <MainRecommendCard />
      <MainMidNav />
      <MainCategory />
    </Layout>
  );
};

export default MainPage;
