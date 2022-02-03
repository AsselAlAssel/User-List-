import React, { useState } from "react";
import "./App.scss";
import Form from "./components/InputForm/Form";
import PrintUsersList from "./components/PrintUserList/PrintUsersList";
const usersList = [
  {
    name: "Ahgmad",
    age: 30,
  },
];
const App = () => {
  const [List, setList] = useState(usersList);

  const AddNewUser = (newUser) => {
    setList((prevUserList) => [...prevUserList, newUser]);
  };
  return (
    <div>
      <Form onAddNewUser={AddNewUser} />

      <PrintUsersList usersList={List} />
    </div>
  );
};

export default App;
