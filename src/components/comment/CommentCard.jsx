import React from "react";
import styled from "styled-components";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";

import { deleteComments } from "../../redux/modules/comments";
import { getComments } from "../../redux/modules/comments";

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

export default function CommentCard(props) {
  // console.log(props.id)
  const dispatch = useDispatch();

  

  const deleteComment = () => {
    if (window.confirm("삭제하실?")) {
      console.log("댓글 삭제!");
      dispatch(deleteComments(props.id));
      dispatch(getComments());
    } else {
      alert("휴");
    }
  };




  if (props.isEditable === true) {
    return (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            src="/static/images/avatar/1.jpg"
            style={{ width: "30px", height: "30px", cursor: "pointer" }}
          />
        </ListItemAvatar>
        <CardBody>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
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
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
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
            <span style={{ color: "rgb(187, 187, 187)", fontSize: "12px" }}>
              30분 전
            </span>
            <span style={{ color: "rgb(187, 187, 187)", fontSize: "12px" }}>
              {" "}
              ·{" "}
            </span>
            <CardInfoFooter style={{ cursor: "pointer" }}>
              답글 달기
            </CardInfoFooter>
            <span style={{ color: "rgb(187, 187, 187)", fontSize: "12px" }}>
              {" "}
              ·{" "}
            </span>
            <CardInfoFooter
              style={{ cursor: "pointer" }}
              onClick={deleteComment}
            >
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
            style={{ width: "30px", height: "30px" }}
          />
        </ListItemAvatar>
        <CardBody>
          <ListItemText
            primary={props.nickname}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
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
            <span style={{ color: "rgb(187, 187, 187)", fontSize: "12px" }}>
              30분 전
            </span>
            <span style={{ color: "rgb(187, 187, 187)", fontSize: "12px" }}>
              {" "}
              ·{" "}
            </span>
            <CardInfoFooter style={{ cursor: "pointer" }}>
              답글 달기
            </CardInfoFooter>
            <span style={{ color: "rgb(187, 187, 187)", fontSize: "12px" }}>
              {" "}
              ·{" "}
            </span>
            <CardInfoFooter style={{ cursor: "pointer" }}>신고</CardInfoFooter>
          </CardInfo>
        </CardBody>
      </ListItem>
    );
  }
}
