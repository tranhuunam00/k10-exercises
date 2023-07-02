import './App.css';
import Signup from './Component/signup';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    const setError = (element, message) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector('.error');

      errorDisplay.innerText = message;
      inputControl.classList.add('error');
      inputControl.classList.remove('success');
    };

    const setSuccess = element => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector('.error');

      errorDisplay.innerText = '✓';
      inputControl.classList.add('success');
      inputControl.classList.remove('error');
    };

    const isValidEmail = email => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    const validateInputs = () => {
      const usernameValue = username.value.trim();
      const emailValue = email.value.trim();
      const passwordValue = password.value.trim();
      const password2Value = password2.value.trim();

      if (usernameValue === '') {
        setError(username, 'Username is required');
      } else {
        setSuccess(username);
      }

      if (emailValue === '') {
        setError(email, 'Email is required');
      } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
      } else {
        setSuccess(email);
      }

      if (passwordValue === '') {
        setError(password, 'Password is required');
      } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters.');
      } else {
        setSuccess(password);
      }

      if (password2Value === '') {
        setError(password2, 'Please confirm your password');
      } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords don't match");
      } else {
        setSuccess(password2);
      }
    };

    const passwordStrengthBar = password.parentElement.querySelector('.strength-bar');

    const updatePasswordStrength = () => {
      const passwordValue = password.value;

      if (passwordValue.length < 4) {
        passwordStrengthBar.classList.remove('strength-medium', 'strength-strong');
        passwordStrengthBar.classList.add('strength-weak');
      } else if (passwordValue.length < 8) {
        passwordStrengthBar.classList.remove('strength-strong');
        passwordStrengthBar.classList.add('strength-medium');
      } else {
        passwordStrengthBar.classList.remove('strength-weak', 'strength-medium');
        passwordStrengthBar.classList.add('strength-strong');
      }
    };

    password.addEventListener('input', updatePasswordStrength);

    form.addEventListener('submit', e => {
      e.preventDefault();

      validateInputs();
    });
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
