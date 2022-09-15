import React, {useState} from "react";
import styled from "styled-components";
import FormItem from "./FormItem";
import Button from "../Layout/Button";
import {__userUpdate} from "../../redux/modules/userSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const EditUserForm = () => {
  const [nickName, setNickName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [img, setImg] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getNickName = (name) => {
    setNickName(name);
  };
  const getStatusMsg = (msg) => {
    setStatusMessage(msg);
  };
  const getImg = (img) => {
    setImg(img);
  };

  const onClickHandler = (event) => {
    event.preventDefault();
    // const data = {
    //   nickname: nickName,
    //   statusMessage: statusMessage,
    // };
    // let formData = new FormData();
    // formData.append(
    //   "data",
    //   new Blob([JSON.stringify(data)], {type: "application/json"})
    // );
    // formData.append("profile_image", img);
    // dispatch(__userUpdate(formData));
    dispatch(
      __userUpdate({
        nickname: nickName,
        profile_image: img,
        statusMessage: statusMessage,
      })
    );
    navigate("/");
  };

  return (
    <>
      <EditHeader>
        <div>회원정보수정</div>
        <span>탈퇴하기</span>
      </EditHeader>
      <Form onSubmit={onClickHandler}>
        <FormItem
          title={"이메일"}
          msg={"이메일을 변경하시러면 운영자에게 이메일을 보내주세요."}
          disable={true}
        />
        <FormItem title={"별명"} getInfo={getNickName} required={true} />
        <FormItem title={"홈페이지"} disable={true} />
        <FormItem title={"생년월일"} disable={true} />
        <FormItem
          title={"프로필 이미지(URL)"}
          getInfo={getImg}
          required={true}
        />
        <FormItem title={"한줄 소개"} getInfo={getStatusMsg} required={true} />
        <BtnBox>
          <Button btnName={"회원 정보 수정"} type="submit" />
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
  span {
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
