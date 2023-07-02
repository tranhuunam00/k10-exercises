import React from 'react';
import './signup.css';

function Signup() {
  return (
    <div>
      <div className="container">
        <form id="form" action="/">
          <h1>Registration</h1>
          <div className="input-control">
            <label htmlFor="username">
              <i className="fas fa-user"></i> Username
            </label>
            <input id="username" name="username" type="text" />
            <div className="error"></div>
          </div>
          <div className="input-control">
            <label htmlFor="email">
              <i className="fas fa-envelope"></i> Email
            </label>
            <input id="email" name="email" type="text" />
            <div className="error"></div>
          </div>
          <div className="input-control">
            <label htmlFor="password">
              <i className="fas fa-lock"></i> Password
            </label>
            <input id="password" name="password" type="password" />
            <div className="error"></div>
            <div className="strength-bar"></div>
          </div>
          <div className="input-control">
            <label htmlFor="password2">
              <i className="fas fa-lock"></i> Password again
            </label>
            <input id="password2" name="password2" type="password" />
            <div className="error"></div>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
