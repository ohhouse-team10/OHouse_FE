import React from "react";
import styled from "styled-components";

import { useState } from "react";

const BorderLine = () => {
  const [follow, setFollow] = useState(true);
  const [followCount, setFollowCount] = useState(false);
  const followeHandler = (e) => {
    e.preventDefault();
    setFollowCount(followCount + 1);
    setFollow(!follow);
  };
  const cancelfollowHandler = (e) => {
    e.preventDefault();
    if (followCount > 0) {
      setFollowCount(followCount - 1);
    }
    setFollow(!follow);
  };

  return (
    <Wrap>
      <ProfileLayout>
        <div>
          <img
            src="https://i.pinimg.com/564x/29/f6/df/29f6dfff21b5e71169245e389ced72bd.jpg"
            alt="Placeholdser"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "30px",
            }}
          />
          f
        </div>
        <div className="media-content">
          <div style={{ display: "flex" }}>
            <h3 style={{ margin: "1px", fontSize: "18px", fontWeight: "bold" }}>
              닉네임
            </h3>
          </div>
          <h6>@soonger</h6>
        </div>
      </ProfileLayout>
      <div style={{ float: "right", marginLeft: "auto" }}>
        {follow ? (
          <Follow onClick={followeHandler}>
            <h5>＋팔로우</h5>
          </Follow>
        ) : (
          <UnFollow onClick={cancelfollowHandler}>
            <h5> ✓ 팔로잉</h5>
          </UnFollow>
        )}
      </div>
    </Wrap>
  );
};

export default BorderLine;

const Wrap = styled.div`
  border: 1px solid black;

  list-style: none;
  display: flex;
  padding: 11px;
  border-top-style: solid;

  border-width: 1.5px;
  border-color: #e4e3e3;
  height: 40px;
`;
const ProfileLayout = styled.div`
  display: flex;
  margin: 5px;
  overflow: hidden;
  height: 40px;
  position: relative;
`;

const Follow = styled.button`
  float: right;
  font-size: 14px;
  width: 90px;
  height: 100%;

  font-weight: bold;
  position: relative;
  background-color: #10bbff;
  border: 0;
  border-radius: 4px;
  outline: 0;
  color: white;
  &:hover {
    opacity: 0.5;
  }
`;
const UnFollow = styled.button`
  float: right;
  height: 100%;
  font-size: 14px;
  width: 90px;
  font-weight: bold;
  color: #878787;
  background-color: transparent;
  border: 1px;
  border-radius: 4px;
  position: relative;
  border-color: #b7b7b7;
  border-style: solid;
  border-width: 1px;
  &:hover {
    opacity: 0.5;
  }
`;
