import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Profile = ({ users, addUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const foundUser = users.find((u) => u.id === parseInt(id));
    setUser(foundUser);
  }, [id, users]);

  const onSubmit = (data) => {
    const newUser = { ...data, id: parseInt(id) };
    addUser(newUser);
    setUser(newUser);
    alert("User added!");
  };

  return (
    <div>
      <h2>Profile Page</h2>
      {!user ? (
        <div>
          <p>User not found. Add user info below:</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Name" {...register("name")} required />
            <input placeholder="Email" {...register("email")} required />
            <button type="submit">Add User</button>
          </form>
        </div>
      ) : (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
      <br />
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default Profile;