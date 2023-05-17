const nameEle = document.getElementById("username");
const passwordEle = document.getElementById("password");
const emailEle = document.getElementById("email");
const dOBEle = document.getElementById("dOB");
const sexEle = document.getElementById("sex");
const buttonELe = document.getElementById("submit");
const formELe = document.getElementById("form");
const maleELe = document.getElementById("male");
const femaleELe = document.getElementById("female");

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
    }

    if (error) {
      break;
    }
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
    buttonELe.classList.add("btn_disable");
    buttonELe.innerText = "disabled";
  } else {
    buttonELe.removeAttribute("disabled");
    buttonELe.classList.remove("btn_disable");
    buttonELe.classList.add("btn_active");
    buttonELe.innerText = "Ok";
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

// gắn 1 sự kiện vào thẻ input của username
nameEle.addEventListener("keyup", (event) => {
  const { name, value, checked } = event.target;
  formValue.userName = value;

  // get element
  const divUserName = document.querySelector(".divUserName");
  const pErrorEle = divUserName.querySelector("#errorUserName");

  // check dk
  const valid = nameEle.getAttribute("valid");
  const validObject = parseValid(valid);
  const error = validate(name, value, validObject);

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
  const divPassword = document.querySelector(".divPassword");
  const passwordErrorEle = divPassword.querySelector("#errorPassword");

  // check dk
  const valid = passwordEle.getAttribute("valid");
  const validObject = parseValid(valid);
  const error = validate(name, value, validObject);

  if (error) {
    passwordErrorEle.innerText = error;
    listError.userName = error;
  } else {
    passwordErrorEle.innerText = "";
    listError.userName = null;
  }
  checkSubmit();
});

emailEle.addEventListener("keyup", (event) => {
  const { name, value, checked } = event.target;
  formValue.email = value;

  // get element
  const divEmail = document.querySelector(".divEmail");
  const EmailErrorEle = divEmail.querySelector("#errorEmail");

  // check dk
  const valid = emailEle.getAttribute("valid");
  const validObject = parseValid(valid);
  const error = validate(name, value, validObject);

  if (error) {
    EmailErrorEle.innerText = error;
    listError.userName = error;
  } else {
    EmailErrorEle.innerText = "";
    listError.userName = null;
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
  const divDob = document.querySelector(".divDob");
  const dobError = divDob.querySelector("#errorDob");

  const valid = dOBEle.getAttribute("valid");
  const validObject = parseValid(valid);
  const error = validate(name, value, validObject);

  if (error) {
    dobError.innerText = error;
    listError.userName = error;
  } else {
    dobError.innerText = "";
    listError.userName = null;
  }
  checkSubmit();
});
