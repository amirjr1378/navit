import React from "react";
import "./Suggestion.styles.scss";

const Suggestion = function({ brandLogo, diffTime, price, ...props }) {
  return (
    <div className="suggestion__container">
      <div className="suggestion__brand">
        <img src={brandLogo} alt={brandLogo} />
      </div>
      <div className="suggestion__diffTime">{diffTime} دقیقه</div>
      <div className="suggestion__price">{price} تومان</div>
    </div>
  );
};
export default Suggestion;
