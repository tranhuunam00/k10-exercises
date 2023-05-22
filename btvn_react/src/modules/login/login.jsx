import React, { useState, useEffect } from "react";
import axios from "axios";
import "./register.css";
import InputComponent from "./InputComponent";

const initFormValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  birthdate: "",
  gender: "",
};

const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};

const isEmailValue = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const Toast = ({ message, type, isLoading }) => (
  <div className={`toast ${type}`}>
    <span className="toast-message">{message}</span>
    {isLoading && <div className="toast-loading"></div>}
  </div>
);

export default function RegisterPage() {
  const [formValue, setFormValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, []);

  const showToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setIsLoading(false);
    setTimeout(() => {
      setToastMessage("");
      setToastType("");
    }, 3000);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [toastMessage, toastType]);

  const fetchUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };

  const validateForm = () => {
    const error = {};
    if (isEmptyValue(formValue.firstName)) {
      error["firstName"] = "First Name is required";
    }
    if (isEmptyValue(formValue.lastName)) {
      error["lastName"] = "Last Name is required";
    }
    if (isEmptyValue(formValue.birthdate)) {
      error["birthdate"] = "Birthdate is required";
    }
    if (isEmptyValue(formValue.gender)) {
      error["gender"] = "Gender is required";
    } else if (
      !["male", "female", "other"].includes(formValue.gender.toLowerCase())
    ) {
      error["gender"] = "Invalid Gender";
    }

    if (isEmptyValue(formValue.email)) {
      error["email"] = "Email is required";
    } else {
      if (!isEmailValue(formValue.email)) {
        error["email"] = "Invalid Email";
      }
    }
    if (isEmptyValue(formValue.password)) {
      error["password"] = "Password is required";
    }
    if (isEmptyValue(formValue.confirmPassword)) {
      error["confirmPassword"] = "Confirm Password is required";
    } else if (formValue.confirmPassword !== formValue.password) {
      error["confirmPassword"] = "Passwords do not match";
    }

    setFormError(error);
    return Object.keys(error).length === 0;
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      axios
        .post(" http://3.95.239.60:9001/api", formValue)
        .then((response) => {
          showToast("Registration successful", "success");
          fetchUsers(); // Fetch updated user list
        })
        .catch((error) => {
          console.error("API error:", error);
          showToast("Registration failed", "error");
        });
    } else {
      showToast("Please fill in all required fields correctly", "error");
    }
  };

  return (
    <div className="register-page">
      <div className="register-form-container">
        <h1 className="title">Register account</h1>
        {toastMessage && <Toast message={toastMessage} type={toastType} />}
        <form onSubmit={handleSubmit}>
          <InputComponent
            label="First Name"
            type="text"
            id="first-name"
            name="firstName"
            value={formValue.firstName}
            onChange={handleChange}
            error={formError.firstName}
          />

          <InputComponent
            label="Last Name"
            type="text"
            id="last-name"
            name="lastName"
            value={formValue.lastName}
            onChange={handleChange}
            error={formError.lastName}
          />

          <InputComponent
            label="Email"
            type="text"
            id="email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
            error={formError.email}
          />

          <InputComponent
            label="Birthdate"
            type="date"
            id="birthdate"
            name="birthdate"
            value={formValue.birthdate}
            onChange={handleChange}
            error={formError.birthdate}
          />

          <InputComponent
            label="Gender"
            type="select"
            id="gender"
            name="gender"
            value={formValue.gender}
            onChange={handleChange}
            error={formError.gender}
          >
            <option value="">-- Select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </InputComponent>

          <InputComponent
            label="Password"
            type="password"
            id="password"
            name="password"
            value={formValue.password}
            onChange={handleChange}
            error={formError.password}
          />

          <InputComponent
            label="Confirm Password"
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={formValue.confirmPassword}
            onChange={handleChange}
            error={formError.confirmPassword}
          />

          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}


