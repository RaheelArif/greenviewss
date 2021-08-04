import React, { useState } from "react";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Content from "./components/Content";
import "./App.css";

function App() {
  const [header, setHeader] = useState("green");

  const changeHeader = () => {
    setHeader("green view");
  };
  return (
    <div>
      <Header />
      <Header2 />

      <button onClick={changeHeader}>change name</button>
      <p>{header}</p>
      <Content />
    </div>
  );
}

export default App;
