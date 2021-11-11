import React from "react";
import headerLogo from "../assets/images/rickandmorty-logo.png";
import Form from "./form";
import Reset from "./reset";

export default function Header() {
  return (
    <header className="header">
      <div>
        <img className="header__logo" src={headerLogo} alt="Rick and Morty " />
        <Form />
        <Reset />
      </div>
    </header>
  );
}
