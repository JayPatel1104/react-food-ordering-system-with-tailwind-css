import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import SearchBar from "./components/SearchBar";

const Applayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <SearchBar></SearchBar>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout></Applayout>);
