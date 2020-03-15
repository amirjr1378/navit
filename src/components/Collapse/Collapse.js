import React from "react";
import classnames from "classnames";
import "./Collapse.styles.scss";

export const collapseContext = React.createContext(null);

function Collapse({ children, className, ...props }) {
  const [collapse, setCollapse] = React.useState(false);
  const toggle = function() {
    setCollapse(state => !state);
  };
  return (
    <collapseContext.Provider value={{ collapse, toggle }}>
      <div
        className={classnames({
          "collapse--active": collapse,
          [className]: className
        })}
      >
        {children}
      </div>
    </collapseContext.Provider>
  );
}

const Toggle = function({ as: Component = "div", children, ...props }) {
  const { toggle, collapse } = React.useContext(collapseContext);
  const ui = typeof children === "function" ? children({ collapse }) : children;
  return (
    <Component {...props} onClick={toggle} style={{ cursor: "pointer" }}>
      {ui}
    </Component>
  );
};

const Content = function({
  as: Component = "div",
  children,
  className,
  ...props
}) {
  const { collapse } = React.useContext(collapseContext);
  const contentRef = React.useRef(null);
  const maxHeight = collapse ? contentRef.current.scrollHeight : 0;
  const ui = typeof children === "function" ? children({ collapse }) : children;

  return (
    <Component
      {...props}
      className={classnames("collapse__content", {
        [className]: className
      })}
      style={{ maxHeight }}
      ref={contentRef}
    >
      {ui}
    </Component>
  );
};

Collapse.Toggle = Toggle;
Collapse.Content = Content;
export default Collapse;
