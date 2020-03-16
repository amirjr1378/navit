import React from "react";
import "./Avatar.styles.scss";

export default function({ src, ...props }) {
  return (
    <div
      className="avatar"
      style={{ backroundImage: `url(${src})` }}
      {...props}
    />
  );
}
