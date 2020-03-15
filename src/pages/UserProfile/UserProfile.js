import React from "react";
import "./UserProfile.styles.scss";
import Layout from "../../containers/Layout";
import CircleShape from "../../components/CircleShape";
import ProfileItem from "../../components/ProfileItem";
import { useHistory } from "react-router-dom";

export default function() {
  return <Layout Header={Header} Content={Content} color="warning" />;
}

function Header(props) {
  const history = useHistory();
  return (
    <div className="menu__header">
      <div style={{ flexGrow: 1 }}>
        <h2>پروفایل کاربری</h2>
      </div>
      <div className="cursor--pointer">
        <span
          className="lnr lnr-arrow-left cursor--pointer"
          onClick={() => history.goBack()}
        />
      </div>
    </div>
  );
}

const profileItems = [
  {
    label: "نام و نام خانوادگی",
    value: "امیر حسین کریمی",
    editable: true,
    icon: "lnr-user"
  },
  {
    label: "نوع اکانت",
    value: "کاربر نقره ای ناویت",
    editable: true,
    icon: "lnr-gift"
  },

  {
    label: "شماره تلفن",
    value: "09193211519",
    editable: false,
    icon: "lnr-tablet"
  }
];
function Content(props) {
  return (
    <div className="profile__content">
      <CircleShape style={{ margin: "auto" }} icon="lnr-cloud-download" />
      <div className="profile__items">
        {profileItems.map(item => (
          <ProfileItem {...item} key={item.label} />
        ))}
      </div>
    </div>
  );
}
