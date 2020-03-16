import React from "react";
import Layout from "../../containers/Layout";
import "./AboutUs.styles.scss";
import { useHistory } from "react-router-dom";
import Video from "../../components/Video/Video";
import Carousel from "../../components/Glidejs/Carousel";
import { Facebook, Instagram, Youtube, Whatsapp } from "../../components/Icons";
import Employee from "../../components/Employee";

export default function() {
  return <Layout Header={Header} Content={Content} color="warning" />;
}

function Header(props) {
  const history = useHistory();
  return (
    <div className="menu__header">
      <div style={{ flexGrow: 1 }}>
        <h2>درباره ناویت بدانید</h2>
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
const employees = [
  {
    name: "سید هادی قبولی",
    work: "توسعه دهنده وب"
  },
  {
    name: "سید هادی قبولی",
    work: "توسعه دهنده وب"
  },
  {
    name: "سید هادی قبولی",
    work: "توسعه دهنده وب"
  },
  {
    name: "سید هادی قبولی",
    work: "توسعه دهنده وب"
  }
];

function Content(props) {
  return (
    <div className="about-us__content">
      <h2>حرفه ای سفر خواهید کرد</h2>
      <div className="about-us__text">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
        درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
        نرم افزارها شناخت بیشتری را برای طراحان رایانه ای می باشد .
      </div>
      <br />
      <hr className="line" />
      <br />
      <Video>
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        <source
          src="https://www.w3schools.com/html/mov_bbb.ogg"
          type="video/ogg"
        />
        Your browser does not support HTML5 video.
      </Video>
      <br />
      <hr className="line" />
      <br />

      <div className="supporters">
        <h2>مجموعه هایی که اعتماد کرده اند</h2>
        <Carousel
          options={{
            focusAt: "center",
            gap: 15,
            perView: 3
          }}
        >
          <Facebook />
          <Youtube />
          <Whatsapp />
        </Carousel>
      </div>
      <br />
      <hr className="line" />
      <br />
      <div className="employees">
        <h2>با شما و همراه شما</h2>
        <Carousel
          options={{
            focusAt: "center",
            gap: 25,
            perView: 1.5,
            breakpoints: {
              800: {
                perView: 1
              }
            }
          }}
        >
          {employees.map((employee, i) => (
            <Employee {...employee} key={"em" + employee} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
