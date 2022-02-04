import React, { useRef, useState } from "react";
import "./InputForm.scss";
const InputForm = (props) => {
  const nameEntered = useRef("");
  const ageEntered = useRef("");
  const submitHndler = (e) => {
    e.preventDefault();
   
    const newUser = {
      name: nameEntered.current.value.trim(),
      age: nameEntered.current.value.trim(),
    };
    props.onAddNewUser(newUser);
    nameEntered.current.value="";
    ageEntered.current.value=""
  };

  return (
    <form action="" onSubmit={submitHndler}>
      <div className="form-control">
        <label htmlFor="useName">User Name</label>
        <input
          type="text"
          name="userName"
          placeholder="Enter your name"
          ref={nameEntered}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          ref={ageEntered}
        />
        <input type="submit" value="Add" />
      </div>
    </form>
  );
};

export default InputForm;
