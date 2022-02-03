import React from "react";
import Card from "../UI/Card";
import "./PrintUsersList.scss"
const PrintUsersList = (props) => {
    {console.log(props.usersList)}
  const Print = props.usersList.map((user, index) => {
   return <div className="printUser" key={index}>
      {user.name} ({user.age} years old)
    </div>;
  });
  console.log(Print)

  return <Card className="print-users-control">{Print}</Card>;
};
export default PrintUsersList;