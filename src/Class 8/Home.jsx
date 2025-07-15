import React from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

const Home = ({ users, addUser }) => {
  return (
    <div>
      <h2>User Directory</h2>
      <UserForm onSubmit={addUser} />
      <UserList users={users} />
    </div>
  );
};

export default Home;