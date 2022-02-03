import React from "react";
import Card from "../UI/Card";
import "./PrintError.scss";
const PrintError = (props) => {

  document.addEventListener("click",()=>{
    props.onOkay();
  })
  const okayHandler=()=>{
    props.onOkay();
  }
  return (
    <div className="error-panel">
      <Card className="error-control">
        <div className="erroe-head">
          <h1>Invalid input</h1>
        </div>
        <div className="error-type">
            <p>{props.text}</p>
        </div>
        <div className="okay">
            <button onClick={okayHandler}>Okay</button>
        </div>
      </Card>
    </div>
  );
};
export default PrintError;
