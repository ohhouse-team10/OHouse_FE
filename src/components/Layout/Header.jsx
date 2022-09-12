import React from "react";
import styled from "styled-components";
import logo from "../../image/ohou_text_logo.PNG";
import SearchBox from "./SearchBox";
import Button from "./Button";
import ToggleMenu from "./ToggleMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useNavigate} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

const Header = () => {
  /** REACT-ROUTER-DOM */
  const navigate = useNavigate();

  /** Write Menu Management */
  const [isOpen, setIsOpen] = React.useState(false);
  const onSetIsOpen = () => {
    // onClick
    setIsOpen((props) => !props);
  };

  return (
    <Wrapper>
      <StickyContainer height={81}>
        <Container>
          <Section>
            <LogoBox>
              <LogoImg src={logo} />
            </LogoBox>
            <NavItems>
              <Nav isHome={true}>커뮤니티</Nav>
              <Nav>스토어</Nav>
              <Nav>이사/시공/수리</Nav>
            </NavItems>
            <Etc>
              <EtcWrapper>
                <SearchBox />
                <div>
                  <ShoppingCartIcon />
                </div>
                <NotLogin>
                  <span onClick={() => navigate("/login")}>로그인</span>
                  <span onClick={() => navigate("/new")}>회원가입</span>
                  <span>고객센터</span>
                </NotLogin>
                <BtnBox onClick={onSetIsOpen}>
                  <Button
                    btnName={"글쓰기"}
                    padding={"8px 1px"}
                    fontSize={13}
                  />
                </BtnBox>
                <AnimatePresence>
                  {isOpen ? <ToggleMenu /> : null}
                </AnimatePresence>
              </EtcWrapper>
            </Etc>
          </Section>
        </Container>
      </StickyContainer>
      <StickyContainer height={51}>
        <NavigationLayout>
          <Navigation>
            <NaviWrapper>
              <NavigationItems>
                <NavigationItem isHome={true}>홈</NavigationItem>
                <NavigationItem>팔로잉</NavigationItem>
                <NavigationItem>사진</NavigationItem>
                <NavigationItem>집들이</NavigationItem>
                <NavigationItem>노하우</NavigationItem>
                <NavigationItem>전문가집들이</NavigationItem>
                <NavigationItem>셀프가이드</NavigationItem>
                <NavigationItem>질문과답변</NavigationItem>
                <NavigationItem>이벤트</NavigationItem>
              </NavigationItems>
            </NaviWrapper>
          </Navigation>
        </NavigationLayout>
      </StickyContainer>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background-color: white;
`;

const StickyContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: white;
  height: ${(props) => props.height}px;
`;

const Container = styled.div`
  position: fixed;
  z-index: 1102;
  background-color: white;
  transition: top 0.1s ease 0s;
  top: 0px;
  width: 1333px;
  letter-spacing: -2px;
  width: 100%;
  border-bottom: 1px solid #eaedef;
`;

const Section = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 1256px;
  margin: 0 auto;
  padding: 0 60px;
  box-sizing: border-box;
  line-height: 0;
`;

const LogoBox = styled.div`
  transform: none;
  flex: 0 0 auto;
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

const NavItems = styled.div`
  flex: 1 1 0px;
  white-space: nowrap;
  margin-left: 10px;
`;

const Nav = styled.div`
  border: none;
  background: none;
  position: relative;
  display: inline-block;
  margin: 0 10px;
  padding: 21px 5px 15px;
  font-size: 18px;
  line-height: 1;
  font-weight: bold;
  color: ${(props) => (props.isHome ? "#35C5F0" : "#2f3438")};
  outline: none;
  &:hover {
    color: #35c5f0;
  }
`;

const Etc = styled.div`
  flex: 0 1 650px;
`;

const EtcWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  line-height: 0;
`;

const NotLogin = styled.div`
  display: flex;
  margin: 0 10px 0 8px;
  align-items: center;

  span {
    font-size: 14px;
    line-height: 18px;
    color: #2f3438;
    padding: 0 10px;
    border-left: 1px solid #eaedef;

    cursor: pointer;
  }
`;
const BtnBox = styled.div`
  width: 80px;
  margin-left: 10px;
`;
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
  margin-left: 70px;
`;
const NavigationItem = styled.span`
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
  cursor: pointer;
  &:hover {
    color: #35c5f0;
  }
`;
