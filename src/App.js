import React, { useState } from "react";
import "./App.scss";
import { CheckValidOrNot } from "./components/CheckValidOrNot";
import Form from "./components/InputForm/Form";
import PrintError from "./components/PrintError/PrintError";
import PrintUsersList from "./components/PrintUserList/PrintUsersList";

const usersList = [
  {
    name: "Ahgmad",
    age: 30,
  },
];
const App = () => {
  const [List, setList] = useState(usersList);
  const [validOrNot, setValidOrNot] = useState({
    valid: true,
    description: "",
  });

  const AddNewUser = (newUser) => {
    const result = CheckValidOrNot(newUser);
    if (result.valid) {
      setList((prevUserList) => [...prevUserList, newUser]);
    } else {
      setValidOrNot(result);
    }
  };
 const  okayHandler=()=>{
    setValidOrNot(
      {
        valid:true,
        description:""
      }
    )
  }
  return (
    <div>
      {!validOrNot.valid && <PrintError text={validOrNot.description} onOkay={okayHandler} />}
      <Form onAddNewUser={AddNewUser} />
      <PrintUsersList usersList={List} />
    </div>
  );
};

export default App;
