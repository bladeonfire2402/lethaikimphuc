import React, { useState } from "react";
import "./button.css"; // Ensure your CSS is in this file

const Button6 = ({text,func}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={`btn-6 ${hovered ? "hover" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {text}
      <span></span>
    </button>
  );
};

export default Button6;
