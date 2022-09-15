
import styled from "styled-components";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import "../../style/slideStyle.css";
import React, { useState, useRef, useEffect } from 'react';
import {useNavigate} from "react-router-dom";



const MainRecommendCard = ({post}) => {
  const navigate = useNavigate();
  const {
    thumbnail,
    nickname,
    like_num,
    statusMessage,
    isFollow,
    content,
    post_id,
    isLike,
  } = post;

  console.log(nickname)

  const delay = 2000;
const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const TOTAL_SLIDES=3
const [index, setIndex] = React.useState(0);
  

//자동 구현중
    // React.useEffect(() => {
    //   setTimeout(
    //     () =>
    //       setIndex((prevIndex) =>
    //         prevIndex === TOTAL_SLIDES - 1 ? 0 : prevIndex +1
    //       ),
    //     delay
    //   );
  
    //   return () => {};
    // }, [index]);




  
// Next 버튼 클릭 시
const NextSlide = () => {
  if (currentSlide >= TOTAL_SLIDES) {
    // 더 이상 넘어갈 슬라이드가 없으면
    setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
    // return;  // 클릭이 작동하지 않습니다.
  } else {
    setCurrentSlide(currentSlide + 1);
  }
};
// Prev 버튼 클릭 시
const PrevSlide = () => {
  if (currentSlide ===0) {
    setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
    // return;  // 클릭이 작동하지 않습니다.
  } else {
    setCurrentSlide(currentSlide - 1);
  }
};
useEffect(() => {
  slideRef.current.style.transition = 'all 0.5s ease-in-out';
  slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
}, [currentSlide]);





 
    return (
    
           
      <Card className="card" style={{ width:"98%",height: "55vh"}}>
        <Left
          className="left"
          style={{height: "55vh", width: "70%", float: "left"
        }}
        >
          <Div>
              <H1>따뜻한 정서가 담긴 신혼 부부의 공존(共存) 하우스 </H1>
              
               <Div2>
                <Img
                  src="https://i.pinimg.com/564x/c1/86/54/c18654579c567258e4df5bad55930381.jpg"
                  className="rounded float-start"
                  alt="..."
                />
                <h3 style={{marginLeft: "10px", color: "white"}}>{nickname}</h3>
              </Div2>

              <br />
              <span onClick={() => navigate(`/detail/${post_id}`)}>
            <Button
              variant="outlined"
              style={{
                float: "right",
                borderColor: "#ffffff",
                color: "#ffffff",
                position: "relative",
                bottom: "28%",
                width: "120px",
                height: "50px",
              }}
            >
              보러가기
            </Button>
            </span>
          </Div>
        </Left>

        <Right
          className="right"
          style={{height: "55vh", width: "28%", float: "left", marginLeft:"10px"
      
        }}
 
        >
     
   < Container className='container'>
      
      <div className='slides' ref={slideRef}>

       

        <div className='slide'>
        <a href="https://ohou.se/exhibitions/2683?affect_type=Home&affect_id=0" target="_blank">
        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/166262124262191325.png"/>
        </a>
         </div>
       

        <div className='slide'>
        <a href="https://ohou.se/competitions/807?affect_type=Home&affect_id=0" target="_blank">
        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/166262164701257920.png"/>
        </a>
         </div>

        <div className='slide'>
        <a href="https://ohou.se/exhibitions/2667?affect_type=Home&affect_id=0" target="_blank">
        <img 
        src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/166262122173492571.png"/>
           </a> 
        </div>

       <div className='slide'>
       <a href="https://ohou.se/competitions/799?affect_type=Home&affect_id=0" target="_blank">
       <img
        src="https://image.ohou.se/i/bucketplace-v2-development/uploads/banners/home_banner/166216891267911371.png" />
        </a>
        </div>

     
       </div>
    <div className="slide-controls">

        <button id="prev-btn" onClick={PrevSlide}>
        <img
              src="https://velog.velcdn.com/images/soonger3306/post/908f22fd-fa75-4199-acf9-438662ab7d4e/image.png"
              style={{height: "50px", width: "50px", float: "right"}}
              />
        </button>
        <button id="next-btn" onClick={NextSlide}>
        <img 
              src="https://velog.velcdn.com/images/soonger3306/post/f884d60d-ab5b-4689-8cd9-96f72e6418a2/image.png"
              style={{height: "50px", width: "50px", float: "right"}}
              />
        </button>
         </div>
         </ Container>

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
  font-size: 20px;
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

  overflow: hidden;
`;
const Container = styled.div`
  width: 60%;

  display: flex;
  width: 100%;
  display: flex;// 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;
