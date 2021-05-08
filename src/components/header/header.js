import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>Задачи</Link>
    </div>
  );
};
export default Header;
