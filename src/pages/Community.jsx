import React from "react";
import Layout from "../components/Layout/Layout";
import CommunityCardList from "../components/Community/CommunityCardList";

const Community = () => {
  return (
    <div>
      <Layout>
        <div style={{marginTop: "50px"}}>
          <CommunityCardList />
        </div>
      </Layout>
    </div>
  );
};
export default Community;
