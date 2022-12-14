import React from "react";
import styled from "styled-components";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import {useDispatch} from "react-redux";
import {useState} from "react";

import {deleteComments} from "../../redux/modules/commentsSlice";
import {updateComments} from "../../redux/modules/commentsSlice";

import {TimeToToday} from "../../utils/TimeToToday";

export default function CommentCard(props) {
  const dispatch = useDispatch();
  const [editCheck, setEditCheck] = useState("수정");
  const [editInput, setEditInput] = useState(props.content);

  const sendReport = () => {
    alert("해당 댓글의 신고 접수가 완료되었습니다!");
  };

  const deleteComment = () => {
    if (window.confirm("삭제하실건가욥...?")) {
      dispatch(deleteComments({comment_id: props.comment_id}));
    } else {
      alert("휴");
    }
  };

  const editBtn = (e) => {
    if (e.target.innerText === "수정") {
      setEditCheck("취소");
    } else {
      setEditCheck("수정");
    }
  };

  const editInputText = (e) => {
    setEditInput(e.target.value);
  };

  let editData = {
    content: editInput,
    comment_id: props.comment_id,
  };

  const editComment = () => {
    dispatch(updateComments(editData));
    setEditCheck("수정");
  };

  // createdAt 로직은 한국 표준시 / 서버 데이터는 미국
  // 본인의 댓글인 경우 수정/삭제 가능(내 댓글 표시 추가)
  if (props.isEditable === true) {
    return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            src={props.profile_image}
            style={{width: "30px", height: "30px", cursor: "pointer"}}
          />
        </ListItemAvatar>
        <CardBody>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  sx={{display: "inline"}}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {props.nickname}
                </Typography>
                <MyComment
                  type="fill"
                  variant="primary1"
                  className="ewncmdz10 css-15wkkbd"
                >
                  내 댓글
                </MyComment>
              </React.Fragment>
            }
            secondary={
              editCheck === "수정" ? (
                <React.Fragment>
                  <Typography
                    sx={{display: "inline"}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {props.content}
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Typography
                    sx={{display: "inline"}}
                    style={{display: "flex", alignItems: "center"}}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    <EditerInput
                      onChange={editInputText}
                      type="text"
                      defaultValue={props.content}
                    />
                    <EditerButton onClick={editComment}>수정</EditerButton>
                  </Typography>
                </React.Fragment>
              )
            }
          />
          <CardInfo>
            <CardInfoSpan>
              {TimeToToday(new Date(props.createdAt))}
            </CardInfoSpan>
            <CardInfoSpan> · </CardInfoSpan>
            <CardInfoFooter style={{cursor: "pointer"}}>
              답글 달기
            </CardInfoFooter>
            <CardInfoSpan> · </CardInfoSpan>
            <CardInfoFooter style={{cursor: "pointer"}}>
              <CardInfoSpan onClick={editBtn}>{editCheck}</CardInfoSpan>
            </CardInfoFooter>
            <CardInfoSpan> · </CardInfoSpan>
            <CardInfoFooter style={{cursor: "pointer"}} onClick={deleteComment}>
              삭제
            </CardInfoFooter>
          </CardInfo>
        </CardBody>
      </ListItem>
    );
  }

  if (props.isEditable === false) {
    return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            src="/static/images/avatar/1.jpg"
            style={{width: "30px", height: "30px"}}
          />
        </ListItemAvatar>
        <CardBody>
          <ListItemText
            primary={props.nickname}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{display: "inline"}}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {props.content}
                </Typography>
              </React.Fragment>
            }
          />
          <CardInfo>
            <CardInfoSpan>
              {TimeToToday(new Date(props.createdAt))}
            </CardInfoSpan>
            <CardInfoSpan> · </CardInfoSpan>
            <CardInfoFooter style={{cursor: "pointer"}}>
              답글 달기
            </CardInfoFooter>
            <CardInfoSpan> · </CardInfoSpan>
            <CardInfoFooter style={{cursor: "pointer"}} onClick={sendReport}>
              신고
            </CardInfoFooter>
          </CardInfo>
        </CardBody>
      </ListItem>
    );
  }
}

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardInfo = styled.div``;

const CardInfoFooter = styled.span`
  color: rgb(187, 187, 187);
  font-size: 12px;
`;

const MyComment = styled.span`
  font-size: 10px;
  padding: 0px 4px;
  color: rgb(255, 255, 255);
  background-color: rgb(53, 197, 240);
  display: inline-block;
  font-weight: 700;
  height: 16px;
  line-height: 16px;
  border-radius: 4px;
  margin-left: 5px;
`;

const EditerInput = styled.textarea`
  width: 300px;
  height: 20px;
  max-height: 100px;
  resize: none;
  overflow: hidden;
`;
const CardInfoSpan = styled.span`
  color: rgb(187, 187, 187);
  font-size: 12px;
`;

const EditerButton = styled.button`
  width: 45px;
  height: 43px;
  float: top;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 13px;
  font-weight: bold;
  color: rgb(53, 197, 240);
  &:disabled {
    color: rgb(196, 196, 196);
  }
`;
