import React from "react";
import styled from "styled-components";
import logo from "../../image/ohou_logo.PNG";
import SNS from "./SNS";
import Button from "../Layout/Button";

const LoginForm = () => {
  return (
    <Wrapper>
      <LogoBox>
        <Logo src={logo} />
      </LogoBox>
      <Form>
        <Input name="email" type="email" position="top" placeholder="이메일" />
        <Input
          name="password"
          type="password"
          position="bottom"
          placeholder="비밀번호"
        />
        <Button btnName={"로그인"} />
        <Section>
          <Option>비밀번호 재설정</Option>
          <Option>회원가입</Option>
        </Section>
      </Form>
      <SNS />
      <GuideMsg>로그인에 문제가 있으신가요?</GuideMsg>
      <NonLoginMsg>비회원 주문 조회하기</NonLoginMsg>
    </Wrapper>
  );
};
export default LoginForm;

const Wrapper = styled.div`
  display: flex;
  margin: 0px auto;
  max-width: 300px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px 0px;
`;

const LogoBox = styled.div`
  margin-bottom: 30px;
`;
const Logo = styled.img`
  width: 147px;
  height: 50px;
  margin: 0px auto;
`;

const Form = styled.form`
  width: 300px;
  margin: 0px;
  padding: 0px;
`;
const Input = styled.input`
  position: relative;
  display: block;
  width: 90%;
  padding: 13px 15px 14px;
  border-radius: 4px 4px 0px 0px;
  border: 1px solid rgb(219, 219, 219);
  transition: box-shadow 0.2s ease 0s, background-color 0.2s ease 0s;
  z-index: 1;

  &:focus {
    outline: 2px solid rgb(192, 234, 247);
  }
`;

const Section = styled.section`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-bottom: 20px;
`;

const Option = styled.div`
  font-size: 14px;
`;

const GuideMsg = styled.div`
  font-size: 13px;
  opacity: 0.4;
  margin-bottom: 20px;
`;

const NonLoginMsg = styled.div`
  width: 100%;
  padding-top: 30px;
  margin-top: 30px;
  font-size: 14px;
  border-top: 1px solid;
  border-color: rgb(219, 219, 219);

  text-align: center;
`;
