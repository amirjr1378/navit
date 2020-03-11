import React from "react";
import "./splash-ui.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Splash(props) {
  return (
    <div className="splash-container">
      <img src="/static/img/bg.png"
     srcSet="/static/img/bg@2x.png 2x,
             /static/img/bg@3x.png 3x"
     className="bg--orange" />

     <img src="/static/img/background.png"
         srcSet="/static/img/background@2x.png 2x,
                 /static/img/background@3x.png 3x"
         className="bg--town"/>

       <img src="/static/img/logo.png"
           srcSet="/static/img/logo@2x.png 2x,
                 /static/img/logo@3x.png 3x"
         className="logo"/>


       <FontAwesomeIcon icon={['fas', 'spinner']} pulse className="splash__spinner"/>

    </div>
  )
}


export default Splash;
