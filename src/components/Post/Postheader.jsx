import React from "react";
import styled from "styled-components";
import logo from "../../image/ohou_text_logo.PNG";
import { useNavigate } from "react-router-dom";

const Postheader = () => {
  const navigate = useNavigate();

  return (
    <Postheaderbox>
      <LogoBox>
        <LogoImg
          src={logo}
          onClick={() => [
            navigate(`/`),
            alert(
              "페이지를 벗어나시겠습니까? \n이 페이지를 벗어자면 작성한 내용은 모두 삭제됩니다. "
            ),
          ]}
        />
        <Addbutton onClick={() => navigate(`/`)}>
          <span>올리기</span>
        </Addbutton>
      </LogoBox>

      <NavigationLayout>
        <Navigation>
          <NaviWrapper>
            <NavigationItems>
              <NavigationItem1 isHome={true}>
                <span onClick={() => navigate("/post")}>사진</span>
              </NavigationItem1>
              <NavigationItem2>
                <span onClick={() => navigate("/post")}>동영상</span>
              </NavigationItem2>
            </NavigationItems>
          </NaviWrapper>
        </Navigation>
      </NavigationLayout>
    </Postheaderbox>
  );
};

export default Postheader;

const Postheaderbox = styled.div`
  height: 80px;
  line-height: 80px;
  display: block;
`;
const LogoBox = styled.div`
  transform: none;
  flex: 0 0 auto;
  padding-top: 1%;
`;
const LogoImg = styled.img`
  height: 60px;
  width: 110px;
  border: none;
  background: none;
  display: inline-flex;
  align-items: center;
  margin: -4px;
  padding: 4px;
  font-size: 0;
  line-height: 0;
  color: #212629;
  outline: none;
`;
const Addbutton = styled.button`
  float: right;
  cursor: pointer;
  touch-action: manipulation;
  margin-top: 1%;
  margin-right: 1%;
  border: none;
  position: relative;
  width: auto;
  transition: background-color 0.1s ease 0s, opacity 0.1s ease 0s;
  padding: 11px 45px 12px;
  background-color: rgb(53, 197, 240);
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  border-radius: 4px;
`;

// nav바 zoom in하면 scroll생김 수정필
const NavigationLayout = styled.div`
  position: fixed;
  z-index: 1101;
  transition: top 0.1s ease 0s;
  top: 81px;
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #eaedef;
`;
const Navigation = styled.div`
  max-width: 1256px;
  margin: 0 auto;
  padding: 0 60px;
  position: relative;
  z-index: 1101;
  background: #ffffff;

  display: flex;
`;

const NaviWrapper = styled.div`
  flex: 1 0 0px;
`;
const NavigationItems = styled.div`
  display: flex;
  align-items: stretch;
  overflow-x: auto;
  white-space: nowrap;
  margin: 0 -5px;
  height: 50px;
`;

// border_bottom harcoding상태. click시 자연스럽게 적용되게 수정필
const NavigationItem1 = styled.span`
  border: none;
  background: none;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: top;
  text-align: center;
  box-sizing: border-box;
  padding: 12px 6px;
  outline: none;
  letter-spacing: -1px;
  color: ${(props) => (props.isHome ? "#35C5F0" : "#2f3438")};
  font-size: 15px;
  font-family: OhouseSans, "Noto Sans KR", "Apple SD Gothic Neo", "맑은 고딕",
    "Malgun Gothic", sans-serif;
  cursor: pointer;
  border-bottom: 2px solid #35c5f0;

  &:hover {
    color: #35c5f0;
    font-size: 15px;
  }
`;
const NavigationItem2 = styled.span`
  border: none;
  background: none;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: top;
  text-align: center;
  box-sizing: border-box;
  padding: 12px 6px;
  outline: none;
  letter-spacing: -1px;
  color: ${(props) => (props.isHome ? "#35C5F0" : "#2f3438")};
  font-size: 15px;
  font-family: OhouseSans, "Noto Sans KR", "Apple SD Gothic Neo", "맑은 고딕",
    "Malgun Gothic", sans-serif;
  cursor: pointer;

  &:hover {
    color: #35c5f0;
    font-size: 15px;
  }
`;
