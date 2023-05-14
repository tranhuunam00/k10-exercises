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
  console.log(password);
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
      
      case "sex":
        formValue.sex = null;
        if (maleEle.checked) {
          formValue.sex = maleEle.value;
        } else if (femaleEle.checked) {
          formValue.sex = femaleEle.value;
        } else {
          error = "Hãy chọn giới tính";
          break;
        }
        checkSubmit();
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

//...



// Hàm kiểm tra lỗi và enable/disable button submit
const checkSubmit = () => {
  if (
    listError.userName ||
    listError.password ||
    listError.dob ||
    listError.email ||
    listError.confirmPw ||
    !formValue.userName ||
    !formValue.dob ||
    !formValue.confirmPw ||
    !formValue.email ||
    !formValue.password ||
    !formValue.sex
  ) {
    buttonEle.setAttribute("disabled", "true");
    buttonEle.classList.add("invalid");
  } else {
    buttonEle.removeAttribute("disabled");
    buttonEle.classList.remove("invalid");
  }
};

// Lắng nghe sự kiện input change của các trường input
emailELe.addEventListener("change", () => {
  listError.email = validate("email", emailELe.value, listError);
  formValue.email = emailELe.value;
  checkSubmit();
});

nameEle.addEventListener("change", () => {
  listError.userName = validate("username", nameEle.value, { minlength: 5 }, passwordEle.value);
  formValue.userName = nameEle.value;
  checkSubmit();
});

maleEle.addEventListener("change", () => {
  listError.sex = validate("sex", null, listError);
  checkSubmit();
});

femaleEle.addEventListener("change", () => {
  listError.sex = validate("sex", null, listError);
  checkSubmit();
});

passwordEle.addEventListener("change", () => {
  listError.password = validate("password", passwordEle.value, { theFirstLetter: true }, confirmEle.value);
  formValue.password = passwordEle.value;
  checkSubmit();
});

confirmEle.addEventListener("change", () => {
  listError.confirmPw = validate("confirm", confirmEle.value, { checkPw: true }, passwordEle.value);
  formValue.confirmPw = confirmEle.value;
  checkSubmit();
});

dobEle.addEventListener("change", () => {
  listError.dob = validate("dob", dobEle.value, listError);
  formValue.dob = dobEle.value;
  checkSubmit();
});

avatarEle.addEventListener("change", () => {
  formValue.avatar = avatarEle.value;
});

//...


const listError = {
  userName: null,
  dob: null,
  sex: null,
  password: null,
  confirmPw: null,
  email: null,
};

const formValue = {
  email: "",
  name: "",
  password: "",
  confirmPw: "",
  sex: null,
  dob: "",
  avatar: "",
};

formEle.addEventListener("submit", (e) => {
  e.preventDefault();

  // kiểm tra form có lỗi hay không
  if (
    listError.userName ||
    listError.password ||
    listError.dob ||
    listError.sex ||
    listError.email ||
    listError.confirmPw ||
    !formValue.userName ||
    !formValue.dob ||
    !formValue.confirmPw ||
    !formValue.email ||
    !formValue.sex ||
    !formValue.password
    
  ) {
    alert("Vui lòng kiểm tra lại thông tin nhập");
    return;
  }

  // tạo object user với dữ liệu người dùng đã nhập
  const user = {
    email: formValue.email,
    name: formValue.userName,
    password: formValue.password,
    confirm: formValue.confirmPw,
    gender: formValue.sex,
    
    dob: formValue.dob,
  };
  console.log(user.email);

  // reset giá trị trên form và báo thành công
  formEle.reset();
  alert("Đã đăng ký thành công với thông tin như sau: " + JSON.stringify(user));
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
  formValue.dob = value;
  let newDob = value.trim();
  const dobErrorEle = document.getElementById("errorDob");

  const errorList = {
    checkDate: dobEle.getAttribute("checkDate"),
  };

  const error = validate("dob", newDob, errorList);

  if (error) {
    dobErrorEle.innerText = error;
    listError.password = error;
  } else {
    dobErrorEle.innerText = "";
    listError.password = error;
  }
  checkSubmit();
});
