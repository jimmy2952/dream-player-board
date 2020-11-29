import React, { useState } from "react";
import styled from "styled-components";
import ConfirmedMessage from "./ConfirmedMessage";
import "./App.css";

const BoardContainer = styled.div`
  width: 100vw;
  padding: 8px;
  border: 1px solid #4a4a4a;
  @media (min-width: 768px) {
    width: 60vw;
    padding: 16px;
  }
`;

const MessageTextarea = styled.textarea`
  width: 100%;
  border: 2px solid #dddddd;
  border-radius: 8px;
  font-size: 24px;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  background-color: #4a4a4a;
  color: white;
  border-radius: 5px;
  width: 10rem;
  font-size: 24px;
  cursor: pointer;
`;

const MessageContainer = styled.div``;

const Hr = styled.hr`
  background-color: #4a4a4a;
`;

const NoMessage = styled.p`
  text-align: center;
  font-size: 24px;
  color: #4a4a4a;
  font-weight: 700;
`;

const App = () => {
  const [message, setMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState([]);

  const inputHandler = (event) => {
    setMessage(event.target.value);
  };

  const leaveMessageHandler = (event) => {
    event.preventDefault();
    console.log(confirmMessage);
    setConfirmMessage((prevStat) => {
      const newArr = [...prevStat];
      newArr.push(message);
      return newArr;
    });
    setMessage("");
  };

  const deleteConfirmedMessageHandler = (index) => {
    setConfirmMessage((prevStat) => {
      const newArr = prevStat.filter((msg, i) => i !== index);
      return newArr;
    });
  };

  return (
    <BoardContainer>
      <form onSubmit={leaveMessageHandler}>
        <MessageTextarea
          rows="5"
          placeholder="請輸入留言..."
          value={message}
          onChange={inputHandler}
        ></MessageTextarea>
        <ButtonContainer>
          <Button type="submit">留言</Button>
        </ButtonContainer>
        {!confirmMessage[0] && (
          <MessageContainer>
            <Hr size="5" />
            <NoMessage>目前沒有訊息</NoMessage>
          </MessageContainer>
        )}
        {confirmMessage &&
          confirmMessage.map((message, index) => {
            return (
              <ConfirmedMessage
                key={index}
                confirmedMessage={message}
                deleteMessageHandler={() => deleteConfirmedMessageHandler(index)}
              />
            );
          })}
      </form>
    </BoardContainer>
  );
};

export default App;
