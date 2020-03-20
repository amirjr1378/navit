import React from "react";

import Layout from "../../containers/Layout";
import "./Faq.styles.scss";
import { useHistory } from "react-router-dom";
import Collapse from "../../components/Collapse";
import { Search } from "../../components/Form/";

export default function() {
  return <Layout Header={Header} Content={Content} />;
}

function Header(props) {
  const history = useHistory();
  return (
    <>
      <div className="menu__header">
        <div style={{ flexGrow: 1 }}>
          <h2>سوالات متداول</h2>
        </div>
        <div className="cursor--pointer">
          <span
            className="lnr lnr-arrow-left"
            onClick={() => history.goBack()}
          />
        </div>
      </div>
      <div className="top-searchbox">
        <Search
          transparent
          type="text"
          name="search"
          placeholder="هر آنچه که میخواهید را جستجو کنید . . ."
        />
      </div>
    </>
  );
}

const faqs = [
  {
    question: "چگونه می توانم از کد هدیه ناویت استفاده کنم ؟",
    answere:
      "شما می توانید رزومه کامل خود، (شامل تحصیلات فرد و یا گروه، سوابق کاری و توان اجرایی در شهر مورد نظر ) را به ایمیل شما می توانید درخواست خود را همراه با رزومه کامل خود که شامل سابقه کاری و تحصیلی شما است به ایمیل info@navit.com ارسال فرمایید. رزومه شما بررسی شده و در آرشیو اطلاعات ما نگهداری می شود. هر زمان که شرکت تصمیم به آغاز فعالیت در شهر مورد درخواست شما را داشته باشد با شما تماس گرفته خواهد شد."
  },
  {
    question:
      "کد معرف خود را برای دوستانم ارسال کردم اما کد به من تعلق نگرفته !",
    answere:
      "شما می توانید رزومه کامل خود، (شامل تحصیلات فرد و یا گروه، سوابق کاری و توان اجرایی در شهر مورد نظر ) را به ایمیل شما می توانید درخواست خود را همراه با رزومه کامل خود که شامل سابقه کاری و تحصیلی شما است به ایمیل info@navit.com ارسال فرمایید. رزومه شما بررسی شده و در آرشیو اطلاعات ما نگهداری می شود. هر زمان که شرکت تصمیم به آغاز فعالیت در شهر مورد درخواست شما را داشته باشد با شما تماس گرفته خواهد شد."
  },
  {
    question: "هزینه سفر در ناویت چگونه محاسبه می شود ؟",
    answere:
      "شما می توانید رزومه کامل خود، (شامل تحصیلات فرد و یا گروه، سوابق کاری و توان اجرایی در شهر مورد نظر ) را به ایمیل شما می توانید درخواست خود را همراه با رزومه کامل خود که شامل سابقه کاری و تحصیلی شما است به ایمیل info@navit.com ارسال فرمایید. رزومه شما بررسی شده و در آرشیو اطلاعات ما نگهداری می شود. هر زمان که شرکت تصمیم به آغاز فعالیت در شهر مورد درخواست شما را داشته باشد با شما تماس گرفته خواهد شد."
  },
  {
    question:
      "آیا می توانم قبل از انجام سفر بعدی خودم، کد هدیه ام را انتخاب کنم ؟",
    answere:
      "شما می توانید رزومه کامل خود، (شامل تحصیلات فرد و یا گروه، سوابق کاری و توان اجرایی در شهر مورد نظر ) را به ایمیل شما می توانید درخواست خود را همراه با رزومه کامل خود که شامل سابقه کاری و تحصیلی شما است به ایمیل info@navit.com ارسال فرمایید. رزومه شما بررسی شده و در آرشیو اطلاعات ما نگهداری می شود. هر زمان که شرکت تصمیم به آغاز فعالیت در شهر مورد درخواست شما را داشته باشد با شما تماس گرفته خواهد شد."
  },
  {
    question: "آیا می توانم در سفر از کد تخفیف استفاده نکنم ؟",
    answere:
      "شما می توانید رزومه کامل خود، (شامل تحصیلات فرد و یا گروه، سوابق کاری و توان اجرایی در شهر مورد نظر ) را به ایمیل شما می توانید درخواست خود را همراه با رزومه کامل خود که شامل سابقه کاری و تحصیلی شما است به ایمیل info@navit.com ارسال فرمایید. رزومه شما بررسی شده و در آرشیو اطلاعات ما نگهداری می شود. هر زمان که شرکت تصمیم به آغاز فعالیت در شهر مورد درخواست شما را داشته باشد با شما تماس گرفته خواهد شد."
  }
];
function Content(props) {
  return (
    <div className="faq__content">
      {faqs.map(({ question, answere }, index) => (
        <Collapse className="faq__collapse" key={"faq" + index}>
          <Collapse.Toggle className="faq__question">
            {({ collapse }) => (
              <>
                <div>{question}</div>
                <span
                  className={`lnr ${
                    collapse ? "lnr-cross-circle" : "lnr-plus-circle"
                  }`}
                />
              </>
            )}
          </Collapse.Toggle>
          <Collapse.Content className="faq__collapse__content">
            {answere}
          </Collapse.Content>
        </Collapse>
      ))}
    </div>
  );
}
