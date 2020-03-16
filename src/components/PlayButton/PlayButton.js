import React from "react";
import classnames from "classnames";
import { Play } from "../Icons";
import "./PlayButton.scss";

export default function({ className, ...props }) {
  return (
    <div
      className={classnames("play-shape", {
        [className]: className
      })}
      {...props}
    >
      <div className="second-layer" />
      <div className="third-layer">
        <Play />
      </div>
    </div>
  );
}
