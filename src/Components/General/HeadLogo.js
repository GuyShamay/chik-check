import React from "react";
import logo from "../../Logos/small-logo-cc.png";
import "./HeadLogo.css";
const HeadLogo = () => {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
  );
};
export default HeadLogo;
