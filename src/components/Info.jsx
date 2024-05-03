import React from "react";
import img from "../assets/me.jpg";

export default function Info() {
  return (
    <div className="info-container">
      <img src={img} className="myImg" />
      <p className="name">Osama Sleiman</p>
      <p className="job">Frontend Developer</p>
      <p className="website">osamasleman444@gmail.com</p>
      <a href="mailto:osamasleman444@gmail.com">
        <button className="email-btn">Email</button>
      </a>
      <button className="linkedIN-btn">LinkedIn</button>
    </div>
  );
}
