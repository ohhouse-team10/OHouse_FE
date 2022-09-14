import React, { useRef } from "react";
import styled from "styled-components";
import { useState } from "react";

const Selectbox = ({ typeInfo, styleInfo }) => {
  const [type, setType] = useState("");
  const [style, setStyle] = useState("");

  const typeChangeHandler = (e) => {
    setType(e.target.value); // type을 받고
    typeInfo(e.target.value); // props에 담고
  };

  const styleChangeHandler = (e) => {
    setStyle(e.target.value);
    styleInfo(e.target.value);
  };

  return (
    <Selectboxes>
      <Selectleft>
        <Select1>
          <option value="" disabled="">
            평수
          </option>
          <Option value="0">10평 미만</Option>
          <Option value="1">10평대</Option>
          <Option value="2">20평대</Option>
          <Option value="3">30평대</Option>
          <Option value="4">40평대</Option>
          <Option value="5">50평 이상</Option>
        </Select1>
        <Select2 onChange={typeChangeHandler}>
          <option value="" disabled="">
            주거형태
          </option>
          <Option value="원룸&amp;오피스텔">원룸&amp;오피스텔</Option>
          <Option value="아파트">아파트</Option>
          <Option value="빌라&amp;연립">빌라&amp;연립</Option>
          <Option value="단독주택">단독주택</Option>
          <Option value="사무공간">사무공간</Option>
          <Option value="상업공간">상업공간</Option>
          <Option value="기타">기타</Option>
        </Select2>

        <Select3 onChange={styleChangeHandler}>
          <option value="" disabled="">
            스타일
          </option>
          <Option value="모던">모던</Option>
          <Option value="북유럽">북유럽</Option>
          <Option value="빈티지">빈티지</Option>
          <Option value="내추럴">내추럴</Option>
          <Option value="프로방스&amp;로맨틱">프로방스&amp;로맨틱</Option>
          <Option value="클래식&amp;앤틱">클래식&amp;앤틱</Option>
          <Option value="한국&amp;아시아">한국&amp;아시아</Option>
          <Option value="유니크">유니크</Option>
        </Select3>
      </Selectleft>
      <Selectright></Selectright>
    </Selectboxes>
  );
};

export default Selectbox;

const Selectboxes = styled.div`
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
const Option = styled.option`
  color: black;
`;
const Selectright = styled.div`
  /* border: 1px solid yellow; */
  width: 39%;
`;
