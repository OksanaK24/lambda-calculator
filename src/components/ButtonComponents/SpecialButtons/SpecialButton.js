import React from "react";

const SpecialButton = (props) => {
  return (
    <button className = "buttons specials" onClick ={()=> props.addSpecials(props.text)}>
      
        {props.text}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialButton;