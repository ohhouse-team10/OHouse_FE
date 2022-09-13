import React from "react";
import Layout from "../components/Layout/Layout";
import CommunityCard from "../components/Community/CommunityCard";
import {useState, useEffect, useRef, useCallback} from "react";
import Infinite from "../components/Community/Infinite";
const Community = () => {
  return (
    <div>
      <Layout>
        <div style={{marginTop: "50px"}}>
          <CommunityCard />
        </div>
      </Layout>
    </div>
  );
};
export default Community;
