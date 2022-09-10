import { styled } from "@mui/material";
import React, { useState, useEffect } from "react";
import HeartImg from "../../../../../css 이미지/heart (1).png"
import EmptyHeartImg from "../../../../../css 이미지/heart (2).png"
const Heart = styled.img`
    
    
`

const Buttons = ({like,onClick}) => {
    return (
       <Heart src={like?HeartImg:EmptyHeartImg} onClick={onClick}/>
    );
};

export default Buttons;