import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

const ErrorMessage = ({msg}) => {
  return (
    <Container
      variants={MsgAnimation}
      initial="start"
      animate="end"
      exit="exit"
    >
      {msg}
    </Container>
  );
};

export default ErrorMessage;

const Container = styled(motion.span)`
  position: absolute;
  text-align: center;
  padding: 10px;
  bottom: 100px;
  right: 40%;
  width: 350px;
  height: 40px;
  line-height: 40px;
  background-color: #2b2b2b;
  color: white;
  border-radius: 15px;
`;

const MsgAnimation = {
  start: {opacity: 0, y: 20},
  end: {opacity: 1, y: 0},
  exit: {opacity: 0, y: -50, transition: {duration: 0.5}},
};
