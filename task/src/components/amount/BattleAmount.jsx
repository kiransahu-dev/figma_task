import React from "react";
import "./amount.css";
import "../../index.css";
import fb from "../../assets/logos_facebook.svg";
import wp from "../../assets/logos_whatsapp-icon.svg";
import twtr from "../../assets/ri_twitter-x-fill.svg";
import copy from "../../assets/solar_copy-linear.svg";
import share from "../../assets/mdi_share.svg";
import drop from "../../assets/ph_caret-down.png";
const BattleAmount = () => {
  return (
    <div className="main_con">
      <h3>
        start your own <span>battle</span>
      </h3>
      <img src={drop} className="dropdown" />
      <div className="left_content">
        <div className="amount">
          <p>₹</p>
          <input type="text" placeholder="Your battle amount" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M14.105 24.7916C16.73 22.6625 20.7317 20.6441 20.7317 12.04V6.67331C18.3983 6.67331 16.3625 5.57664 14.0817 4.64331C11.9292 5.53581 9.64249 6.68498 7.16916 6.66164V12.0691C7.26249 20.2708 11.0833 22.75 14.105 24.7916Z"
              stroke="#0F002B"
              stroke-width="0.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.425 19.0983C21.6767 20.8483 22.8842 22.8608 24.0917 24.7683C21.9792 23.7782 20.0914 22.3668 18.5442 20.6208M8.49333 18.9058C6.195 20.8891 4.5675 22.7558 3.78 24.64C5.74 23.4733 7.47833 22.5166 9.28083 20.3641M3.92583 3.40082L7.1925 6.66165M8.54 4.47415L6.6325 6.10165L5.005 8.00915M24.0158 3.40665L20.755 6.67332M22.9425 8.02082L21.315 6.11332L19.4075 4.47998M14.105 8.32998C12.7895 8.79557 11.4345 9.14115 10.0567 9.36248C9.7825 14.1866 11.4975 17.5291 14.105 20.09C16.7592 17.5 17.9375 14 17.8967 9.54915C16.586 9.30608 15.3117 8.89637 14.105 8.32998Z"
              stroke="#0F002B"
              stroke-width="0.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p className="txt">*3.5% commision on battle amount</p>
      </div>
      <div className="icon">
        <img src={wp} className="w" />
        <img src={fb} className="f" />
        <img src={twtr} className="t" />
        <img src={copy} className="c" />
        <img src={share} className="s" />
      </div>
    </div>
  );
};

export default BattleAmount;
