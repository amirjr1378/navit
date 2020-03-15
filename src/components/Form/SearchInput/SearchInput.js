import React from "react";
import "./SearchInput.styles.scss";

export default function({ ...props }) {
  return (
    <div className="search-input__container">
      <input {...props} autoComplete="off" />
      <span className="lnr lnr-magnifier" />
    </div>
  );
}
