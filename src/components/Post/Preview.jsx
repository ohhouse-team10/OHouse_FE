import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import styled from "styled-components";

const Preview = ({img}) => {
  const reader = new FileReader();
  const file = img;

  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgSrc(reader.result);
      };
    }
  });

  return <PreviewImage src={imgSrc} />;
};

export default Preview;

const PreviewImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
