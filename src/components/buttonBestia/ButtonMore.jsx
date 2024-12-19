import React, { useState } from "react";
import "./button.css";
import { useNavigate,Link } from 'react-router-dom'

const ButtonMore = ({ label, onClick }) => {
  const navigate=useNavigate()
  const [rippleStyle, setRippleStyle] = useState({});
  const [showRipple, setShowRipple] = useState(false);

  const handleClick = (e) => {
    // Get button dimensions
    const rect = e.target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    setRippleStyle({
      width: size,
      height: size,
      top: y,
      left: x,
    });

    setShowRipple(true);
    navigate('./contact')

    setTimeout(() => setShowRipple(false), 500);

    
  };

  return (
    <button className="btn-effect text-gilroy-bold uppercase" onClick={handleClick}>
      {label}
      {showRipple && <span className="ripple" style={rippleStyle}></span>}
    </button>
  );
};

export default ButtonMore;
