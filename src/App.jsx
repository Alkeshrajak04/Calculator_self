import styles from "./App.module.css";
import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
import Heading from "./Components/Heading";
import { useState } from "react";



function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "=") {
      try {
        setCalVal(eval(calVal)); 
      } catch {
        setCalVal("Error");
      }
    } else if (buttonText === "C") {
      setCalVal(""); // Clear the display
    } else {
      setCalVal((prev) => prev + buttonText); // Append button text
    }
  };

  return (
    <>
    <Heading></Heading>
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
    </>
  );
}

export default App;
