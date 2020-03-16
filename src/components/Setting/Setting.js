import React from "react";
import Switch from "react-switch";
import "./Setting.styles.scss";

function Setting({ name, value, icon, ...props }) {
  return (
    <div className="setting">
      <span className="setting__icon">
        <span className={`lnr ${icon}`} />
      </span>
      <span className="setting__label">{name}</span>
      <span className="setting__switch">
        <Switch
          onChange={check => console.log("toggle", check)}
          checked={value}
          onColor="#FCCE9B"
          onHandleColor="#f78408"
          offColor="#E8E8E8"
          offHandleColor="#fff"
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.9)"
          handleDiameter={25}
          height={23}
          id="normal-switch"
          uncheckedIcon={false}
          checkedIcon={false}
        />
      </span>
    </div>
  );
}
export default Setting;
