import React from "react";
import Layout from "../../containers/Layout";
import "./TravelList.styles.scss";
import Travel from "../../containers/Travel";
import { useHistory } from "react-router-dom";

export default function() {
  return <Layout Header={Header} Content={Content} color="warning" />;
}

function Header(props) {
  const history = useHistory();
  return (
    <div className="menu__header">
      <div style={{ flexGrow: 1 }}>
        <h2>لیست سفرها</h2>
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

const travels = [
  {
    date: "سفر صبح یکشنبه . ساعت 19:49 . 24 بهمن ماه 1398",
    origin: "تهران , شهران , پایین تر از فلکه اول , خیابان سمیه شرقی",
    destination: "تهران ، میدان ولیعصر",
    price: 18000,
    features: [
      { label: "نوع سرویس", value: "عادی" },
      { label: "توقف در مسیر", value: "17 دقیقه" },
      { label: "نوع سرویس", value: "عادی" },
      { label: "توقف در مسیر", value: "17 دقیقه" },
      { label: "نوع سرویس", value: "عادی" },
      { label: "توقف در مسیر", value: "17 دقیقه" },
      { label: "نوع سرویس", value: "عادی" },
      { label: "توقف در مسیر", value: "17 دقیقه" },
      { label: "نوع سرویس", value: "عادی" },
      { label: "توقف در مسیر", value: "17 دقیقه" }
    ]
  },
  {
    date: "سفر صبح یکشنبه . ساعت 19:49 . 24 بهمن ماه 1398",
    origin: "تهران , شهران , پایین تر از فلکه اول , خیابان سمیه شرقی",
    destination: "تهران ، میدان ولیعصر",
    price: 18000,
    features: [
      { label: "نوع سرویس", value: "عادی" },
      { label: "توقف در مسیر", value: "17 دقیقه" },
      { label: "نوع سرویس", value: "عادی" },
      { label: "توقف در مسیر", value: "17 دقیقه" },
      { label: "نوع سرویس", value: "عادی" },
      { label: "توقف در مسیر", value: "17 دقیقه" },
      { label: "نوع سرویس", value: "عادی" },
      { label: "توقف در مسیر", value: "17 دقیقه" },
      { label: "نوع سرویس", value: "عادی" },
      { label: "توقف در مسیر", value: "17 دقیقه" }
    ]
  }
];
function Content(props) {
  return (
    <div className="travel-list__content">
      {travels &&
        travels.map((travel, i) => <Travel {...travel} key={"travel" + i} />)}
    </div>
  );
}
