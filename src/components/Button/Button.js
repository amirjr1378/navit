import React from "react";
import classnames from "classnames";
import "./Button.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({
    children,
    className = "",
    loading = false,
    round,
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
        ['btn--' + color]: color
    });
    return (
        <button className={btnClassName} {...otherProps}>
            <div className={classnames("btn__content", { hidden: loading })}>
                {children}
            </div>
            <div className={classnames("btn__spinner", { hidden: !loading })}>
                <FontAwesomeIcon icon={['fas', 'spinner']} pulse />
            </div>
        </button>
    );
}

export default Button;
