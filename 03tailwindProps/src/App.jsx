import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-orange-600 text-black p-2 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="Abhijeet" btnTxt="click me" />
      <Card username="React" btnTxt="Learn me" />
    </>
  );
}

export default App;
