import React, { useState, useEffect } from "react";
import axios from "axios";
import "./register.css";

const InputCustom = ({ label, name, value, error, onChange }) => (
  <div className="mb-2">
    <label htmlFor={name} className="form-label">
      {label}
    </label>
    <input
      type="text"
      id={name}
      className="form-control"
      name={name}
      value={value}
      onChange={onChange}
    />
    {error && <div className="error-feedback">{error}</div>}
  </div>
);

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
  const [registeredUsers, setRegisteredUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://3.95.239.60:9001/api")
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
      .get("http://3.95.239.60:9001/api")
      .then((response) => {
        setUsers(response.data);
        setRegisteredUsers(response.data.filter(user => user.registered));
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
    } else if (!["male", "female", "other"].includes(formValue.gender.toLowerCase())) {
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
      setIsLoading(true); // Set loading state

      axios
        .post("http://3.95.239.60:9001/api", formValue)
        .then((response) => {
          showToast("Registration successful", "success");
          setRegisteredUsers([...registeredUsers, formValue]); // Add registered user to the list
          setFormValue(initFormValue); // Reset form values
        })
        .catch((error) => {
          console.error("API error:", error);
          showToast("Registration failed", "error");
        })
        .finally(() => {
          setIsLoading(false); // Reset loading state
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
          <InputCustom
            label="First Name"
            name="firstName"
            value={formValue.firstName}
            error={formError.firstName}
            onChange={handleChange}
          />
          <InputCustom
            label="Last Name"
            name="lastName"
            value={formValue.lastName}
            error={formError.lastName}
            onChange={handleChange}
          />
          <InputCustom
            label="Email"
            name="email"
            value={formValue.email}
            error={formError.email}
            onChange={handleChange}
          />
          <InputCustom
            label="Birthdate"
            name="birthdate"
            value={formValue.birthdate}
            error={formError.birthdate}
            onChange={handleChange}
          />
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

          <InputCustom
            label="Password"
            name="password"
            value={formValue.password}
            error={formError.password}
            onChange={handleChange}
          />
          <InputCustom
            label="Confirm Password"
            name="confirmPassword"
            value={formValue.confirmPassword}
            error={formError.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
      <div>
        <h2>Registered Users:</h2>
        {registeredUsers.map((user, index) => (
          <div key={index}>
            <p>{user.firstName} {user.lastName}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
