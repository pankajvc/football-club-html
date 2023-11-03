import React from "react";
import "./Button.css";
function Button({ name }) {
  return <button className="slice-button w-fit">{name}</button>;
}

export default Button;
