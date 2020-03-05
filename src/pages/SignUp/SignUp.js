import React from "react";
import "./SignUp.styles.scss";
import { useForm } from "../../hooks";
import { ajax } from "./../../helpers";
import { Input } from "../../components/Form";
import { Button } from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const initialValue = {
    name: "",
    password: "",
    repeatPassword: ""
};

function SignUp({ ...props }) {
    const [customerType, setCustomerType] = React.useState("real");
    const toggle = () => {
        if (submitting) return
        customerType === "real" ? setCustomerType("legal") : setCustomerType("real");
    }

    const sendForm = async () => {
        await ajax.post("posts", form, { "content-type": "json" });
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
        <div className="signup-container">
            <form className="signup__card" onSubmit={handleSubmit}>
                <img
                    className="signup__icon"
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
                        color={customerType === "legal" ? "warning" : ""}
                        type="button"
                        onClick={toggle}
                    >
                        <div>
                            {customerType === "legal" && (
                                <FontAwesomeIcon
                                    icon={["fas", "check-circle"]}
                                    style={{ marginTop: 5 }}
                                />
                            )}

                            <span style={{ marginRight: 10 }}>
                                مشترک حقوقی هستم
                            </span>
                        </div>
                    </Button>

                    <Button
                        round
                        className="col"
                        color={customerType === "real" ? "warning" : ""}
                        type="button"
                        onClick={toggle}
                    >
                        <div>
                            {customerType === "real" && (
                                <FontAwesomeIcon
                                    icon={["fas", "check-circle"]}
                                />
                            )}
                            <span style={{ marginRight: 10 }}>
                                مشترک حقیقی هستم
                            </span>
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
        </div>
    );
}

export default SignUp;
