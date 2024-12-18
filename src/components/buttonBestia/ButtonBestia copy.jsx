import React from 'react';
import './index.css'; // Nếu bạn có CSS riêng cho nút này

const ButtonBestiaVer2= ({text,func}) => {
  return (
    <button className="button button--bestia text-gilroy-bold uppercase" onClick={func}>
      <div className="button__bg"></div>
      <span>{text}</span>
    </button>
  );
}

export default ButtonBestiaVer2;
