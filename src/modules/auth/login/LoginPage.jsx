import React, { useState } from "react";
import IMAGE_APP from "../../../assets/images.assets";
import styles from "./styles.module.scss"
import CheckBoxCustom, { InputRadioCustom } from "../../../components/input/input";
import ButtonCustom from "../../../components/button/ButtonCustom";
import InputTextCustom from "../../../components/input/input";
import { Form, redirect } from "react-router-dom";


export async function loader() {

}
export async function action() {
    return redirect(`/auth/SignUpPage`);
}

const LoginPage = () => {

    // const  SignUpPage = () => {
    //     return redirect(`/auth/SignUpPage`);
    // }

    const parseValid = (validString) => {
        if (!validString) return {};
        const arrayError = validString.split("|");
        return arrayError.reduce((pre, cur) => {
            const [key, value = true] = cur.split(":");
            return { ...pre, [key]: value };
        }, {});
    };
    const ERROR_CHECK_LIST_TYPE = {
        required: "Bạn không được để chống ",
    };

    const validate = (type = "username", inputValue, listError = {},) => {
        let error = null;
        for (let key in listError) {
            switch (key) {
                case "required":
                    error = !inputValue ? ERROR_CHECK_LIST_TYPE[key] + type : null;
                    break;
                default:
            }
            if (error) {
                break;
            }
        }
        return error;

    };
    const [listError, setListError] = useState({
        username: null,
        password: null,

    })
    const [formValue, setFormValue] = useState({
        username: null,
        password: null,

    })
    const [userName, setUserName] = useState("")
    const [passWord, setPassword] = useState("")

    const handleChangeInput = (e) => {
        const { name, value } = e
        if (name === "username") setUserName(value)
        if (name === "password") setPassword(value)

        const inputValue = value.trim()
        const valid = e.getAttribute("valid");
        const validObject = parseValid(valid);
        const error = validate(name, inputValue, validObject);

        setListError({ ...listError, [name]: error })
        setFormValue({ ...formValue, [name]: inputValue })
    }
    const btnLogin = () => {
        const username = userName
        const password = passWord

        async function postJSON(data) {
            const buttonELe = document.getElementById("button")
            buttonELe.innerText = "loading";
            buttonELe.setAttribute("disabled", "true");
            try {
                const response = await fetch("http://3.85.3.86:9001/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                console.log(response)
                if (response.ok === true) {
                    window.alert("Thành công")
                } else {
                    window.alert("Thất bại")
                }
                const result = await response.json();
                await new Promise((rev) => {
                    setTimeout(() => {
                        rev();
                        buttonELe.removeAttribute("disabled");
                        buttonELe.innerText = "Login";
                    }, 2000);
                });
                console.log("Success:", result);
            } catch (error) {
                console.error("Error:", error);
            }

        } postJSON({ username, password });
    }
    return (
        <div className={styles.FormLogin}>
            <div>
                <h1>Sign in</h1>
                <div className={styles.flex}>
                    <p>If you don’t have an account register. You can </p>
                    <Form method="post"><button  className={styles.register}>Register here !</button></Form>
                </div>
                <Form method="post" onSubmit={(e) => { e.preventDefault() }}>
                    <InputTextCustom error={listError.username} validate={"required"} onChange={handleChangeInput} label={"Username"} type={"text"} name={"username"} placeholder={"Enter your username"} />
                    <InputTextCustom validate={"required"} onChange={handleChangeInput} name={"password"} label={"Password"} type={"text"} error={listError.password} placeholder={"Enter your password"} />
                    <div className={styles.forgotPassword}>
                        <InputRadioCustom type={"checkbox"} label={"Remember me"} />
                        <button>Forgot Password ?</button>
                    </div>
                    <ButtonCustom id={"button"} text={"Login"} onClick={btnLogin} />
                </Form>
                <h4 className={styles.continue}>or continue with</h4>
                <div className={styles.icon}>
                    <img src={IMAGE_APP.iconFacebook} alt="" />
                    <img src={IMAGE_APP.iconApple} alt="" />
                    <img src={IMAGE_APP.iconGoogle} alt="" />
                </div>
            </div>
            <div className={styles.background}>
                <div className={styles.contact}>
                    <img src={IMAGE_APP.iconPhone} alt="" />
                    <h3>+94 0116 789 754</h3>
                </div>
                <div className={styles.loginImage}>
                    <img src={IMAGE_APP.banner} alt="" />
                </div>
                <div className={styles.title}>
                    <h2>Sign Up to name</h2>
                    <p className={styles.p}>Lorem Ipsum is simply </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;