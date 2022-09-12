import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <Container>
      <InputBox>
        <SearchIcon style={{color: "#c2c8cc"}} />
        <Input type="text" placeholder="통합검색" autoComplete="off" />
      </InputBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 1 0px;
  min-width: 0;
  margin-right: 16px;
`;
const InputBox = styled.div`
  display: inline-flex;
  align-items: center;
  line-height: 0;
  box-sizing: border-box;
  border: 1px solid #c2c8cc;
  border-radius: 4px;
  height: 40px;
  padding: 0 14px;
  width: 100%;
`;

const Input = styled.input`
  display: inline-block;
  border: none;
  background: none;
  height: 100%;
  color: #2f3438;
  font-size: 16px;
  line-height: 24px;
  box-sizing: border-box;
  flex: 1 0 0%;
  padding: 0 6px;
  vertical-align: middle;
  outline: none;
`;

export default SearchBox;
