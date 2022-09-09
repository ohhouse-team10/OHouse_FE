import React from "react";
import styled from "styled-components";
import SNS from "../Login/SNS";
import TOS from "./TOS";
import Button from "../Layout/Button";

const RegisterForm = () => {
  return (
    <>
      <Wrapper>
        <h3>회원가입</h3>
        <SNS />
        <Form>
          <InputField>
            <label>이메일</label>
            <EmailField>
              <input size="1" placeholder="이메일" />
              <span>@</span>
              <select>
                <option value disabled>
                  선택해주세요
                </option>
                <option value="naver.com">naver.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="daum.net">daum.net</option>
                <option value="gmail.com">gmail.com</option>
                <option value="nate.com">nate.com</option>
                <option value="hotmail.com">hotmail.com</option>
                <option value="icloud.com">icloud.com</option>
              </select>
            </EmailField>
            <div></div>
            <Button btnName={"이메일 인증하기"} disabled />
          </InputField>
          <InputField>
            <label>비밀번호</label>
            <InputGuideMsg>
              영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
            </InputGuideMsg>
            <input placeholder="비밀번호" />
            <div></div>
          </InputField>
          <InputField>
            <label>비밀번호 확인</label>
            <input placeholder="비밀번호 확인" />
            <div></div>
          </InputField>
          <InputField>
            <label>닉네임</label>
            <InputGuideMsg>
              다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)
            </InputGuideMsg>
            <input placeholder="별명 (2~15자)" />
            <div></div>
          </InputField>
        </Form>
        <TOS />
        <Button btnName={"회원가입하기"} />
        <LoginQuestion>
          이미 아이디가 있으신가요? <span>로그인</span>
        </LoginQuestion>
      </Wrapper>
    </>
  );
};

export default RegisterForm;

const Wrapper = styled.div`
  display: flex;
  margin: 0px auto;
  width: 360px;
  justify-content: center;

  flex-direction: column;
  box-sizing: border-box;
  padding: 40px 0px;
`;

const Form = styled.form`
  border-top: 1px solid gray;
  padding-top: 20px;
`;

const InputGuideMsg = styled.div`
  color: gray;
  font-size: 13px;
  margin-bottom: 15px;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  input {
    padding: 0 15px;
    transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
    display: block;
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    padding: 0 15px;
    line-height: 40px;
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    background-color: #fff;
    color: #424242;
    font-size: 12px;
  }
  label {
    margin: 15px 0;
    font-weight: 600;
  }
`;

const LoginQuestion = styled.p`
  text-align: center;
  font-size: 13px;

  span {
    text-decoration: underline;
    font-weight: 600;
  }
`;

const EmailField = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  select {
    width: 100%;
    height: 40px;
  }
  span {
    margin: 0 10px;
  }
`;
