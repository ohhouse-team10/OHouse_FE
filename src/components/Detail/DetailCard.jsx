import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { postAPI } from "../../server/api";
import { useDispatch } from "react-redux";
import { _deletDetail } from "../../redux/modules/PostSlice";
import BorderLine from "./BorderLine";

const DetailCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getDetail = async (id) => {
    const response = await postAPI.getPost(id);
    return response;
  };

  const { data, isLoading } = useQuery("detail", () => getDetail(id), {
    staleTime: 0,
    retry: 1,
    keepPreviousData: true,
  });
  const detailInfo = data?.data?.data;

  const deleteClickHandler = () => {
    const post_id = Number(id);
    dispatch(_deletDetail(post_id));
    navigate(`/community`);
  };

  if (isLoading) return;

  return (
    <Card>
      <Contentcard>
        <Font>{detailInfo.type}</Font>&nbsp;
        <Stick>❘</Stick>&nbsp;
        <Font>{detailInfo.style}</Font>&nbsp;
        <DelWarp>
          <DelButton onClick={deleteClickHandler}>삭제하기</DelButton>
        </DelWarp>
      </Contentcard>

      <Img src={detailInfo.thumbnail} alt="Placeholder image" />
      <Contentcard style={{ marginBottom: "40px" }}>
        {detailInfo.content}
      </Contentcard>

      <BorderLine />
    </Card>
  );
};

export default DetailCard;

const Card = styled.div`
  margin: auto;
  padding-top: 7%;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;

  margin: auto;
  margin-top: 15px;
  margin-bottom: 50px;
  background-size: cover;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Contentcard = styled.div`
  display: flex;
  margin: auto;
`;
const Stick = styled.h1`
  color: #dfdfdf;
  font-size: 17px;
`;

const Font = styled.h1`
  color: #7f7f7f;
  font-size: 15px;
  margin-top: 2px;
`;
const DelWarp = styled.div`
  width: 100px;
  padding-left: 67%;
`;
const DelButton = styled.button`
  float: left;

  font-size: 14px;
  width: 80px;
  height: 100%;
  margin-left: 100%;
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
