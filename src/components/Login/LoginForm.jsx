import React, {useState} from "react";
import styled from "styled-components";
import Logo from "../Layout/Logo";
import SNS from "./SNS";
import Button from "../Layout/Button";
import {useNavigate} from "react-router-dom";
import useInput from "../../hooks/useInput";
import {useDispatch} from "react-redux";
import {__userLogin} from "../../redux/modules/userSlice";
import Message from "./Message";
import {AnimatePresence} from "framer-motion";

const LoginForm = () => {
  /** REACT-ROUTER-DOM */
  const navigate = useNavigate();

  /** REACT-REDUX */
  const dispatch = useDispatch();

  /** User Input ManageMent */
  const [email, onChangeEmail] = useInput();
  const [password, onChangePassword] = useInput();

  /** Button Click Event */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {payload} = await dispatch(
      __userLogin({email: email, password: password})
    );
    if (payload.data?.isSuccess) {
      navigate("/");
    } else {
      sendErrorMsg(payload.data.message);
    }
  };

  /** ErrorMessage */
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState("");
  const sendErrorMsg = (msg) => {
    setIsError(true);
    setMsg(msg);
    setTimeout(() => {
      setIsError(false);
    }, 2000);
  };

  /** Temp Console */

  return (
    <>
      <Wrapper>
        <LogoBox>
          <Logo />
        </LogoBox>
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={onChangeEmail}
            name="email"
            type="email"
            position="top"
            placeholder="이메일"
          />
          <Input
            onChange={onChangePassword}
            name="password"
            type="password"
            position="bottom"
            placeholder="비밀번호"
          />
          <Button btnName={"로그인"} type="submit" />
          <Section>
            <Option>비밀번호 재설정</Option>
            <Option onClick={() => navigate("/new")}>회원가입</Option>
          </Section>
        </Form>
        <SNS />
        <GuideMsg>로그인에 문제가 있으신가요?</GuideMsg>
        <NonLoginMsg>비회원 주문 조회하기</NonLoginMsg>
      </Wrapper>
      <AnimatePresence>
        {isError ? <Message msg={msg} /> : null}
      </AnimatePresence>
    </>
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

const Form = styled.form`
  width: 300px;
  margin: 0px 0px 20px 0px;
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

  cursor: pointer;
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
