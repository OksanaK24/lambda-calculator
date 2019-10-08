import React from "react";

const OperatorButton = (props) => {
  return (
    <button className = "buttons-operators"  onClick = {() => props.addOperator(props.text.value)}>
      
        {props.text.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;
