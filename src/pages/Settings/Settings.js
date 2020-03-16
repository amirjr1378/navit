import React from "react";
import Layout from "../../containers/Layout";
import "./Settings.styles.scss";
import { useHistory } from "react-router-dom";
import Setting from "../../components/Setting";
import CircleShape from "../../components/CircleShape";

export default function() {
  return <Layout Header={Header} Content={Content} />;
}

function Header(props) {
  const history = useHistory();
  return (
    <div className="menu__header">
      <div style={{ flexGrow: 1 }}>
        <h2>تنظیمات ناویت</h2>
      </div>
      <div className="cursor--pointer">
        <span
          className="lnr lnr-arrow-left"
          onClick={() => history.goBack()}
        ></span>
      </div>
    </div>
  );
}
const settings = [
  {
    name: "دریافت نوتیفیکیشن",
    value: true,
    icon: "lnr-alarm"
  },
  {
    name: "دریافت رسید توسط پست الکترونیک",
    value: false,
    icon: "lnr-envelope"
  },
  {
    name: "اجازه دسترسی به لوکیشن",
    value: false,
    icon: "lnr-map-marker"
  }
];
function Content(props) {
  return (
    <div className="settings">
      <CircleShape style={{ margin: "auto" }} />

      <div className="setting__items">
        {settings &&
          settings.map((setting, i) => (
            <Setting {...setting} key={"setting" + i} />
          ))}
      </div>
    </div>
  );
}
