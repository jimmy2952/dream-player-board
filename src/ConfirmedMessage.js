import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlay } from "@fortawesome/free-solid-svg-icons";

const ConfirmMessageContainer = styled.div`
  box-sizing: border-box;
  background-color: #dddddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 2rem;
`;

const ConfirmMessageDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ConfirmMessage = styled.p`
  width: 80%;
  font-size: 24px;
  color: #4a4a4a;
  margin: 0;
`;

const ConfirmMessageIconDiv = styled.div`
  width: 20%;
  height: 6vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const ReplyMessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const ReplyMessage = styled.input`
  width: 95%;
  border-radius: 8px;
  font-size: 24px;
  border: 0.5px solid #dddddd;
`;

const ReplyHr = styled.hr`
  background-color: #ffffff;
  border: none;
`;

const ConfirmedMessage = (props) => {
  const [replyMessage, setReplyMessage] = useState();
  const [confirmedReplyMessage, setConfirmedReplyMessage] = useState("");
  // const deleteMessageHandler = (messageId) => {
  //   setConfirmMessage((prevStat) => {
  //     const newArr = prevStat.filter((msg) => {
  //       return messageId !== msg.id;
  //     });
  //     return newArr;
  //   });
  // };

  const replyChangeHandler = (event, messageId) => {
    setReplyMessage(event.target.value);
  };

  const replySubmitHandler = () => {
    setConfirmedReplyMessage(replyMessage);
  };
  return (
    <ConfirmMessageContainer>
      <ConfirmMessageDiv>
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <ConfirmMessage>{props.confirmedMessage}</ConfirmMessage>
        </div>
        <ConfirmMessageIconDiv>
          <FontAwesomeIcon icon={faTimes} style={{ cursor: "pointer" }} onClick={props.deleteMessageHandler} />
          <span style={{ color: "white" }}>回覆</span>
        </ConfirmMessageIconDiv>
      </ConfirmMessageDiv>
      {!confirmedReplyMessage && (
        <ReplyMessageContainer>
          <ReplyMessage
            placeholder="請輸入留言..."
            onChange={replyChangeHandler}
            value={replyMessage}
          ></ReplyMessage>
          <FontAwesomeIcon icon={faPlay} onClick={replySubmitHandler} style={{cursor: "pointer"}} />
        </ReplyMessageContainer>
      )}
      {confirmedReplyMessage && (
        <>
          <ReplyHr size="5" />
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <ConfirmMessage>{confirmedReplyMessage}</ConfirmMessage>
          </div>
        </>
      )}
    </ConfirmMessageContainer>
  );
};

export default ConfirmedMessage;
