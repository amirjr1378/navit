import React from "react";
import Layout from "../../containers/Layout";
import "./Menu.styles.scss";
import CircleShape from "../../components/CircleShape";
import MenuItem from "../../components/MenuItem";
import { useHistory } from "react-router-dom";

export default function() {
  return <Layout Header={Header} Content={Content} />;
}

function Header(props) {
  const history = useHistory();
  return (
    <div className="menu__header">
      <div style={{ flexGrow: 1 }}>
        <h2>منوی کاربردی</h2>
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

const menuItems = [
  { label: "سفر ها", icon: "lnr-car" },
  { label: "سرویس ها", icon: "lnr-briefcase" },
  { label: "افزایش اعتبار", icon: "lnr-heart", badge: 2 },
  { label: "تراکنش ها", icon: "lnr-pie-chart" },
  { label: "منتخب ها", icon: "lnr-star" },
  { label: "اطلاعات کاربری", icon: "lnr-user" },
  { label: "درباره ما", icon: "lnr-heart" },
  { label: "پشتیبانی", icon: "lnr-bubble", badge: 5 },
  { label: "سوالات متداول", icon: "lnr-question-circle" },
  { label: "تنظیمات", icon: "lnr-cog" }
];
function Content(props) {
  return (
    <div className="menu__content">
      <CircleShape style={{ margin: "auto" }} />
      <div className="menu__items">
        {menuItems.map(mi => (
          <MenuItem {...mi} key={mi.label} />
        ))}
      </div>
    </div>
  );
}
