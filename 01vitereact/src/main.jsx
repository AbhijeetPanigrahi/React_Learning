import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function HelloApp() {
  const name = "Abhijeet";
  return (
    <div>
      <h1>Hello developers ! I am {name}</h1>
      {/* here {name} is evaluated expression  */}
    </div>
  );
}

const reactElement = React.createElement(
  "a",
  { href: "http://google.com", target: "_blank" },
  "click me to open Google"
);
ReactDOM.createRoot(document.getElementById("root")).render(<HelloApp />);

// ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
