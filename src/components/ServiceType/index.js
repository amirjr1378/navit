import React from "react";
import classnames from "classnames";
import "./ServiceType.styles.scss";

function ServiceType({ className, icon, label, color, ...props }) {
  console.log("rerender service type");
  return (
    <div
      className={classnames("service-type__container", {
        [color]: color,
        [className]: className
      })}
      {...props}
    >
      <span className={`service-type__icon lnr ${icon}`} />

      <div className="service-type__line">
        <span />
      </div>

      <center className="service-type__label">{label}</center>
    </div>
  );
}

export default React.memo(ServiceType);
