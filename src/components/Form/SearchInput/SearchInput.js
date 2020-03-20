import React from "react";
import classnames from "classnames";
import "./SearchInput.styles.scss";

export default function({ transparent, ...props }) {
  return (
    <div
      className={classnames("search-input__container", {
        transparent: transparent
      })}
    >
      <input {...props} autoComplete="off" type="search" />
      <span className="lnr lnr-magnifier" />
    </div>
  );
}
