import React, { useState } from "react";
import "./InputForm.scss";
const InputForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const submitHndler = (e) => {
    e.preventDefault();
    const newUser = {
      name: name.trim(),
      age: age.trim(),
    };
    props.onAddNewUser(newUser);
    setAge("");
    setName("");
  };
  const changeNameHandler = (e) => {
    setName(e.target.value);
  };
  const changeAgeHandler = (e) => {
    setAge(e.target.value);
  };
  return (
    <form action="" onSubmit={submitHndler}>
      <div className="form-control">
        <label htmlFor="useName">User Name</label>
        <input
          type="text"
          name="userName"
          value={name}
          placeholder="Add your name"
          onChange={changeNameHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          name="age"
          value={age}
          placeholder="Add your age"
          onChange={changeAgeHandler}
        />
        <input type="submit" value="Add" />
      </div>
    </form>
  );
};

export default InputForm;
