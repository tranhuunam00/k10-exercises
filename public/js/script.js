const nameEle = document.getElementById("username");
    const passwordEle = document.getElementById("password");
    const emailEle = document.getElementById("email");
    const dOBEle = document.getElementById("dOB");
    const sexEle = document.getElementById("sex");
    const buttonELe = document.getElementById("submit");
    const formELe = document.getElementById("form");
    const maleELe = document.getElementById("male");
    const femaleELe = document.getElementById("female");

    const validate = (type = "username", value, listError = {}) => {
        const listErrorType = Object.keys(listError);
        const regExEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const dOBCheck = new Date(value).getTime();
        const maxdOB = new Date().getTime();
        //   console.log(listErrorType);
        let error = "";
        switch (type) {
            case "username":
                if (listErrorType.includes("required") && !value) {
                    error = "hay nhap gia tri";
                    break;
                }
                if (
                    listErrorType.includes("minlength") &&
                    value.length < listError["minlength"]
                ) {
                    error = "ban  hay nhap" + listError["minlength"] + " ki tu";
                    break;
                }
                if (
                    listErrorType.includes("maxlength") &&
                    value.length > listError["maxlength"]
                ) {
                    console.log(listError["maxlength"]);
                    error = "ban  hay nhap" + listError["maxlength"] + " ki tu";
                    break;
                }
                if (
                    listErrorType.includes("theFirstLetter") &&
                    value[0] !== value[0].toUpperCase()
                ) {
                    error = "hay viet hoa ki tu dau";
                    break;
                }
                error = null;
                break;
            case "password":
                if (listErrorType.includes('required') && !value) {
                    error = 'Vui lòng nhập trường này';
                    break;
                }
                if (listErrorType.includes('hasOneUpperCase') && !/[A-Z]/.test(value)) {
                    error = 'Vui lòng nhập ít nhất 1 kí tự viết hoa';
                    break;
                }
                if (
                    listErrorType.includes("minlength") &&
                    value.length < listError["minlength"]
                ) {
                    error = "ban hay nhap toi thieu " + listError["minlength"] + " ki tu";
                    break;
                }
                error = null;
                break;

            case "email":
                if (listErrorType.includes('required') && !value) {
                    error = 'Vui lòng nhập trường này';
                    break;
                }
                if (listErrorType.includes('isEmail') && !regExEmail.test(value)) {
                    error = 'Vui lòng nhập email dung dinh dang';
                    break;
                }
                error = null;
                break;
            case 'dOB':
                if (listErrorType.includes('option') && (value || "").trim() === "") {
                    error = 'Vui long chon ngay';
                    break;
                }
                if (listErrorType.includes('lessNow') && dOBCheck > maxdOB) {
                    error = 'Vui long khong chon ngay lon hon ngay hom nay';
                    break;
                }
                error = null;
                break;

        }

        return error;
    };

    const checkSubmit = () => {
        if (
            listError.userName ||
            listError.password ||
            listError.dob ||
            listError.sex ||
            listError.email ||
            !formValue.userName ||
            !formValue.dob ||
            !formValue.sex ||
            !formValue.email ||
            !formValue.password
        ) {
            buttonELe.setAttribute("disabled", "true");
        } else {
            buttonELe.removeAttribute("disabled");
        }
    };

    const listError = {
        userName: null,
        dob: null,
        sex: null,
        password: null,
        email: null,
    };

    const formValue = {
        userName: null,
        dob: null,
        sex: null,
        password: null,
        email: null,
    };

    formELe.addEventListener("submit", (e) => {
        e.preventDefault();
    });

    const ERROR_CHECK_LIST_TYPE = {
        required: "required",
        minlength: "minlength",
    };

    console.log(ERROR_CHECK_LIST_TYPE);
    // gắn 1 sự kiện vào thẻ input của username
    nameEle.addEventListener("keyup", (event) => {
        const { name, value, checked } = event.target;
        formValue.userName = value;

        // get element
        const divUserName = document.querySelector(".divUserName");
        const pErrorEle = divUserName.querySelector("#errorUserName");

        console.log(nameEle.hasAttribute("required"));
        const errorList = {
            minlength: nameEle.getAttribute("minlength"),
            maxlength: nameEle.getAttribute("maxlength2"),
            required: nameEle.getAttribute("required"),
        };

        console.log(errorList);

        // check dk

        const error = validate("username", value, errorList);
        console.log('error:', error);

        if (error) {
            pErrorEle.innerText = error;
            listError.userName = error;
        } else {
            pErrorEle.innerText = "";
            listError.userName = null;
        }
        checkSubmit();
    });

    passwordEle.addEventListener("keyup", (event) => {
        const { name, value, checked } = event.target;
        formValue.password = value;

        // get element
        const divUserName = document.querySelector(".divPassword");
        const pErrorEle = divUserName.querySelector("#errorPassword");


        const errorList = {
            hasOneUpperCase: passwordEle.getAttribute("hasOneUpperCase"),
            required: passwordEle.getAttribute("required"),
            minlength: passwordEle.getAttribute("minlength"),
        };
        // check dk
        const error = validate("password", value, errorList);
        console.log('error:', error);

        if (error) {
            pErrorEle.innerText = error;
            listError.password = error;
        } else {
            pErrorEle.innerText = "";
            listError.password = null;
        }
        checkSubmit();
    });

    emailEle.addEventListener("keyup", (event) => {
        const { name, value, checked } = event.target;
        formValue.email = value;

        // get element
        const divUserName = document.querySelector(".divEmail");
        const pErrorEle = divUserName.querySelector("#errorEmail");

        const errorList = {
            isEmail: emailEle.getAttribute('isEmail'),
            required: emailEle.getAttribute('required')
        }
        // check dk
        const error = validate('email', value, errorList);
        if (error) {
            pErrorEle.innerText = error;
            listError.email = error;
        } else {
            pErrorEle.innerText = "";
            listError.email = null;
        }
        checkSubmit();
    });

    maleELe.addEventListener("click", (event) => {
        const { name, value, checked } = event.target;
        formValue.sex = checked;
        checkSubmit();
    });
    femaleELe.addEventListener("click", (event) => {
        const { name, value, checked } = event.target;
        formValue.sex = checked;
        checkSubmit();
    });

    dOBEle.addEventListener("change", (event) => {
        const { name, value, checked } = event.target;
        formValue.dob = new Date(value).getTime();

        // get element
        const divUserName = document.querySelector(".divDob");
        const pErrorEle = divUserName.querySelector("#errorDob");
        const errorList = {
            option: dOBEle.getAttribute('option'),
            lessNow: dOBEle.getAttribute('lessNow'),
        }
        // check dk
        const error = validate('dOB', value, errorList);
        if (error) {
            pErrorEle.innerText = error;
            listError.dob = error;
        } else {
            pErrorEle.innerText = "";
            listError.dob = null;
        }
        checkSubmit();
    });

    function showToast() {
        var toast = document.getElementById("toast");
        toast.classList.add("show");

        setTimeout(function () {
            toast.classList.remove("show");
        }, 3000);
    };

    buttonELe.addEventListener('click', () => {
        const maleELe = document.getElementById("male");
        const femaleELe = document.getElementById("female");
        const username = nameEle.value;
        const password = passwordEle.value;
        const email = emailEle.value;
        const dOB = new Date(dOBEle.value).getTime();
        const male = maleELe.checked;
        const female = femaleELe.checked;
        const sex = !male ? 'female' : 'male';
        const toast = document.getElementById('toast');
        console.log(username, password, email, dOB, sex);
        async function postJSON(data) {
            buttonELe.innerText = "Loading...";
            buttonELe.setAttribute('disabled', 'true');
            try {
                const response = await fetch(
                    "http://3.95.239.60:9001/api/auth/sign-in",
                    {
                        method: "POST", // or 'PUT'
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    }
                );
                const result = await response.json();
                console.log("Success:", result);
                if (result.success === false) {
                    toast.classList.add('error');
                    toast.innerText = 'false';
                    showToast()
                    buttonELe.innerText = "Submit";
                    buttonELe.removeAttribute("disabled");
                } else {
                    toast.classList.add('success');
                    toast.innerText = 'success';
                    showToast();
                    buttonELe.innerText = "OK";

                    // setTimeout(() => {
                    //     window.location.assign("login.html")
                    // }, 2000);
                }


            } catch (error) {
                console.error("Error:", error);
            }
            finally {
                // buttonELe.disabled = false;
            }
        }


        postJSON({ username, dOB, sex, email, password });
    });
