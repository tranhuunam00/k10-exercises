const emailELe = document.getElementById("email");
const nameEle = document.getElementById("username");
const maleEle = document.getElementById("male");
const femaleEle = document.getElementById("female");
const passwordEle = document.getElementById("password");
const confirmEle = document.getElementById("confirm");
const dobEle = document.getElementById("dob");
const avatarEle = document.getElementById("avatar");
const formEle = document.getElementById("form");
const buttonEle = document.getElementById("submit");

const validate = (
  type = "username",
  value,
  listError = {},
  password = passwordEle.value
) => {
  const listErrorType = Object.keys(listError);
  let error = "";
  const reg = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
  switch (type) {
    case "username":
      if (listErrorType.includes("required") && !value) {
        error = "Hãy nhập giá trị";
        break;
      }
      if (
        listErrorType.includes("minlength") &&
        value.length < listError["minlength"]
      ) {
        error = "Tối thiểu " + listError["minlength"] + " kí tự";
        break;
      }

      error = null;
      break;
    case "password":
      if (listErrorType.includes("required") && !value) {
        error = "Hãy nhập giá trị";
        break;
      }
      if (
        listErrorType.includes("theFirstLetter") &&
        value[0] !== value[0].toUpperCase()
      ) {
        error = "Ký tự đầu tiền phải in hoa";
        break;
      }
      error = null;
      break;
    case "confirm":
      if (listErrorType.includes("required") && !value) {
        error = "Hãy nhập giá trị";
        break;
      }
      if (listErrorType.includes("checkPw") && value !== password) {
        error = "Không khớp với password";
        break;
      }
      error = null;
      break;
    case "email":
      if (listErrorType.includes("required") && !value) {
        error = "Hãy nhập giá trị";
        break;
      }
      if (listErrorType.includes("reg") && !reg.test(value)) {
        error = "Không đúng định dạng email";
        break;
      }
      error = null;
      break;
    case "dob":
      if (!value || new Date(value).getTime() > new Date().getTime() - 2000) {
        error = "Phải nhỏ hơn ngày hôm nay";
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
    listError.email ||
    listError.confirmPw ||
    listError.sex ||
    !formValue.userName ||
    !formValue.dob ||
    !formValue.confirmPw ||
    !formValue.email ||
    !formValue.password ||
    !formValue.sex
  ) {
    buttonEle.setAttribute("disabled", "true");
    buttonEle.style.backgroundColor = "red";
  } else {
    buttonEle.removeAttribute("disabled");
    buttonEle.style.backgroundColor = "blue";
  }
};

const listError = {
  userName: null,
  dob: null,
  sex: null,
  password: null,
  confirmPw: null,
  email: null,
};
console.log(listError);
const formValue = {
  userName: null,
  dob: null,
  sex: null,
  password: null,
  confirmPw: null,
  email: null,
};
console.log(formValue);

formEle.addEventListener("submit", (e) => {
  e.preventDefault();
});

function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const toast = document.getElementById("toast1");
  if (toast) {
    const createToast = document.createElement("div");
    createToast.classList.add("toast");
    createToast.innerHTML =
      '<div class="toast_icon"><img width="30px" src="/baitap/html-css-js/img/icon1.png" alt=""></div><div class="toast_body"><div class="toast_title"> ' +
      title +
      ' </div><div class="toast_msg">' +
      message +
      '</div> </div><div class="toast_clone"><img width="20px" src="/baitap/html-css-js/img/857325-200.png" alt=""></div>';
    toast.appendChild(createToast);
  }
}

toast({
  title: "Hello",
  message: "Chào mừng",
  type: "success",
  duration: 3000,
});
emailELe.addEventListener("keyup", (event) => {
  const { name, value, checked } = event.target;
  formValue.email = value;
  let newEmail = value.trim();

  const emailErrorEle = document.getElementById("errorEmail");

  const errorList = {
    required: emailELe.getAttribute("required"),
    reg: emailELe.getAttribute("reg"),
  };

  const error = validate("email", newEmail, errorList);

  if (error) {
    emailErrorEle.innerText = error;
    listError.email = error;
  } else {
    emailErrorEle.innerText = "";
    listError.email = null;
  }
});

nameEle.addEventListener("keyup", (event) => {
  const { name, value, checked } = event.target;
  formValue.userName = value;
  let newName = value.trim();
  setTimeout(() => {
    let a = 2;
    console.log(a);
  }, 1000);

  // get element
  const nameErrorEle = document.getElementById("errorUsername");

  const errorList = {
    minlength: nameEle.getAttribute("minlength"),
    required: nameEle.getAttribute("required"),
  };

  // check dk

  const error = validate("username", newName, errorList);

  if (error) {
    nameErrorEle.innerText = error;
    listError.userName = error;
  } else {
    nameErrorEle.innerText = "";
    listError.userName = null;
  }
  checkSubmit();
});

passwordEle.addEventListener("keyup", (event) => {
  const { name, value, checked } = event.target;
  formValue.password = value;
  let newPassword = value.trim();

  const passwordErrorEle = document.getElementById("errorPassword");

  const errorList = {
    required: passwordEle.getAttribute("required"),
    theFirstLetter: passwordEle.getAttribute("theFirstLetter"),
  };

  const error = validate("password", newPassword, errorList);

  if (error) {
    passwordErrorEle.innerText = error;
    listError.password = error;
  } else {
    passwordErrorEle.innerText = "";
    listError.password = error;
  }
  checkSubmit();
});

confirmEle.addEventListener("keyup", (event) => {
  const { name, value, checked } = event.target;

  formValue.confirmPw = value;
  let newConfirmPw = value.trim();

  const confirmPwError = document.getElementById("errorConfirm");

  const errorList = {
    required: confirmEle.getAttribute("required"),
    checkPw: confirmEle.getAttribute("checkPw"),
  };

  const error = validate("confirm", newConfirmPw, errorList);

  if (error) {
    confirmPwError.innerText = error;
    listError.confirmPw = error;
  } else {
    confirmPwError.innerText = "";
    listError.confirmPw = null;
  }
  checkSubmit();
});

maleEle.addEventListener("click", (event) => {
  const { name, value, checked } = event.target;
  formValue.sex = checked;
  checkSubmit();
});

femaleEle.addEventListener("click", (event) => {
  const { name, value, checked } = event.target;
  formValue.sex = checked;
  checkSubmit();
});

dobEle.addEventListener("change", (event) => {
  const { name, value, checked } = event.target;
  formValue.dob = new Date(value).getTime();

  const dobErrorEle = document.getElementById("errorDob");

  const errorList = {
    checkDate: dobEle.getAttribute("checkDate"),
  };

  const error = validate("dob", value, errorList);

  if (error) {
    dobErrorEle.innerText = error;
    listError.password = error;
  } else {
    dobErrorEle.innerText = "";
    listError.password = error;
  }
  checkSubmit();
});

buttonEle.addEventListener("click", (e) => {
  const email = emailELe.value;
  const username = nameEle.value;
  const password = passwordEle.value;
  const male = maleEle.checked;
  const female = femaleEle.checked;
  const dOB = new Date(dobEle.value).getTime();
  const sex = !male ? "female" : "male";

  async function postJSON(data) {
    buttonEle.innerText = "loading";
    buttonEle.setAttribute("disabled", "true");
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
        window.location.href = "SignIn.html";
        window.alert(
          "Đăng ký thành công tài khoản: " +
            data.email +
            " Người dùng: " +
            data.userName
        );
      } else {
        window.alert("Đăng ký thất bại");
      }
      const result = await response.json();
      await new Promise((rev) => {
        setTimeout(() => {
          rev();
          buttonEle.removeAttribute("disabled");
          buttonEle.innerText = "Register";
        }, 2000);
      });
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  postJSON({ email, username, password, sex, dOB });
});
