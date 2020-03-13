import React from "react";
import "./MenuItem.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function({ icon, label }) {
  return (
    <div className="menu__item">
      <span className="menu__item__icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="menu__item__label">{label}</span>
    </div>
  );
}
