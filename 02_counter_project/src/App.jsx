import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //  useState(..) = always returns two things in form of Array
  let [counter, setCounter] = useState(15); // counter is a variable and setCounter is a method to change the counter

  //let counter = 15;
  const incrsVal = () => {
    /*  console.log("clicked", counter);
      counter = counter + 1;  */
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const dcrsVal = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Learn Fast !</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={incrsVal}>Increase Value</button>
      <button onClick={dcrsVal}>Decrease Value</button>
    </>
  );
}

export default App;
