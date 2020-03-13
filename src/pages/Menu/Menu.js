import React from "react";
import Layout from "../../containers/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Menu.styles.scss";
import CircleShape from "../../components/CircleShape";
import MenuItem from "../../components/MenuItem";

export default function() {
  return <Layout Header={Header} Content={Content} />;
}

function Header(props) {
  return (
    <div className="menu__header">
      <div style={{ flexGrow: 1 }}>
        <h2>منوی کاربردی</h2>
      </div>
      <div className="cursor--pointer">
        <FontAwesomeIcon icon={["fas", "long-arrow-alt-left"]} size="lg" />
      </div>
    </div>
  );
}

const menuItems = [
  { label: "سفر ها", icon: ["fa", "heart"] },
  { label: "سرویس ها", icon: ["fa", "heart"] },
  { label: "افزایش اعتبار", icon: ["fa", "heart"] },
  { label: "تراکنش ها", icon: ["fa", "heart"] },
  { label: "منتخب ها", icon: ["fa", "heart"] },
  { label: "اطلاعات کاربری", icon: ["fa", "heart"] },
  { label: "درباره ما", icon: ["fa", "heart"] },
  { label: "پشتیبانی", icon: ["fa", "heart"] },
  { label: "سوالات متداول", icon: ["fa", "heart"] },
  { label: "تنظیمات", icon: ["fa", "heart"] }
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
