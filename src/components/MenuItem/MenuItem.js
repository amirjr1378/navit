import React from "react";
import "./MenuItem.styles.scss";

export default function({ icon, label, badge }) {
  return (
    <div className="menu__item">
      <span className={"menu__item__icon lnr " + icon} />
      <span className="menu__item__label">{label}</span>
      {badge && <div className="menu__item__badge">{badge} </div>}
    </div>
  );
}
