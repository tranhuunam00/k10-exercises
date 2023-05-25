import React, { useState } from "react";
import IMAGE_APP from "../../assets/image";
import InputCustom from "../../components/input/inputCustom";
import ButtonCustom from "../../components/button/buttonCustom";
import style from './style.module.scss'
import CheckBoxCustom from "../../components/checkbox/checkboxCustom";

const LoginPage = () => {

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
                if (response.status === 201) {
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

        } postJSON({  username, password });
    }
    return (
        <div className={style.body}>
            <div>
                <img src={IMAGE_APP.iconMain} alt="" />
                <form action="" onSubmit={(e) => { e.preventDefault() }}>
                    <h1>Sign in</h1>
                    <p>If you don’t have an account register</p>
                    <p>You can   <a className={style.register} href="/src/modules/auth/register.jsx">Register here !</a></p>
                    <InputCustom error={listError.username} validate={"required"} onChange={handleChangeInput} label={"Username"} type={"text"}  name={"username"} placeholder={"Enter your username"} />
                    <InputCustom validate={"required"} onChange={handleChangeInput} name={"password"} label={"Password"} type={"text"} error={listError.password} placeholder={"Enter your password"} />
                    <div className={style.forgot}>
                        <CheckBoxCustom text={"Remember me"} type={"checkbox"} />
                        <a>Forgot Password ?</a>
                    </div>
                    <ButtonCustom id={"button"} text={"Login"} onClick={btnLogin} />
                </form>
                <h4 className={style.continue}>or continue with</h4>
                <div className={style.icon}>
                    <img src={IMAGE_APP.iconFB} alt="" />
                    <img src={IMAGE_APP.iconApple} alt="" />
                    <img src={IMAGE_APP.iconGG} alt="" />
                </div>
            </div>
            <div className={style.bgr}>
                <div className={style.contact}>
                    <img src={IMAGE_APP.iconPhone} alt="" />
                    <h3>+94 0116 789 754</h3>
                </div>
                <div className={style.loginImage}>
                    <img src={IMAGE_APP.loginImage} alt="" />
                </div>
                <div className={style.title}>
                    <h2>Sign Up to name</h2>
                    <p className={style.p}>Lorem Ipsum is simply </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
