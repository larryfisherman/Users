import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ModifyUserModal from "./ModifyUserModal";

function User() {
  const [allUsers, setAllUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    axios
      .get("https://localhost:5001/api/account")
      .then((res) => setAllUsers(res.data));
  }, [allUsers]);

  const deleteUser = (userId) => {
    axios.delete(`https://localhost:5001/api/account/${userId}`);
  };

  return (
    <React.Fragment>
      {allUsers.map((user) => (
        <Content>
          <Buttons>
            <DeleteButton
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              X
            </DeleteButton>
            <ModifyButton
              onClick={() => {
                setShowModal(true);
                setUserId(user.id);
              }}
            >
              Modify
            </ModifyButton>
          </Buttons>
          <SingleUser key={user.id}>
            {user.name} {user.surname}
          </SingleUser>
        </Content>
      ))}
      {showModal && (
        <ModifyUserModal showModal={setShowModal} userId={userId} />
      )}
    </React.Fragment>
  );
}

const Buttons = styled.div`
  justify-content: space-between;
  display: flex;
  padding: 5px;
`;
const Content = styled.div`
  margin-top: 100px;
`;
const ModifyButton = styled.button``;
const DeleteButton = styled.button``;

const SingleUser = styled.li`
  display: flex;
  flex-direction: column;

  background-color: lightgray;
  padding: 80px 150px;
  border-radius: 3px;
`;

export default User;
