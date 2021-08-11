import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import User from "./User";

function Home() {
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");

  return (
    <Container>
      <Content>
        <Input
          placeholder="First name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          placeholder="Surname"
          onChange={(e) => setUserSurname(e.target.value)}
          value={userSurname}
        />
        <ContinueButton
          onClick={() => {
            if (userName && userSurname) {
              axios.post("https://localhost:5001/api/account", {
                name: userName,
                surname: userSurname,
              });
              setUserName("");
              setUserSurname("");
            } else {
              alert("Puste pola");
            }
          }}
        >
          SEND
        </ContinueButton>
        <ShowUsers>
          <User />
        </ShowUsers>
      </Content>
    </Container>
  );
}

const ShowUsers = styled.ul`
  list-style: none;
  overflow-y: scroll;
`;

const ContinueButton = styled.button`
  padding: 10px 50px;
`;

const Input = styled.input`
  border: 2px solid black;
  padding: 5px;
  border-radius: 3px;
  margin: 5px;
  outline: none;
  color: black;
  margin: 10px;
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: lightgray;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export default Home;
