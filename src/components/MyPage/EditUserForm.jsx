import React from "react";
import styled from "styled-components";
import FormItem from "./FormItem";
import Button from "../Layout/Button";

const EditUserForm = () => {
  return (
    <>
      <EditHeader>
        <div>회원정보수정</div>
        <a>탈퇴하기</a>
      </EditHeader>
      <Form>
        <FormItem
          title={"이메일"}
          required={true}
          msg={"이메일을 변경하시러면 운영자에게 이메일을 보내주세요."}
        />
        <FormItem title={"별명"} required={true} />
        <FormItem title={"홈페이지"} />
        <FormItem title={"생년월일"} />
        <FormItem title={"프로필 이미지"} isImg={true} />
        <FormItem title={"한줄 소개"} />
        <BtnBox>
          <Button btnName={"회원 정보 수정"} />
        </BtnBox>
      </Form>
    </>
  );
};

export default EditUserForm;

const EditHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;

  div {
    font-size: 24px;
    font-weight: 700;
    flex: 1 0 0px;
  }
  a {
    font-size: 14px;
    color: #ccc;
    text-decoration: underline;

    cursor: pointer;
  }
`;
const Form = styled.form`
  margin: 0;
  padding: 0;
`;

const BtnBox = styled.div`
  margin: 50px 0 0 100px;
  width: 290px;
`;
