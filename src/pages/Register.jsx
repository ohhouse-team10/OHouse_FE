import React from "react";
import styled from "styled-components";
import RegisterForm from "../components/Register/RegisterForm";
import RegisterHeader from "../components/Register/RegisterHeader";

export const Register = () => {
  return (
    <Layout>
      <RegisterHeader />
      <Main>
        <Wrapper>
          <RegisterForm />
        </Wrapper>
      </Main>
    </Layout>
  );
};

export default Register;

const Layout = styled.div`
  height: calc(100vh - 45px);
`;

const Main = styled.section`
  padding-top: 40px;
  background-color: rgb(250, 250, 250);
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
`;
