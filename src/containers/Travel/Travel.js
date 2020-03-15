import React from "react";
import "./Travel.styles.scss";
import { useToggle } from "../../hooks";
import { Button } from "../../components/Button";
import classnames from "classnames";

export default function({
  date,
  origin,
  destination,
  features,
  price,
  ...props
}) {
  const [collapse, toggle] = useToggle(false);
  return (
    <div className="travel__container" {...props}>
      <div className="travel__date">{date}</div>
      <div>
        <div className="travel__path">
          <span className="lnr lnr-map-marker" />
          <div>مبدا:{origin}</div>
        </div>

        <div className="travel__path">
          <span className="lnr lnr-pushpin" />
          <div>مقصد:{destination}</div>
        </div>
      </div>

      {!collapse && (
        <div className="travel__footer">
          <span className="text-warning">{price} تومان</span>
          <Button color="warning-reverse" onClick={toggle}>
            مشاهده جزئیات
          </Button>
        </div>
      )}

      <div
        className={classnames("features", {
          show: collapse
        })}
      >
        {features.map(feature => (
          <div className="feature">
            <strong>{feature.label} </strong>
            <span>{feature.value}</span>
          </div>
        ))}
      </div>

      {collapse && (
        <div className="close-button">
          <Button color="warning" circle onClick={toggle}>
            <span className="lnr lnr-chevron-up"></span>
          </Button>
        </div>
      )}
    </div>
  );
}
