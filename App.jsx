import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import {useState} from "react";

function App(){//state declare
  //eval is a built-in JavaScript function that evaluates a string as code. In this case, it takes the current value of calVal (which is a string representing a mathematical expression) and evaluates it to produce the result of the calculation. The result is then stored in the calVal state variable, which updates the display to show the calculated value.
   let [calVal, setCalVal] = useState("");
   const onButtonClick = (buttonText)=> {
    console.log( buttonText);
    if(buttonText ==="C"){
      setCalVal("");
    }
    else if(buttonText ==="="){
         const result=eval(calVal);
         setCalVal(result);
    }else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return(
    <div className={styles.calculator}>
      {/* //calval is the state variable that holds the current value of the calculator display. The Display component is rendered with the current value of calVal passed as a prop. The ButtonContainer component is rendered with the onButtonClick function passed as a prop, which will handle button clicks and update the calVal state accordingly. */}
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
  
    </div>
  );
}
export default App;