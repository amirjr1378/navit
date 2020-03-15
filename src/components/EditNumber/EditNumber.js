import React from "react";
import "./EditNumber.styles.scss";

export default function({ label, phone, ...props }) {
  return (
    <div className="edit-container" {...props}>
      <div className="edit__text">
        <strong>{label}</strong>
        <span>{phone}</span>
      </div>
      <div className="edit__icon">
        <span className="lnr lnr-pencil" />
      </div>
    </div>
  );
}
