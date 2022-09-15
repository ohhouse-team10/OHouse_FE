import React from "react";
import styled from "styled-components";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {
  return (
    <Layout>
      <Main>
        <Wrapper>
          <LoginForm />
        </Wrapper>
      </Main>
    </Layout>
  );
};

export default Login;

const Layout = styled.div`
  height: calc(100vh - 45px);
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  background-color: rgb(250, 250, 250);
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
`;
