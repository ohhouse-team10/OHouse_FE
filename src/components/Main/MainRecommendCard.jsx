import React from 'react';
import styled from "styled-components";
import Button from "@mui/material/Button";




const MainRecommendCard = () => {
    return (
        <div>
           
      <Card className="card" style={{ width:"98%",height: "55vh"}}>
        <Left
          className="left"
          style={{height: "55vh", width: "70%", float: "left"}}
        >
          <Div>
            <div>
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
            </div>
            <Button
              variant="outlined"
              style={{
                float: "right",
                borderColor: "#ffffff",
                color: "#ffffff",
                
                bottom: "90px",
                height: "50px",
              }}
            >
              Outlined
            </Button>
          </Div>
        </Left>

        <Right
          className="right"
          style={{height: "55vh", width: "27%", float: "right"}}
        ></Right>
      </Card> 
        </div>
    );
};

export default MainRecommendCard;


const Card = styled.div`
  margin: 20px;
  position: relative;
  
`;

const Div = styled.div`
  overflow: hidden;
  position: absolute;
  flex-wrap: wrap;
  top: 60%;
  width: 95%;

`;
const Div2 = styled.div`
  display: flex;
  margin: 20px;
`;

const H1 = styled.h1`
  margin: 20px;
  color: white;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  top: 15px;
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
