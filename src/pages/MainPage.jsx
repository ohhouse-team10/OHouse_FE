import React from "react";
import Navi from "../components/Main/Navi";
import styled from "styled-components";
import Button from "@mui/material/Button";
import MainCard from "../components/Main/MainCard";
import MainRecommendCard from "../components/Main/MainRecommendCard";

const MainPage = () => {
  return (
    <div>
    
      <Navi />
      <MainRecommendCard/>
     <div style={{marginTop: "50px" , height: "82vh"
      }}>
        <MainCard />
      </div>
    </div>
  );
};

export default MainPage;

