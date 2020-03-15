import React from "react";
import "./Circle.styles.scss";

export default function({ icon, ...props }) {
  return (
    <div className="shape--circle" {...props}>
      {icon && (
        <div className="shape__icon">
          <span className={"lnr " + icon} />
        </div>
      )}
    </div>
  );
}
