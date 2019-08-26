import React, {useState} from "react";
import {specials} from "../../../data";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  const [specialState, setSpecialState] = useState(specials);
  // STEP 2 - add the imported data to state

  return (
    <div className="special_cont">
      {
        specialState.map((item) => {
          return <SpecialButton key = {item} text = {item} addSpecials={props.addSpecials}/>
        })
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       }
    </div>
  );
};

export default Specials;
