import React from "react";
import classnames from "classnames";
import proptypes from "prop-types";
import "./Dropdown.styles.scss";
function Dropdown({ children, as: Component = "div", className, ...props }) {
  return (
    <Component
      className={classnames("dropdown__container", { [className]: className })}
      {...props}
    >
      {children}
    </Component>
  );
}
export const Toggle = React.memo(function({ className, children }) {
  return React.Children.map(children, child =>
    React.cloneElement(child, {
      className: classnames("dropdown__button", child.props.className)
    })
  );
});
Toggle.propTypes = {
  className: proptypes.string,
  children: proptypes.element.isRequired
};

export const Content = React.memo(function({
  children,
  className,
  as: Component = "div",
  ...props
}) {
  return (
    <Component className="dropdown__content" {...props}>
      {React.Children.map(children, child => (
        <span className="dropdown__item">{child}</span>
      ))}
    </Component>
  );
});

Content.propTypes = {
  className: proptypes.string
};
export default React.memo(Dropdown);
