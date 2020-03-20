import React from "react";
import classnames from "classnames";
import "./Button.styles.scss";

function Button({
  children,
  className = "",
  loading = false,
  round,
  circle,
  square,
  block,
  color,
  ...otherProps
}) {
  const btnClassName = classnames("btn", {
    "btn-block": block,
    [className]: className,
    "btn-square": square,
    "btn-round": round,
    "btn-circle": circle,
    ["btn--" + color]: color
  });
  return (
    <button className={btnClassName} {...otherProps} disabled={loading}>
      <div className={classnames("btn__content", { hidden: loading })}>
        {children}
      </div>
      <div className={classnames("btn__spinner", { hidden: !loading })}>
        <img
          src="/static/img/spinner.png"
          srcSet="
        /static/img/spinner.png, 
        /static/img/spinner@2x.png 2x,
        /static/img/spinner@3x.png 3x,
        "
          alt="spinner"
        />
      </div>
    </button>
  );
}

export default Button;
