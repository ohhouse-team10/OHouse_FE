import React from "react";
import styled from "styled-components";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import BookIcon from "@mui/icons-material/Book";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <HelpDesk>
          <span>고객센터</span>
          <p>1670-0876</p>
          <div>
            09:00~18:00 (주말, 공휴일은 오늘의집 직접배송 및 이사/시공/수리
            문의에 한해 전화 상담 가능)
          </div>
        </HelpDesk>
        <IconBox>
          <AppleIcon />
          <ShopIcon />
          <FormatQuoteIcon />
          <FacebookIcon />
          <InstagramIcon />
          <BookIcon />
          <LocalCafeIcon />
        </IconBox>
        <Links>
          <span>브랜드 스토리</span>
          <span>회사소개</span>
          <span>채용정보</span>
          <span>이용약관</span>
          <span>개인정보처리방침</span>
          <span>공지사항</span>
          <span>고객센터</span>
          <span>고객의 소리</span>
          <span>전문가 등록</span>
          <span>사업자 구매회원</span>
          <span>제휴/광고 문의</span>
          <span>입점신청 문의</span>
          <span>안전거래 센터</span>
          <span>상품광고 소개</span>
        </Links>

        <Info>
          <div>상호명 :(주)버킷플레이스</div>
          <div>
            이메일 :(고객문의) cs@bucketplace.net (제휴문의)
            contact@bucketplace.net
          </div>
          <div>대표이사 :이승재</div>
          <div>사업자등록번호 :119-86-91245</div>
          <div>통신판매업신고번호 :제2018-서울서초-0580호 사업자정보확인</div>
          <div>
            주소 :서울 서초구 서초대로74길 4 삼성생명서초타워 25층, 27층
          </div>
          <div>
            우리은행 채무지급보증안내 :(주)버킷플레이스는 고객님이 현금결제한
            금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를
            보장하고 있습니다. 서비스가입사실확인
          </div>
        </Info>
        <Comment>
          {
            "오늘의집은 개별 판매자가 상품을 판매하는 오픈마켓이며 (주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및 거래 등에 대해 일체 책임을 지지 않습니다.\n단 ㈜버킷플레이스가 판매자로 등록 판매한 상품의 경우는 판매자로서 책임을 부담합니다."
          }
        </Comment>
        <CopyRight>
          Copyright 2014. bucketplace, Co., Ltd. All rights reserved
        </CopyRight>
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  padding: 30px 0;
  background-color: #f7f9fa;
  position: relative;
  bottom: 0;
  width: 100%;
`;
const Container = styled.div`
  max-width: 1256px;
  margin: 0 auto;
  padding: 0 60px;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 16px;
  position: relative;

  letter-spacing: -1px;
`;
const HelpDesk = styled.div`
  span {
    font-weight: 700;
    color: inherit;
    font-size: 14px;
  }
  p {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    margin-top: 6px;
  }
  div {
    margin-top: 10px;
    padding: 0 16px;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 16px;
    position: relative;
    color: #2f3438;
    margin-left: -15px;
  }
`;

const IconBox = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  margin-top: 0;

  width: 300px;
  display: flex;
  justify-content: space-evenly;
`;

const Links = styled.p`
  font-size: 10px;
  line-height: 14px;
  padding-top: 2px;
  span {
    display: inline-block;
    margin-top: 8px;
    margin-right: 10px;
    color: #2f3438;
  }
`;

const Info = styled.div`
  font-size: 10px;
  line-height: 14px;
  margin-top: 10px;
  color: #828c94;

  div {
    display: inline-block;
    margin-right: 8px;
    line-height: 16px;
  }
`;
const Comment = styled.div`
  font-size: 10px;
  line-height: 14px;
  color: #828c94;
  margin-top: 10px;
  white-space: pre-wrap;
`;
const CopyRight = styled.p`
  font-size: 10px;
  line-height: 14px;
  margin-top: 10px;
`;
