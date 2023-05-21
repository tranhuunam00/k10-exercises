import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./style.css"


export default function Register() {
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
    };
    const parseValid = (validString) => {
        if (!validString) return {};

        // b1 tach chuoi theo  "|"
        const arrayError = validString.split("|");
        // b2 lap qua tung phan
        return arrayError.reduce((pre, cur) => {
            // b3 tach theo ":"
            const [key, value = true] = cur.split(":");
            // b4 nhet vao object
            return { ...pre, [key]: value };
        }, {});
    };
    const validate = (type = "username", value, listError = {}) => {
        let error = null;
        const reg = /^[a-z]@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
        const checkNumber = value.substr(value.length - 1);
        for (let key in listError) {

            switch (key) {
                case "required":
                    error = !value ? ERROR_CHECK_LIST_TYPE[key] + type : null;
                    break;
                case "dataTypeNumber":
                    error = checkNumber !== "number" ? ERROR_CHECK_LIST_TYPE[key] : null;
                    break;
                case "toUpperCase":
                    error =
                        value[0] !== value[0].toUpperCase()
                            ? ERROR_CHECK_LIST_TYPE[key]
                            : null;
                    break;
                case "minLength":
                    error =
                        value.length < +listError[key]
                            ? ERROR_CHECK_LIST_TYPE[key] + listError[key] + " kí tự"
                            : null;
                    break;
                case "maxLength":
                    error =
                        value.length > +listError[key]
                            ? ERROR_CHECK_LIST_TYPE[key] + listError[key] + " kí tự"
                            : null;
                    break;
                case "reg":
                    error = !reg.test(value) ? ERROR_CHECK_LIST_TYPE[key] : null;
                    break;
                case "checkDate":
                    error =
                        new Date(value).getTime() > new Date().getTime() - 2000
                            ? ERROR_CHECK_LIST_TYPE[key]
                            : null;
                    break;
                default:
            }
            if (error) {
                break;
            }
        }
        return error;

    };

    const listError = {
        userName: null,
        dob: null,
        sex: null,
        password: null,
        email: null,
    };
    const [formValue1, setFormValue] = useState()


    const checkSubmit = () => {
        const buttonEle = document.getElementById("btn")
        if (listError.userName ||
            listError.password ||
            listError.dob ||
            listError.sex ||
            listError.email ||
            !formValue1) {
            console.log("first")
            buttonEle.setAttribute("disabled", "true")
        } else {
            buttonEle.removeAttribute("disabled")
        }
    };

    const UsernameInput = (event) => {
        const usernameEle = document.getElementById("username")
        const errorUsername = document.getElementById("errorUsername")

        const { name, value } = event.target;
        const newName = value.trim();

        setFormValue(newName)

        const valid = usernameEle.getAttribute("valid");
        const validObject = parseValid(valid);
        const error = validate(name, value, validObject);

        if (error) {
            errorUsername.innerText = error;
            listError.userName = error
        } else {
            errorUsername.innerText = "";
            listError.userName = null
        }
        checkSubmit();
    }

    const PasswordInput = (event) => {
        const passwordEle = document.getElementById("password")
        const errorPassword = document.getElementById("errorPassword")

        const { name, value } = event.target;
        const newPassword = value.trim();
        setFormValue(newPassword)

        const valid = passwordEle.getAttribute("valid");
        const validObject = parseValid(valid);
        const error = validate(name, value, validObject);

        if (error) {
            errorPassword.innerText = error;
            listError.password = error
        } else {
            errorPassword.innerText = "";
            listError.password = null
        }
        checkSubmit();
    }
    const DobInput = (e) => {
        const DobELe = document.getElementById("dob")
        const errorDob = document.getElementById("errorDob")

        const { name, value } = e.target;
        const newDob = value.trim();
        setFormValue(newDob)

        const valid = DobELe.getAttribute("valid");
        const validObject = parseValid(valid);
        const error = validate(name, value, validObject);

        if (error) {
            errorDob.innerText = error;
            listError.dob = error
        } else {
            errorDob.innerText = "";
            listError.dob = error
        }
        checkSubmit();
    }
    const EmailInput = (e) => {
        const EmailEle = document.getElementById("email")
        const errorEmail = document.getElementById("errorEmail")

        const { name, value } = e.target;
        const newEmail = value.trim();
        setFormValue(newEmail)

        const valid = EmailEle.getAttribute("valid");
        const validObject = parseValid(valid);
        const error = validate(name, value, validObject);

        if (error) {
            errorEmail.innerText = error;
            listError.email = error
        } else {
            errorEmail.innerText = "";
            listError.email = error
        }
        checkSubmit();
    }
    const Male = (e) => {
        const { name, value, checked } = e.target;
        setFormValue(checked)
        checkSubmit();
    }
    const Female = (e) => {
        const { name, value, checked } = e.target;
        setFormValue(checked)
        checkSubmit();

    }

    function toast({ title = "", message = "", type = "info", duration = 3000 }) {
        // const iconObj = {
        //     Success: "fa-regular fa-circle-check",
        //     Error:"fa-regular fa-circle-exclamation"
        // }
        // const icon = iconObj[type]

        const toast = document.getElementById("toast1");
        if (toast) {
            const createToast = document.createElement("div");
            if (type === "Success") {
                createToast.classList.add("toastSuccess");
            } else {
                createToast.classList.add("toastError");
            }
            createToast.innerHTML = '<div className="toast_icon"></div><div className="toast_body"><div class="toast_title"> ' + title + ' </div><div class="toast_msg">' + message + '</div> </div><div className="toast_clone"></div>';
            toast.appendChild(createToast);
        }
    }
    function showSuccessToast() {
        toast({
            title: "Success",
            message: "Đăng ký thành công",
            type: "Success",
            duration: 3000
        })

    }
    function showErrorToast() {
        toast({
            title: "Error",
            message: "Đăng ký không thành công",
            type: "Error",
            duration: 3000
        })

    }

    const btnClick = () => {
        console.log("a")
        const emailEle = document.getElementById("email")
        const usernameEle = document.getElementById("username")
        const passwordEle = document.getElementById("password")
        const dOBEle = document.getElementById("dob")
        const male = document.getElementById("male")
        const buttonELe = document.getElementById("btn")

        const sex = !male ? "female" : "male"
        const email = emailEle.value
        const username = usernameEle.value
        const password = passwordEle.value
        const dOB = new Date(dOBEle.value).getTime();

        
        async function postJSON(data) {
            
            buttonELe.innerText = "loading";
            buttonELe.setAttribute("disabled", "true");
            try {
                const response = await fetch("http://3.95.239.60:9001/api/auth/sign-in", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
                console.log(response.status);
                console.log(response);
                console.log(data);
                if (response.status === 201) {
                    showSuccessToast()
                    
                } else {
                    showErrorToast()
                    
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

        <div className="container">
            <h1>Register</h1>
            <form action="" id="form" onSubmit={(e) => { e.preventDefault() }}>
                <div className="input ">
                    <label htmlFor="">Username: </label>
                    <input type="text" id="username" onKeyUp={UsernameInput} valid={"required|minLength:6|maxLength:12"} />
                    <p id="errorUsername"></p>
                </div>
                <div className="input">
                    <label htmlFor="">Password: </label>
                    <input type="password" id="password" onKeyUp={PasswordInput} valid={"required|minLength:6|maxLength:12|toUpperCase"} />
                    <p id="errorPassword"></p>
                </div>
                <div className="inputRadio">
                    <label htmlFor="">Sex: </label>
                    <input type="radio" value="Male" name="gender" id="male" defaultChecked onClick={Male} /> Male
                    <input type="radio" value="Female" name="gender" id="female" onClick={Female} /> Female
                </div>
                <div className="input">
                    <label htmlFor="">Date of birth: </label>
                    <input id="dob" type="date" valid={"required|checkDate"} onChange={DobInput} />
                    <p id="errorDob"></p>
                </div>
                <div className="input">
                    <label htmlFor="">Email: </label>
                    <input id="email" type="text" valid={"required|reg"} onKeyUp={EmailInput} />
                    <p id="errorEmail"></p>
                </div>
                <div>
                    <button id="btn" onClick={btnClick} >Register</button>
                </div>
                
            </form>
            <div id="toast1">
            </div>
        </div>
    )
}
