import React from 'react';
import styled from "styled-components";
import Button from "@mui/material/Button";
import { color } from '@mui/system';
import "../../style/slideStyle.css";

import { useEffect } from 'react';


const MainRecommendCard = ({ posts }) => {



 
    return (
    
           
      <Card className="card" style={{ width:"98%",height: "55vh"}}>
        <Left
          className="left"
          style={{height: "55vh", width: "70%", float: "left"
        }}
        >
          <Div>
              <H1>해당페이지 제목 </H1>
              
               <Div2>
                <Img
                  src="https://i.pinimg.com/564x/c1/86/54/c18654579c567258e4df5bad55930381.jpg"
                  className="rounded float-start"
                  alt="..."
                />
                <h3 style={{marginLeft: "10px", color: "white"}}> 닉네임</h3>
              </Div2>

              <br />
      
            <Button
              variant="outlined"
              style={{
                float: "right",
                borderColor: "#ffffff",
                color: "#ffffff",
                position: "relative",
                bottom: "28%",
                height: "50px",
              }}
            >
              Outlined
            </Button>
          </Div>
        </Left>

        <Right
          className="right"
          style={{height: "55vh", width: "28%", float: "left", marginLeft:"10px"
      
        }}
 
        >
  
   <div className='container'>
      <div className='slides'>
        <div className='slide'>
        <img
        src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/166262124262191325.png"
      
        />
        </div>
        <div className='slide'>
        <img
        src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/166262164701257920.png"
      
        />
        </div>
        <div className='slide'>
        <img
        src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/166262122173492571.png"
       
        />
        </div>
       <div className='slide'>
        <img
        src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/166262124262191325.png"
    
        />
       </div>

    </div>
 <div className="slide-controls">
  <button id="prev-btn">
  <img
        src="https://velog.velcdn.com/images/soonger3306/post/908f22fd-fa75-4199-acf9-438662ab7d4e/image.png"
        style={{height: "50px", width: "50px", float: "right"}}
        />
  </button>
  <button id="next-btn">
  <img
        src="https://velog.velcdn.com/images/soonger3306/post/f884d60d-ab5b-4689-8cd9-96f72e6418a2/image.png"
        style={{height: "50px", width: "50px", float: "right"}}
        />
  </button>

 </div>

  </div>

        </Right>
      </Card> 
   
    );
};

export default MainRecommendCard;


const Card = styled.div`
  margin: 20px;
  position: relative;
  
`;

const Div = styled.div`

  position: relative;
  flex-wrap: wrap;
  width: 90%;
  height: 30%;
  padding: 40px;
   top: 50%;
     align-items: flex-end;

   float: left;


`;
const Div2 = styled.div`
  display: flex;
  margin-left: 25px;
 
`;

const H1 = styled.h1`
  margin: 20px;
  color: white;
  font-size: 40px;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  bottom: 8px;
  position: relative;
`;

const Left = styled.div`
  position: relative;

  float: left;
  border-radius: 10px;

  overflow: hidden;

  box-sizing: border-box;
  /* background-color: aqua; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/165709897724260294.jpg?gif=1&w=1080&webp=1);

`;
const Right = styled.div`
  float: right;
  border-radius: 10px;
  box-sizing: border-box;
  background: #8799c1;
  overflow: hidden;
`;
