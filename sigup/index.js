const emailElm = document.getElementById("email");
const usernameElm = document.getElementById("username");
const maleElm = document.getElementById("male");
const sexElm = document.getElementById("sex");
const femaleElm = document.getElementById("fe_male");
const passwordElm = document.getElementById("password");
const repasswordElm = document.getElementById("repassword");
const dateElm = document.getElementById("date");
const btn = document.getElementById("btn");
const form = document.getElementById("form");

const parseValid = (validString) => {
  if (!validString) return {};
  const objectValid = {};

  const arrayError = validString.split("|");

  for (const i of arrayError) {
    const [key, value = true] = i.split(":");

    objectValid[key] = value;
  }
  console.log(objectValid);
  return objectValid;
};

const ERROR_CHECK_LIST_TYPE = {
  required: "Ban khong duoc de trong truong du lieu",
  minlength: "Ban can nhap toi thieu",
  maxlength: "Ban can nhap toi da",
  dataType: "String",
  maxdate : "Ban phai chon ngay nho hon ngay hom nay",
  ismail : "email khong dung dinh dang"
};

const listError = {
  email: null,
  userName: null,
  sex: null,
  password: null,
  rePassword: null,
  date: null,
};

const formvalue = {
  email: null,
  userName: null,
  sex: null,
  password: null,
  rePassword: null,
  date: null,
};


const validateform = (type = "email", value, listError = {}) => {
  let error = "";
  const listErrorType = Object.keys(listError);
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  for (const key in listError) {
   switch (key) {
    case "required" :
      error = !value ? ERROR_CHECK_LIST_TYPE[key] : null
      break
      case "minlength":
        error =
          value.length < +listErrorType[key]
            ? ERROR_CHECK_LIST_TYPE[key] + listError[key] + "ki tu"
            : null;
        break;
      case "maxlength":
        error =
          value.length > +listErrorType[key]
            ? ERROR_CHECK_LIST_TYPE[key] + listError[key] + "ki tu"
            : null;
        break;
        case "maxdate" :
          error = new Date(value).getTime() > new Date().getTime() - 2000 ? ERROR_CHECK_LIST_TYPE[key] : null;
          break;
        case "isemail" :
          error = re.test(value.toUpperCase()) ? ERROR_CHECK_LIST_TYPE[key] : null;
          break; 
    }
    if (error) {
      break;
    }
   }
  return error;
};
const checksubmit = () => {
  if (
    listError.email ||
    listError.userName ||
    listError.sex ||
    listError.password ||
    listError.rePassword ||
    listError.date ||
    !formvalue.email ||
    !formvalue.sex ||
    !formvalue.password ||
    !formvalue.date
  ) {
    btn.setAttribute("disabled", "true");
  } else {
    btn.removeAttribute("disabled");
  }
};
emailElm.addEventListener("keyup", (even) => {
  const { name, value, Checked } = even.target;
  const divemail = document.querySelector(".form__email");
  const diwerremail = divemail.querySelector(".error__email");
  formvalue.email = value;
  const lister = {
    required: emailElm.getAttribute("required"),
  };

  const valid = usernameElm.getAttribute("valid");
  const validObjeck = parseValid(valid);
  const error = validateform(name, value, validObjeck);
  if (error) {
    diwerremail.innerText = error;
    listError.email = error;
  } else {
    diwerremail.innerText = "";
    listError.email = null;
  }
});

usernameElm.addEventListener("keyup", (even) => {
  const { name, value, Checked } = even.target;
  const divemail = document.querySelector(".form__username");
  const diwerremail = divemail.querySelector(".error__username");

  formvalue.userName = value;
  const valid = usernameElm.getAttribute("valid");
  const validObjeck = parseValid(valid);
  const error = validateform(name, value, validObjeck);

  if (error) {
    diwerremail.innerText = error;
    listError.userName = error;
  } else {
    diwerremail.innerText = "";
    listError.userName = null;
  }
  checksubmit();
});
maleElm.addEventListener("click", () => {
  const { name, value, Checked } = even.target;
  formvalue.male = Checked;
});
femaleElm.addEventListener("click", () => {
  const { name, value, Checked } = even.target;
  formvalue.fe_male = Checked;
});

passwordElm.addEventListener("keyup", (even) => {
  const { name, value, Checked } = even.target;
  const divemail = document.querySelector(".form__password");
  const diwerremail = divemail.querySelector(".error__password");
  formvalue.password = value;

  const valid = usernameElm.getAttribute("valid");
  const validObjeck = parseValid(valid);
  const error = validateform(name, value, validObjeck);
  if (error) {
    diwerremail.innerText = error;
    listError.password = error;
  } else {
    diwerremail.innerText = "";
    listError.password = null;
  }
  checksubmit();
});

repasswordElm.addEventListener("keyup", (even) => {
  const { name, value, Checked } = even.target;
  formvalue.rePassword = value;

  const valid = usernameElm.getAttribute("valid");
  const validObjeck = parseValid(valid);
  const error = validateform(name, value, validObjeck);
  if (error) {
    diwerremail.innerText = error;
    listError.password = error;
  } else {
    diwerremail.innerText = "";
    listError.password = null;
  }
  checksubmit();
});

dateElm.addEventListener("change", (even) => {
  const { name, value, Checked } = even.target;
  const divemail = document.querySelector(".form__date");
  const diwerremail = divemail.querySelector(".error__date");
  formvalue.date = value;

  const valid = usernameElm.getAttribute("valid");
  const validObjeck = parseValid(valid);
  const error = validateform(name, value, validObjeck);
  if (error) {
    diwerremail.innerText = error;
    listError.date = error;
  } else {
    diwerremail.innerText = "";
    listError.date = null;
  }
  checksubmit();
});

btn.addEventListener("click", () => {
  const email = emailElm.value;
  const userName = usernameElm.value;
  const male = maleElm.Checked;
  const fe_male = femaleElm.Checked;
  const password = passwordElm.value;
  const date = dateElm.value;
  // validate
});

form.addEventListener("submit", (even) => {
  even.preventDefault();
});
