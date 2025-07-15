import React from "react";
import { useForm } from "react-hook-form";

const UserForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const submitForm = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input placeholder="Name" {...register("name")} required />
      <input placeholder="Email" {...register("email")} required />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;