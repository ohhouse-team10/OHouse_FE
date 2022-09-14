import { React, useState } from "react";
import styled from "styled-components";
import Preview from "./Preview";

const Textbox = ({ contentInfo, imgInfo }) => {
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");

  const handleChange = (e) => {
    setImg(e.target.files[0]);
    imgInfo(e.target.files[0]);
  };

  const textareaHandler = (e) => {
    setContent(e.target.value); // content 받고
    contentInfo(e.target.value); // props에 담고
  };

  return (
    <Divboxes>
      <Divleft>
        <input
          id="imgInput"
          type="file"
          onChange={handleChange}
          style={{ display: "none" }}
        />

        <Photo htmlFor="imgInput">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M11.952 9.778l2.397-5.994A1.778 1.778 0 0 1 16 2.667h16c.727 0 1.38.442 1.65 1.117l2.398 5.994h10.174c.982 0 1.778.796 1.778 1.778v32c0 .981-.796 1.777-1.778 1.777H1.778A1.778 1.778 0 0 1 0 43.556v-32c0-.982.796-1.778 1.778-1.778h10.174zM24 38c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11z"></path>
          </svg>
          <span>사진 올리기</span>
          <span>(*최대 10장까지)</span>
          <Preview img={img} />
        </Photo>
      </Divleft>
      <Divright>
        <Select4>
          <option value="" disabled="">
            공간 (필수)
          </option>
          <Option value="0">원룸</Option>
          <Option value="1">거실</Option>
          <Option value="2">침실</Option>
          <Option value="3">주방</Option>
          <Option value="4">욕실</Option>
          <Option value="5">아이방</Option>
          <Option value="6">드레스룸</Option>
          <Option value="7">서재&amp;작업실</Option>
          <Option value="8">베란다</Option>
          <Option value="9">사무공간</Option>
          <Option value="10">상업공간</Option>
          <Option value="11">가구&amp;소품</Option>
          <Option value="12">현관</Option>
          <Option value="13">외관&amp;기타</Option>
        </Select4>
        <Textarea
          onChange={textareaHandler}
          field="[object Object]"
          name="description"
          placeholder="사진에 대해 설명해주세요."
          rows="6"
        ></Textarea>
        <Footbox>#키워드</Footbox>
      </Divright>

      {/* <img src={img} alt="pre" /> */}
    </Divboxes>
  );
};

export default Textbox;

const Divboxes = styled.div`
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
const Photo = styled.label`
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
const Option = styled.option`
  color: black;
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
