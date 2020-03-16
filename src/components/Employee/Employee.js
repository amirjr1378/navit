import React from "react";
import Avatar from "../Avatar";
import "./Employee.styles.scss";

export default function({ name, work, ...props }) {
  return (
    <div className="employee__container">
      <Avatar />
      <div className="employee__details">
        <div>{name}</div>
        <div>{work}</div>
      </div>
      <div className="employee__contact">
        <span className="lnr lnr-envelope" />
      </div>
    </div>
  );
}
