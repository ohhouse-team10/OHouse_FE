import React from "react";
import styled from "styled-components";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardInfo = styled.div``;

const CardInfoFooter = styled.span`
  color: rgb(187, 187, 187);
  font-size: 12px;
`;

export default function CommentCard(props) {
    




  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar src="/static/images/avatar/1.jpg" style={{'width':'30px','height':'30px'}}/>
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
          <CardInfoFooter>답글 달기</CardInfoFooter>
          <span style={{ color: "rgb(187, 187, 187)", fontSize: "12px" }}>
            {" "}
            ·{" "}
          </span>
          <CardInfoFooter>신고</CardInfoFooter>
        </CardInfo>
      </CardBody>
    </ListItem>
  );
}
