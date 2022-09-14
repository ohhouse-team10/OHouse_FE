import React from "react";
import styled from "styled-components";

const Preview = ({ img }) => {
  //   let blob = new Blob([new ArrayBuffer(img)], { type: "image/*" });

  console.log("pre img", img);

  const imgSrc = URL.createObjectURL(img);

  //   const encodeFileToBase64 = (fileBlob) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(fileBlob);
  //     return new Promise((resolve) => {
  //       reader.onload = () => {
  //         resolve();
  //       };
  //     });
  //   };

  //   const imgSrc = encodeFileToBase64(img);
  //   console.log("imgSrc", imgSrc);

  return (
    <div>
      <PreviewImage src={imgSrc} />
      preview compo
    </div>
  );
};

export default Preview;

const PreviewImage = styled.img`
  /* height: 48px; */
  /* width: 48px; */

  border: 1px dashed red;
  /* background-image: url(img); */
`;
