import React, {useState} from "react";
import useInput from "../../hooks/useInput";
import styled from "styled-components";
import SNS from "../Login/SNS";
import TOS from "./TOS";
import Button from "../Layout/Button";
import useIsValid from "../../hooks/useIsValid";
import {
  mergeEmailId,
  isValidEmailForm,
  isValidPassword,
  isMatchedPassword,
} from "../../utils/RegisterUtil";
import {useNavigate} from "react-router-dom";

const RegisterForm = () => {
  /** REACT-ROUTER-DOM */
  const navigate = useNavigate();

  /** User Input Management */
  const [id, onChangeHandlerId] = useInput();
  const [email, onChangeHandlerEmail] = useInput();
  const [password1, onChangeHandlerPassword1] = useInput();
  const [password2, onChangeHandlerpassword2] = useInput();
  const [nickname, onChangeHandlernickname] = useInput();

  /** Input Error Management */
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPW, setIsValidPW] = useState(true);
  const [isMatchedPW, setIsMatchedPW] = useState(true);

  /** Valid Checker */
  useIsValid(
    [id, email],
    setIsValidEmail,
    isValidEmailForm(mergeEmailId(id, email))
  );
  useIsValid([password1], setIsValidPW, isValidPassword(password1));
  useIsValid(
    [password2],
    setIsMatchedPW,
    isMatchedPassword(password1, password2)
  );

  /** Temp Console */
  console.log(isValidEmail, isValidPW, isMatchedPW);
  return (
    <>
      <Wrapper>
        <h3 style={{fontWeight: "600", marginBottom: "20px"}}>회원가입</h3>
        <SNS />
        <Form>
          <InputField isValid={isValidEmail}>
            <label htmlFor="email">이메일</label>
            <EmailField>
              <input
                type="text"
                placeholder="이메일"
                id="email"
                onChange={onChangeHandlerId}
                required
              />
              <span>@</span>
              <select type="text" onChange={onChangeHandlerEmail}>
                <option value="">선택해주세요</option>
                <option value="naver.com">naver.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="daum.net">daum.net</option>
                <option value="gmail.com">gmail.com</option>
                <option value="nate.com">nate.com</option>
                <option value="hotmail.com">hotmail.com</option>
                <option value="icloud.com">icloud.com</option>
              </select>
            </EmailField>
            {!isValidEmail ? (
              <ErrorMsg>이메일 형식이 올바르지 않습니다.</ErrorMsg>
            ) : null}
            <Button btnName={"이메일 인증하기"} disabled={true} />
          </InputField>
          <InputField isValid={isValidPW}>
            <label htmlFor="pw1">비밀번호</label>
            <InputGuideMsg>
              영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
            </InputGuideMsg>
            <input
              type="password"
              id="pw1"
              placeholder="비밀번호"
              onChange={onChangeHandlerPassword1}
              required
            />
            {!isValidPW ? (
              <ErrorMsg>
                비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.
              </ErrorMsg>
            ) : null}
          </InputField>
          <InputField isValid={isMatchedPW}>
            <label htmlFor="pw2">비밀번호 확인</label>
            <input
              type="password"
              id="pw2"
              placeholder="비밀번호 확인"
              onChange={onChangeHandlerpassword2}
            />
            {!isMatchedPW ? (
              <ErrorMsg>비밀번호가 일치하지 않습니다.</ErrorMsg>
            ) : null}
          </InputField>
          <InputField isValid={true}>
            <label htmlFor="nickname">닉네임</label>
            <InputGuideMsg>
              다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)
            </InputGuideMsg>
            <input
              type="text"
              id="nickname"
              placeholder="별명 (2~15자)"
              onChange={onChangeHandlernickname}
              required
            />
            <ErrorMsg></ErrorMsg>
          </InputField>
        </Form>
        <TOS />
        <Button btnName={"회원가입하기"} />
        <LoginQuestion>
          이미 아이디가 있으신가요?{" "}
          <span onClick={() => navigate("/login")}>로그인</span>
        </LoginQuestion>
      </Wrapper>
    </>
  );
};

export default RegisterForm;

const Wrapper = styled.div`
  display: flex;
  margin: 0px auto;
  width: 330px;
  justify-content: center;

  flex-direction: column;
  box-sizing: border-box;
  padding: 40px 0px;
`;

const Form = styled.form`
  border-top: 1px solid gray;
  padding-top: 20px;
  margin-bottom: 20px;
`;

const InputGuideMsg = styled.div`
  color: gray;
  font-size: 13px;
  margin-bottom: 15px;
  letter-spacing: -1px;
`;

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  input {
    &:focus {
      outline: ${(props) =>
        props.isValid ? "2px solid rgb(192, 234, 247);" : "2px solid #e74c3c"};
    }
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
    outline: ${(props) =>
      props.isValid ? "1px solid #dbdbdb" : "2px solid #e74c3c"};
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
    border: 1px solid #dbdbdb;
  }
  span {
    margin: 0 10px;
  }
`;

const ErrorMsg = styled.div`
  color: red;
  font-size: 13px;
  letter-spacing: -1px;
  margin: 10px 0px;
`;

/**
#email {
  outline: ${(props) =>
    props.isValid ? "1px solid #dbdbdb" : "2px solid #e74c3c"};
  border: 1px solid #dbdbdb;
}
#pw1 {
  outline: ${(props) =>
    props.isValid ? "1px solid #dbdbdb" : "2px solid #e74c3c"};
  border: 1px solid #dbdbdb;
}
#pw2 {
  outline: ${(props) =>
    props.isValid ? "1px solid #dbdbdb" : "2px solid #e74c3c"};
  border: 1px solid #dbdbdb;
}
#nickname {
  outline: 2px solid rgb(192, 234, 247);
  border: 1px solid #dbdbdb;
}
*/
