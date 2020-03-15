import React from "react";
import "./ProfileItem.styles.scss";
import Editable from "../Editable/Editable";

export default function({ icon, label, editable, value }) {
  return (
    <Editable text={value} onSuccess={input => console.log("input", input)}>
      <div className="profile__item" disabled={!editable}>
        <span className={`profile__item__icon lnr ${icon}`} />
        <span className="profile__item__label">{label}</span>
        <Editable.View
          className="profile__item__value"
          Content="span"
          wrapperClassName="change-input-profile"
        />
        {editable && (
          <Editable.Toggle
            as="span"
            className="lnr lnr-pencil cursor--pointer profile-edit-pencil"
          />
        )}
      </div>
    </Editable>
  );
}
