import React from "react";
import "./splash-ui.styles.scss";

function Splash(props) {
  return (
    <div className="splash-container">
      <img
        src="/static/img/bg.png"
        srcSet="/static/img/bg@2x.png 2x,
        /static/img/bg@3x.png 3x"
        alt="orange bg"
        className="bg--orange"
      />

      <img
        src="/static/img/background.png"
        srcSet="/static/img/background@2x.png 2x,
        /static/img/background@3x.png 3x"
        alt="tow"
        className="bg--town"
      />

      <img
        src="/static/img/logo.png"
        srcSet="/static/img/logo@2x.png 2x,
        /static/img/logo@3x.png 3x"
        alt="logo"
        className="logo"
      />

      <span className="lnr lnr-sync"></span>
    </div>
  );
}

export default Splash;
