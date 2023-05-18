import { useState } from 'react';
import "./style.css";
import Clock from "./modules/time/clock";

function App() {
  const [formValue, setFormValue] = useState({
    userName: "",
    password: "",
    sex: "female",
    dob: null,
    email: "",
  });

  const [listError, setListError] = useState({
    userName: null,
    dob: null,
    sex: null,
    password: null,
    email: null,
  });

  const parseValid = (validString) => {
    if (!validString) return {};

    const arrayError = validString.split("|");
    return arrayError.reduce((pre, cur) => {
      const [key, value = true] = cur.split(":");
      return { ...pre, [key]: value };
    }, {});
  };

  const validate = (type = "username", value, listError = {}) => {
    let error = null;

    for (let key in listError) {
      switch (key) {
        case "required":
          error = !value ? "Bạn cần nhập trường " : null;
          break;
        case "minLength":
          error =
            value.length < +listError[key]
              ? "yêu cầu tối thiểu cho " + listError[key] + " kí tự"
              : null;
          break;
        case "maxLength":
          error =
            value.length > +listError[key]
              ? "yêu cầu tối đa cho " + listError[key] + " kí tự"
              : null;
          break;
        default:
          break;
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
      return true;
    } else {
      return false;
    }
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  const handleChangeInput = (event) => {
    const { name, value, checked } = event.target;

    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    const valid = event.target.getAttribute("valid");
    const validObject = parseValid(valid);
    const error = validate(name, value, validObject);

    setListError((prevState) => ({
      ...prevState,
      [name]: error,
    }));
  };

  const handleCheckedRadio = (event) => {
    const { name, value, checked } = event.target;

    setFormValue((prevState) => ({
      ...prevState,
      sex: value,
    }));
  };

  const handleChangeDate = (event) => {
    const { name, value, checked } = event.target;
    const dateValue = new Date(value).getTime();

    setFormValue((prevState) => ({
      ...prevState,
      dob: dateValue,
    }));

    if (!value || dateValue > new Date().getTime() - 2000) {
      setListError((prevState) => ({
        ...prevState,
        dob: "Nhập ngày nhỏ hơn ngày hiện tại",
      }));
    } else {
      setListError((prevState) => ({
        ...prevState,
        dob: null,
      }));
    }
  };

  const handleDisableSubmit = checkSubmit();

  return (
    <>
    <Clock/>
      <form onSubmit={handleSubmitForm}>
        <div className="divUserName">
          <h4>UserName</h4>
          <input
            id="username"
            type="text"
            name="userName"
            
            placeholder="username"
            valid="required|minLength:6"
            onChange={handleChangeInput}
          />
          <p id="errorUserName" style={{ color: "red" }}>
            {listError.userName}
          </p>
        </div>

        <div className="divPassword">
          <h4>Password</h4>
          <input
            id="password"
            type="text"
            name="password"
            
            placeholder="password"
            valid="required|minLength:8|maxLength:20"
            onChange={handleChangeInput}
          />
          <p id="errorPassword" style={{ color: "red" }}>
            {listError.password}
          </p>
        </div>

        <div className="divSex">
          <h4>Sex</h4>
          <label htmlFor="">Male</label>{" "}
          <input
            id="male"
            name="sex"
            type="radio"
            checked={formValue.sex === "male"}
            value="male"
            onChange={handleCheckedRadio}
          />
          <label htmlFor="">FE_MALE</label>
          <input
            id="female"
            name="sex"
            type="radio"
            checked={formValue.sex === "female"}
            value="female"
            onChange={handleCheckedRadio}
          />
          <p id="errorSex" style={{ color: "red" }}>
            {listError.sex}
          </p>
        </div>

        <div className="divDob">
          <h4>Dob</h4>
          <input id="dOB" type="date" name="dob"  onChange={handleChangeDate} />
          <p id="errorDob" style={{ color: "red" }}>
            {listError.dob}
          </p>
        </div>

        <div className="divEmail">
          <h4>email</h4>
          <input
            id="email"
            type="text"
            name="email"
          
            placeholder="email"
            onChange={handleChangeInput}
          />
          <p id="errorEmail" style={{ color: "red" }}>
            {listError.email}
          </p>
        </div>

        <button id="submit" disabled={handleDisableSubmit} type="submit">
          Nut
        </button>
      </form>
    </>
  );
}

export default App;
