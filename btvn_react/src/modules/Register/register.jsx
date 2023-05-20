import React, { useState, useEffect } from "react";
import axios from "axios";
import "./register.css";

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
        .post("https://jsonplaceholder.typicode.com/users", formValue)
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
          <div className="mb-2">
            <label htmlFor="first-name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="form-control"
              name="firstName"
              value={formValue.firstName}
              onChange={handleChange}
            />
            {formError.firstName && (
              <div className="error-feedback">{formError.firstName}</div>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="last-name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="form-control"
              name="lastName"
              value={formValue.lastName}
              onChange={handleChange}
            />
            {formError.lastName && (
              <div className="error-feedback">{formError.lastName}</div>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              name="email"
              value={formValue.email}
              onChange={handleChange}
            />
            {formError.email && (
              <div className="error-feedback">{formError.email}</div>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="birthdate" className="form-label">
              Birthdate
            </label>
            <input
              type="date"
              id="birthdate"
              className="form-control"
              name="birthdate"
              value={formValue.birthdate}
              onChange={handleChange}
            />
            {formError.birthdate && (
              <div className="error-feedback">{formError.birthdate}</div>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              id="gender"
              className="form-control"
              name="gender"
              value={formValue.gender}
              onChange={handleChange}
            >
              <option value="">-- Select --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {formError.gender && (
              <div className="error-feedback">{formError.gender}</div>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              name="password"
              value={formValue.password}
              onChange={handleChange}
            />
            {formError.password && (
              <div className="error-feedback">{formError.password}</div>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="form-control"
              name="confirmPassword"
              value={formValue.confirmPassword}
              onChange={handleChange}
            />
            {formError.confirmPassword && (
              <div className="error-feedback">{formError.confirmPassword}</div>
            )}
          </div>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
