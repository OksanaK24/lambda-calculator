import React from "react";



const NumberButton = (props) => {
  return (
    <button className = "buttons-numbers" id = {`b${props.text}`} onClick = {() => props.addNumber(props.text)}>
      
        {props.text} 
        {/* Display a button element rendering the data being passed down from the parent container on props */}
      
    </button>
  );
};

export default NumberButton;
