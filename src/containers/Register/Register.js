import React from "react";
import { useForm } from "../../hooks";
import { ajax } from "./../../helpers";
import { Input } from "../../components/Form";
import { Button } from "../../components/Button";

const initialValue = {
  name: "",
  password: "",
  repeatPassword: ""
};

function Register({ ...props }) {
  const [customerType, setCustomerType] = React.useState("real");
  const toggle = () => {
    if (submitting) return;
    customerType === "real"
      ? setCustomerType("legal")
      : setCustomerType("real");
  };

  const sendForm = async ({ setSubmitting }) => {
    await ajax.post("posts", form, { "content-type": "json" });
    setSubmitting(false);
  };
  const handleError = values => {
    const error = {};
    if (values.name.trim() === "") {
      error.name = "please enter email";
    }
    if (values.password.trim() === "") {
      error.password = "please enter password";
    }
    if (values.repeatPassword.trim() === "") {
      error.repeatPassword = "please enter repeatPassword";
    }
    if (values.repeatPassword !== values.password) {
      error.repeatPassword = "passwords doesnt match";
      error.password = "passwords doesnt match";
    }
    return error;
  };
  const { form, submitting, handleSubmit, bind } = useForm(
    sendForm,
    handleError,
    initialValue
  );
  return (
    <form className="auth__card" onSubmit={handleSubmit}>
      <img
        className="auth__icon"
        src="/static/img/userlock.png"
        alt="user lock"
      />

      <Input
        {...bind("name")}
        label="نام و نام خانوادگی"
        autoComplete="new-password"
      />

      <Input
        {...bind("password")}
        label="کلمه عبور شما"
        type="password"
        autoComplete="new-password"
      />

      <Input
        {...bind("repeatPassword")}
        label="تکرار کلمه عبور شما"
        type="password"
        autoComplete="new-password"
      />

      <div className="row" style={{ marginTop: 20 }}>
        <Button
          round
          style={{ marginLeft: 10 }}
          className="col"
          color={customerType === "legal" ? "warning-reverse" : ""}
          type="button"
          onClick={toggle}
        >
          <div>
            {customerType === "legal" && (
              <span className="lnr lnr-checkmark-circle"></span>
            )}

            <span style={{ marginRight: 10 }}>مشترک حقوقی هستم</span>
          </div>
        </Button>

        <Button
          round
          className="col"
          color={customerType === "real" ? "warning-reverse" : ""}
          type="button"
          onClick={toggle}
        >
          <div>
            {customerType === "real" && (
              <span className="lnr lnr-checkmark-circle"></span>
            )}
            <span style={{ marginRight: 10 }}>مشترک حقیقی هستم</span>
          </div>
        </Button>
      </div>

      <Button
        style={{ marginTop: 20 }}
        type="submit"
        loading={submitting}
        block
        color="primary"
      >
        ثبت نام در ناویت
      </Button>
    </form>
  );
}

export default Register;
