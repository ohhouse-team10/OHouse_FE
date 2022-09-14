import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import ToggleMenuItem from "./ToggleMenuItem";

const ToggleMenu = ({
  hasIcon = false,
  hasSubTitle = false,
  itemList = [],
  interval,
}) => {
  return (
    <Wrapper
      variants={ToggleAnimation}
      initial="start"
      animate="end"
      exit="exit"
      interval={interval}
    >
      <Items>
        {itemList.map((item) => {
          return (
            <ToggleMenuItem
              key={item.title}
              hasIcon={hasIcon}
              hasSubTitle={hasSubTitle}
              title={item.title}
              subTitle={item.subTitle}
              onClickFunction={item.clickFn}
            />
          );
        })}
      </Items>
    </Wrapper>
  );
};

export default ToggleMenu;

const Wrapper = styled(motion.div)`
  position: absolute;
  top: ${(props) => props.interval}px;
  right: 8px;
  opacity: 1;
  visibility: visible;
  z-index: 900;
`;

const Items = styled.div`
  position: relative;
  padding: 8px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(218, 221, 224);
  border-radius: 6px;
  box-shadow: rgb(63 71 77 / 20%) 0px 4px 10px 0px;
`;

const ToggleAnimation = {
  start: {opacity: 0, y: -10},
  end: {opacity: 1, y: 0},
  exit: {opacity: 0, y: -10, transition: {duration: 0.2}},
};
