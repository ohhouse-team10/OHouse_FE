import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Preview from "../Post/Preview";

const FormItem = ({
  title,
  required = false,
  isImg = false,
  msg = "",
  getInfo = null,
  disable = false,
}) => {
  const [input, setInput] = useState("");
  const onChangeInput = (event) => {
    isImg ? setInput(event.target.files[0]) : setInput(event.target.value);
  };

  useEffect(() => {
    if (getInfo !== null) getInfo(input);
  }, [input, setInput]);

  return (
    <Container>
      <FormItemTitle>
        {title}
        {required ? <div>{"* 필수항목"}</div> : null}
      </FormItemTitle>
      <FormItemContent>
        <FormItemInputBox>
          {isImg ? (
            <FormImgBox>
              <label htmlFor="img">
                {input === "" ? (
                  <FormImg src="https://image.ohou.se/i/bucketplace-v2-development/uploads/users/profile_images/1662687088_kakao_2422245639.jpg?gif=1&w=640&h=640&c=c&webp=1" />
                ) : (
                  <Preview id="preview" img={input} />
                )}
                <input id="img" type="file" onChange={onChangeInput} />
              </label>
            </FormImgBox>
          ) : (
            <FormItemInput onChange={onChangeInput} disabled={disable} />
          )}
        </FormItemInputBox>
        <Msg>{msg}</Msg>
      </FormItemContent>
    </Container>
  );
};

export default FormItem;

const Container = styled.div`
  display: flex;
`;

const FormItemTitle = styled.div`
  padding-top: 45px;
  width: 100px;
  letter-spacing: -2px;
  margin-right: 10px;

  div {
    margin-top: 5px;
    font-size: 13px;
    color: #757575;
  }
`;

const FormItemContent = styled.div`
  max-width: 400px;
  flex: 1 0 0px;
  padding: 20px 0;
`;

const FormItemInputBox = styled.div`
  padding: 20px 0;
`;

const FormItemInput = styled.input`
  text-align: left;
  font-size: 15px;
  border-radius: 6px;
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
  display: block;
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  padding: 0 15px;
  line-height: 40px;
  border: 1px solid #dbdbdb;
  background-color: ${(props) => (props.disabled ? "#ddd" : "#fff")};
  color: #424242;
`;

const FormImgBox = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  input {
    display: none;
  }
  label {
  }
`;
const FormImg = styled.img`
  width: 200px;
  height: 200px;
`;

const Msg = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin-top: -15px;
`;
