import React from "react";
import styled from "styled-components";

const MyPageNav = () => {
  return (
    <NavContainer>
      <NavContents fontSize={18}>
        <ul>
          <li>
            <a>프로필</a>
          </li>
          <li>
            <a>나의 쇼핑</a>
          </li>
          <li>
            <a>나의 리뷰</a>
          </li>
          <li>
            <a>설정</a>
          </li>
        </ul>
      </NavContents>
      <NavContents fontSize={15}>
        <ul>
          <li>
            <a>회원정보수정</a>
          </li>
          <li>
            <a>알림 설정</a>
          </li>
          <li>
            <a>사용자 숨기기 설정</a>
          </li>
          <li>
            <a>전문가 신청</a>
          </li>
          <li>
            <a>비밀번호 변경</a>
          </li>
          <li>
            <a>추천코드</a>
          </li>
        </ul>
      </NavContents>
    </NavContainer>
  );
};

export default MyPageNav;

const NavContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const NavContents = styled.div`
  font-size: ${(props) => props.fontSize}px;
  overflow: hidden;
  border-bottom: 1px solid #ededed;
  width: 100%;

  ul {
    text-align: center;
    white-space: nowrap;
    list-style: none;

    li {
      display: inline-block;

      a {
        &:not(.active):hover {
          color: #35c5f0;
        }

        display: block;
        padding: 0 10px;
        font-weight: 700;
        position: relative;
        height: 60px;
        line-height: 60px;
        transition: color 0.15s ease;

        cursor: pointer;
        text-decoration: none;
      }
    }
  }
`;
