import React from "react";
import "./ProfileItem.styles.scss";

export default function({ icon, label, editable, value }) {
  return (
    <div className="profile__item" disabled={!editable}>
      <span className={`profile__item__icon lnr ${icon}`} />
      <span className="profile__item__label">{label}</span>
      <span className="profile__item__value">{value}</span>
      {editable && (
        <span className="lnr lnr-pencil cursor--pointer profile-edit-pencil" />
      )}
    </div>
  );
}
