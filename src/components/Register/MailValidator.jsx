import styled from "styled-components";
import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {init, send} from "emailjs-com";

const MailValidator = ({email, getIsValid}) => {
  useEffect(() => {
    init("DAkCXALUmtrQI3_XY");
  });
  const [authNumber, setAuthNumber] = useState("");
  const [code] = useState(Math.floor(100000 + Math.random() * 900000));
  const [isValid, setIsValid] = useState(false);
  const onChange = (e) => {
    setAuthNumber(e.target.value);
  };

  const onSendEmail = (info) => {
    setTimeout(() => send("service_2gjhjrh", "template_ebikpmh", info), 2000);
  };

  const onCheckAuthNumber = () => {
    setIsValid(String(code) === String(authNumber));
    getIsValid(isValid);
  };

  useEffect(() => {
    if (isValid) return;
    const info = {email: email, message: code};
    onSendEmail(info);
  }, []);

  useEffect(() => {
    getIsValid(isValid);
  }, [isValid, setIsValid]);

  return (
    <Container>
      <Wrapper>
        <Wrapper2>
          <Msg>이메일로 전송된 인증코드를 입력해주세요.</Msg>
          <InputBox>
            <InputBox2>
              <Input
                type="text"
                placeholder="인증코드 6자리 입력"
                onChange={onChange}
              />
              <Button type="button" onClick={onCheckAuthNumber}>
                확인
              </Button>
            </InputBox2>
          </InputBox>
          {isValid ? (
            <InfoMsg isValid={isValid}>확인되었습니다.</InfoMsg>
          ) : (
            <InfoMsg>이메일을 확인해 주세요.</InfoMsg>
          )}
        </Wrapper2>
      </Wrapper>
    </Container>
  );
};

export default MailValidator;

const Container = styled.div`
  overflow: hidden;
  margin-bottom: 20px;
  width: 100%;
`;

const Wrapper = styled.div`
  min-height: 143px;
  box-sizing: border-box;
  background: rgb(247, 248, 250);
  padding: 20px 16px;
`;

const Wrapper2 = styled.div`
  min-height: 143px px;
  box-sizing: border-box;
  background: rgb(247, 248, 250);
  padding: 20px 16px;
`;

const Msg = styled.div`
  font-size: 13px;
  line-height: 20px;
  margin-bottom: 12px;
  letter-spacing: -1px;
`;

const InfoMsg = styled.div`
  font-size: 13px;
  line-height: 20px;
  margin-bottom: 12px;
  letter-spacing: -1px;

  color: ${(props) => (props.isValid ? "#2ecc71" : "gray")};
`;

const InputBox = styled.div`
  border: 1px solid rgb(219, 219, 219);
  min-height: 45px;
  padding: 0px 16px;
  background: rgb(255, 255, 255);
  margin-bottom: 10px;
`;

const InputBox2 = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 45px;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const Input = styled.input`
  border: none;
  font-size: 15px;
  line-height: 15px;
  flex: 1 0 0px;
  width: 0px;
`;

const Time = styled.span`
  color: rgb(255, 119, 119);
  margin-right: 20px;
`;

const Button = styled.button`
  white-space: pre;
  height: 31px;
  font-size: 14px;
  line-height: 17px;
  padding: 7px 10px;
  box-sizing: border-box;
  background-color: #a3e4f8;
  border-color: #a3e4f8;
  color: #e5f9ff;
`;
