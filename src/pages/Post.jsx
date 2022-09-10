import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import text_logo from "../image/ohou_text_logo.PNG";

const Post = () => {
  return (
    <Layout>
      {/* <Header /> */}
      <Postheader>
        <Logo src={text_logo} />
        <Addbutton type="submit">
          <span>올리기</span>
        </Addbutton>
      </Postheader>
      <Top>
        <Buttonleft>사진</Buttonleft>
        <Buttonright>동영상</Buttonright>
      </Top>
      <Body>
        <Selectbox>
          <Selectleft>
            <Select1>
              <option value="" disabled="">
                평수
              </option>
              <option value="0">10평 미만</option>
              <option value="1">10평대</option>
              <option value="2">20평대</option>
              <option value="3">30평대</option>
              <option value="4">40평대</option>
              <option value="5">50평 이상</option>
            </Select1>
            <Select2>
              <option value="" disabled="">
                주거형태
              </option>
              <option value="0">원룸&amp;오피스텔</option>
              <option value="1">아파트</option>
              <option value="2">빌라&amp;연립</option>
              <option value="3">단독주택</option>
              <option value="4">사무공간</option>
              <option value="5">상업공간</option>
              <option value="6">기타</option>
            </Select2>
            <Select3>
              <option value="" disabled="">
                스타일
              </option>
              <option value="0">모던</option>
              <option value="1">북유럽</option>
              <option value="2">빈티지</option>
              <option value="3">내추럴</option>
              <option value="4">프로방스&amp;로맨틱</option>
              <option value="5">클래식&amp;앤틱</option>
              <option value="6">한국&amp;아시아</option>
              <option value="7">유니크</option>
            </Select3>
          </Selectleft>
          <Selectright></Selectright>
        </Selectbox>

        <Divbox>
          <Divleft>
            <Photo>
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="currentColor"
                preserveAspectRatio="xMidYMid meet"
                class="css-hcf77b em8wpqo2"
              >
                <path d="M11.952 9.778l2.397-5.994A1.778 1.778 0 0 1 16 2.667h16c.727 0 1.38.442 1.65 1.117l2.398 5.994h10.174c.982 0 1.778.796 1.778 1.778v32c0 .981-.796 1.777-1.778 1.777H1.778A1.778 1.778 0 0 1 0 43.556v-32c0-.982.796-1.778 1.778-1.778h10.174zM24 38c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11z"></path>
              </svg>
              <span>사진 올리기</span>
              <span>(*최대 10장까지)</span>
            </Photo>
          </Divleft>
          <Divright>
            <Select4>
              <option value="" disabled="">
                공간 (필수)
              </option>
              <option value="0">원룸</option>
              <option value="1">거실</option>
              <option value="2">침실</option>
              <option value="3">주방</option>
              <option value="4">욕실</option>
              <option value="5">아이방</option>
              <option value="6">드레스룸</option>
              <option value="7">서재&amp;작업실</option>
              <option value="8">베란다</option>
              <option value="9">사무공간</option>
              <option value="10">상업공간</option>
              <option value="11">가구&amp;소품</option>
              <option value="12">현관</option>
              <option value="13">외관&amp;기타</option>
            </Select4>
            <Textarea
              field="[object Object]"
              name="description"
              placeholder="사진에 대해 설명해주세요."
              rows="6"
            ></Textarea>
            <Footbox>#키워드</Footbox>
          </Divright>
        </Divbox>

        <></>
      </Body>
    </Layout>
  );
};

export default Post;
const Postheader = styled.div`
  /* height: 80px;
  line-height: 80px; */
  display: block;
`;
const Logo = styled.img`
  margin-left: 8%;
`;
const Addbutton = styled.button`
  float: right;
  cursor: pointer;
  touch-action: manipulation;
  margin-right: 10%;
  border: none;
  /* background: none transparent; */
  /* font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  font-family: inherit; */
  position: relative;
  display: inline-block;
  width: auto;
  transition: background-color 0.1s ease 0s, opacity 0.1s ease 0s;
  padding: 11px 45px 12px;
  background-color: rgb(53, 197, 240);
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  border-radius: 4px;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: #424242;
  line-height: 1;
  letter-spacing: -0.4px;
  font-size: 13px;
  margin: 0;
  padding: 0;
  height: 100%;
`;
const Top = styled.div`
  height: 50px;
  line-height: 50px;
  width: 100%;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;

  margin: 0 0 30px 0;
  padding: 0 0 0 10%;
`;
const Buttonleft = styled.button`
  border: none;
  background: none;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  color: rgb(53, 197, 240);
  padding-bottom: 15px;
  border-bottom: 2px solid rgb(53, 197, 240);
`;
const Buttonright = styled.button`
  border: none;
  background: none;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
`;

const Selectbox = styled.div`
  /* background-color: #ffd8d8; */
  padding: 0 0 2%;
  width: 100%;
  height: 50px;
  max-width: 1325px;
`;
const Selectleft = styled.div`
  /* border: 1px solid yellow; */
  width: 69%;
`;
const Select1 = styled.select`
  flex: 1 0 auto;
  height: 40px;
  padding: 0 0 0 15px;
  margin: 0 5px 0 10px;
  line-height: 40px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
  border-color: #bdbdbd;
  padding-right: 30px;
  background-image: none;
  font-size: 15px;
  width: 20%;
  color: #bdbdbd;
`;
const Select2 = styled.select`
  flex: 1 0 auto;
  height: 40px;
  padding: 0 0 0 15px;
  margin: 0 5px 0 5px;
  line-height: 40px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
  border-color: #bdbdbd;
  padding-right: 30px;
  background-image: none;
  font-size: 15px;
  width: 30%;
  color: #bdbdbd;
`;
const Select3 = styled.select`
  flex: 1 0 auto;
  height: 40px;
  padding: 0 0 0 15px;
  margin: 0 10px 0 5px;
  line-height: 40px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
  border-color: #bdbdbd;
  padding-right: 30px;
  background-image: none;
  font-size: 15px;
  width: 30%;
  color: #bdbdbd;
`;
const Selectright = styled.div`
  /* border: 1px solid yellow; */
  width: 39%;
`;

const Divbox = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  max-width: 1325px;
  height: 200px;
  padding: 1%;
  /* margin: 1%; */
`;
const Divleft = styled.div`
  /* border: 1px solid red; */
  float: left;
  width: 49.5%;
  /* margin: 1%; */
`;
const Photo = styled.div`
  cursor: pointer;
  font: inherit;
  margin: 0;
  padding: 0;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 230px;
  line-height: 30px;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  color: rgb(130, 140, 148);
  font-size: 15px;
  font-weight: bold;

  background-color: rgb(247, 248, 250);
  border: 1px dashed rgb(218, 220, 224);
  border-radius: 4px;
  box-sizing: border-box;
`;
const Divright = styled.div`
  /* border: 1px solid green; */
  float: left;
  width: 47%;
  /* margin: 1%; */
  padding: 0 0 0 10px;
`;
const Select4 = styled.select`
  display: block;
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
  box-sizing: border-box;

  height: 40px;
  padding: 0 15px;
  line-height: 40px;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
  /* padding-right: 30px; */
  background-image: none;
  font-size: 15px;
  width: 100%;
  color: #bdbdbd;
  margin: 0 0 10px 0;
`;
const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #dbdbdb;
  color: #000;
  border-radius: 4px;
  box-sizing: border-box;

  font-family: Noto Sans KR, Noto Sans CJK KR, 맑은 고딕, Malgun Gothic,
    sans-serif;
  font-size: 15px;
  line-height: 21px;

  transition: border-color 0.1s, background-color 0.1s;

  padding: 8px 15px 9px;
  margin: 0px 0px 10px;
  background-color: #fafafa;
  overflow: hidden scroll;
  overflow-wrap: break-word;
  height: 145.5px;
`;
const Footbox = styled.div`
  /* border: 1px dashed green; */
  margin: 0;
  padding: 5px 8px 6px 18px;
  font: inherit;
  line-height: inherit;
  color: #757575;
  background-color: #f5f5f5;
  border: none;
  border-radius: 4px;
  transition: box-shadow 0.2s;
  box-sizing: content-box;
  width: 50px;
`;
