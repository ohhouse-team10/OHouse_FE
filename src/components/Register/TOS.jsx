import React, {useState} from "react";
import styled from "styled-components";

const TOS = () => {
  const [allAgree, setAllAgree] = useState(false);
  const [items, setItems] = useState([]);

  const allAgreeHandler = () => {};
  const agreeHandler = () => {};

  return (
    <>
      <h4 style={{fontWeight: "600", marginBottom: "20px"}}>약관동의</h4>
      <Wrapper>
        <Container>
          <label>
            <input
              type="checkbox"
              value="false"
              name="agreeAll"
              onChange={allAgreeHandler}
            ></input>
            <span style={{fontWeight: "600"}}>전체동의</span>
            <span id="option">선택항목에 대한 동의 포함</span>
          </label>
        </Container>
        <hr style={{margin: "18px 0", backgroundColor: "#EAEDEF"}} />
        <Container>
          <label>
            <input
              type="checkbox"
              value="false"
              name="agree1"
              onChange={agreeHandler}
            ></input>
            <span>만 14세 이상입니다.</span>
            <span id="option-blue">(필수)</span>
          </label>
        </Container>
        <Container>
          <label>
            <input type="checkbox" value="false" name="agree2"></input>
            <span>이용약관</span>
            <span id="option-blue">(필수)</span>
          </label>
        </Container>
        <Container>
          <label>
            <input type="checkbox" value="false" name="agree3"></input>
            <span>개인정보수집 및 이용동의</span>
            <span id="option-blue">(필수)</span>
          </label>
        </Container>
        <Container>
          <label>
            <input type="checkbox" value="false" name="agree4"></input>
            <span>개인정보 마케팅 활용 동의</span>
            <span id="option">(선택)</span>
          </label>
        </Container>
        <Container>
          <label>
            <input type="checkbox" value="false" name="agree5"></input>
            <span>이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신</span>
            <span id="option">(선택)</span>
          </label>
        </Container>
      </Wrapper>
      <NotEnoughMsg></NotEnoughMsg>
    </>
  );
};

export default TOS;

const Wrapper = styled.div`
  padding: 18px;
  border: 1px solid #eaedef;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 13px;
  margin: 15px 0;

  span {
    font-weight: 500;
    letter-spacing: -1px;
  }

  #option {
    font-size: 11px;
    margin-left: 3px;
    font-weight: 300;
    opacity: 0.7;
  }
  #option-blue {
    font-size: 11px;
    margin-left: 3px;
    color: rgba(21, 200, 255);
    font-weight: 400;
  }
`;

const NotEnoughMsg = styled.div``;
