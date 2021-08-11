import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

function ModifyUserModal({ showModal, userId }) {
  const [username, setUsername] = useState("");
  const [surname, setSurname] = useState("");

  const modifyUser = () => {
    if (username && surname) {
      axios.put(
        `https://rekrutacja-api-app.azurewebsites.net/api/account/${userId}`,
        {
          name: username,
          surname: surname,
        }
      );
      setUsername("");
      setSurname("");
    } else {
      alert("Puste pola");
    }
  };

  return (
    <Background>
      <Container>
        <Content>
          <Buttons>
            <ExitButton
              onClick={() => {
                showModal(false);
              }}
            >
              X
            </ExitButton>
          </Buttons>
          <Title>
            <h1>Modify user</h1>
          </Title>
          <Form>
            <Input
              placeholder="Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Input>
            <Input
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            ></Input>
            <ContinueButton
              onClick={(e) => {
                e.preventDefault();
                modifyUser();
              }}
            >
              CONTINUE
            </ContinueButton>
          </Form>
        </Content>
      </Container>
    </Background>
  );
}

const Input = styled.input`
  margin: 3px;
  padding: 5px 10px;
  outline: none;
  border: 1px solid black;
  border-radius: 2px;
`;

const Title = styled.div`
  display: inline-block;
  margin-top: 10px;
`;

const Form = styled.form`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 99999;
  inset: 0;
  color: black;
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Content = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px solid black;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const ExitButton = styled.button`
  display: flex;
  background-color: lightgray;
  border-radius: 2px;
  border: transparent;
  outline: none;
  padding: 8px 8px;
  cursor: pointer;
`;

const ContinueButton = styled.button`
  margin-top: 50px;
  display: flex;
  padding: 10px 80px;
  border-radius: 2px;
  outline: none;
  border: transparent;
  background-color: lightgray;
  color: #f9f9f9;
  letter-spacing: 2px;
  cursor: pointer;
`;
export default ModifyUserModal;
