import React from "react";
import classnames from "classnames";
import "./Layout.styles.scss";

function Layout({ color, Header, Content }) {
  return (
    <div className={classnames("layout-container", { [color]: color })}>
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__content">
        <Content />
      </div>
    </div>
  );
}

export default Layout;
