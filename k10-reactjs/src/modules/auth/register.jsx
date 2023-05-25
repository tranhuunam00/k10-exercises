import React, { useState } from "react";
import IMAGE_APP from "../../assets/image";
import InputCustom from "../../components/input/inputCustom";
import ButtonCustom from "../../components/button/buttonCustom";
import style from "./style.module.scss"
import RadioCustom from "../../components/radio/radioCustom";

const RegisterPage = () => {
    const [usernameState, setUsername] = useState("");
    const [passwordState, setPassword] = useState("");
    const [emailState, setEmail] = useState("");
    const [dobState, setDob] = useState("");
    const [confirmPWState, setConfirmPW] = useState("");
    const [planetState, setPlanet] = useState("");

    const ERROR_CHECK_LIST_TYPE = {
        required: "Bạn không được để chống ",
        toUpperCase: "Chữ cái đầu tiên phải viết hoa",
        minLength: "yêu cầu tối thiểu ",
        dataTypeNumber: "Ký tự cuối cùng phải là số",
        maxLength: "yêu cầu tối ",
        dataType: "dataType",
        min: "min",
        max: "max",
        format: "format",
        reg: "Chưa đúng định dạng email",
        checkDate: "Phải nhỏ hơn ngày hôm nay",
        checkPw: "Không khớp password"
    };
    

    const parseValid = (validString) => {
        if (!validString) return {};
        const arrayError = validString.split("|");
        return arrayError.reduce((pre, cur) => {
            const [key, value = true] = cur.split(":");
            return { ...pre, [key]: value };
        }, {});
    };

    const validate = (type = "username", inputValue, listError = {}, password = inputValue.password) => {
        let error = null;
        const reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        const checkNumber = inputValue.substr(inputValue.length - 1);
        for (let key in listError) {
            switch (key) {
                case "required":
                    error = !inputValue ? ERROR_CHECK_LIST_TYPE[key] + type : null;
                    break;
                case "dataTypeNumber":
                    error = checkNumber !== "number" ? ERROR_CHECK_LIST_TYPE[key] : null;
                    break;
                case "toUpperCase":
                    error =
                        inputValue[0] !== inputValue[0].toUpperCase()
                            ? ERROR_CHECK_LIST_TYPE[key]
                            : null;
                    break;
                case "minLength":
                    error =
                        inputValue.length < +listError[key]
                            ? ERROR_CHECK_LIST_TYPE[key] + listError[key] + " kí tự"
                            : null;
                    break;
                case "maxLength":
                    error =
                        inputValue.length > +listError[key]
                            ? ERROR_CHECK_LIST_TYPE[key] + listError[key] + " kí tự"
                            : null;
                    break;
                case "reg":
                    error = !reg.test(inputValue) ? ERROR_CHECK_LIST_TYPE[key] : null;
                    break;
                case "checkDate":
                    error =
                        new Date(inputValue).getTime() > new Date().getTime() - 2000
                            ? ERROR_CHECK_LIST_TYPE[key]
                            : null;
                    break;
                case "checkPw":
                    error = inputValue !== password ? ERROR_CHECK_LIST_TYPE[key] : null;
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
        email: null,
        sex: null,
        confirmPW: null,
        dOB: null,
    })
    const [formValue, setFormValue] = useState({
        username: null,
        password: null,
        email: null,
        sex: null,
        confirmPW: null,
        dOB: null,
    })
    // console.log(listError)
    // console.log(formValue)
    // const checkSubmit = () => {
    //     const buttonEle = document.getElementById('button')
    //     if (listError || !formValue) {
    //         buttonEle.setAttribute('disabled', 'true')
    //         buttonEle.innerText = "Không được ấn"
    //         console.log("không dc")
    //     } else {
    //         buttonEle.removeAttribute('disabled')
    //         buttonEle.innerText = "Register"
    //         console.log("ấn đê")

    //     }
    // }

    const handleChangeInput = (e) => {
        const { name, value } = e;
        if (name === "email") setEmail(value);
        if (name === "username") setUsername(value);
        if (name === "password") setPassword(value);
        if (name === "confirmPassword") setConfirmPW(value);
        if (name === "dateOfBirth") setDob(value);
        const inputValue = value.trim()
        const valid = e.getAttribute("valid");
        const validObject = parseValid(valid);
        const error = validate(name, inputValue, validObject);

        setListError({ ...listError, [name]: error })
        setFormValue({ ...formValue, [name]: inputValue })
        // checkSubmit()
    };
    const handleChangeInputRadio = (e) => {
        setPlanet(e.target.value)
    }
    const btnRegister = () => {
        const username = usernameState
        const password = passwordState
        const email = emailState
        const dOB = new Date(dobState).getTime()
        const sex = planetState
        async function postJSON(data) {
            const buttonELe = document.getElementById("button")
            buttonELe.innerText = "loading";
            buttonELe.setAttribute("disabled", "true");
            try {
                const response = await fetch("http://3.85.3.86:9001/api/auth/sign-in", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

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
                        buttonELe.innerText = "Register";
                    }, 2000);
                });
                console.log("Success:", result);
            } catch (error) {
                console.error("Error:", error);
            }

        } postJSON({ email, username, password, sex, dOB });
    }
    return (
        <div className={style.body}>
            <div>
                <img src={IMAGE_APP.iconMain} alt="" />
                <form action="" onChange={(e) => { e.preventDefault() }}>
                    <h1>Sign Up</h1>
                    <p>If you already have an account register</p>
                    <p>You Can Login here!</p>
                    <InputCustom onChange={handleChangeInput} label={"Email"} type={"text"} name={"email"} error={listError.email} placeholder={"Enter your email address"} validate={"required|reg"} />
                    <InputCustom onChange={handleChangeInput} label={"Username"} type={"text"} name={"username"} error={listError.username} placeholder={"Enter your User name"} validate={"required|minLength:6|maxLength:12"} />
                    <label>Planet</label>
                    <div className={style.radio}>
                        <RadioCustom label={"Male"} value={"male"} type={"radio"} name={"gender"} onChange={handleChangeInputRadio} />
                        <RadioCustom label={"Female"} value={"female"} type={"radio"} name={"gender"} onChange={handleChangeInputRadio} />
                    </div>
                    <InputCustom onChange={handleChangeInput} name={"password"} label={"Password"} type={"password"} error={listError.password} placeholder={"Enter your Password"} validate={"required|toUpperCase|minLength:6|maxLength:12"} />
                    <InputCustom onChange={handleChangeInput} name={"confirmPassword"} label={"Confirm Password"} type={"password"} error={listError.confirmPW} placeholder={"Confirm your Password"} validate={"required|checkPw"} />
                    <InputCustom onChange={handleChangeInput} name={"dateOfBirth"} label={" Date of birth"} type={"date"} error={listError.dOB} placeholder={"dd/mm/yyyy"} validate={"required|checkDate"} />
                    <ButtonCustom id={"button"} text={"Register"} onClick={btnRegister} />
                </form>
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
                    <p>Lorem Ipsum is simply </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;