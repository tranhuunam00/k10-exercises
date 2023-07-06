import './signup.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEye, faEyeSlash, faFlag } from '@fortawesome/free-solid-svg-icons';
import CustomInput from '../InputCustom/inputCustom';

function Signup() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countrySelected, setCountrySelected] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [usernameValid, setUsernameValid] = useState(true);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setCountrySelected(true);
    setUsernameErrorMessage('');
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    // Determine password strength
    let strength = 'weak';
    if (password.length >= 8) {
      strength = 'medium';
      if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)) {
        strength = 'strong';
      }
    }
    setPasswordStrength(strength);
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
    setUsernameValid(true);

    if (value.length < 6 || value.length > 10) {
      setUsernameValid(false);
      setUsernameErrorMessage('Username must be between 6 and 10 characters');
    } else {
      setUsernameValid(true);
      setUsernameErrorMessage('');
    }
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailValid(true);

    // Email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value.match(emailPattern)) {
      setEmailValid(false);
      setEmailErrorMessage('Invalid email address');
    } else {
      setEmailValid(true);
      setEmailErrorMessage('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check form fields
    if (username === '') {
      setUsernameValid(false);
      setUsernameErrorMessage('Username is required');
    }

    if (username !== '' && selectedCountry !== '' && emailValid) {
      // Submit the form if all information is filled correctly
      console.log('Form submitted');
      alert('Signup successful!');
      window.location.reload();
    }
  };

  return (
    <div className="container">
      <header>Form</header>
      <form onSubmit={handleSubmit}>
        <CustomInput
          label="Username"
          icon={<FontAwesomeIcon icon={faUser} />}
          value={username}
          onChange={handleUsernameChange}
          className={!usernameValid ? 'error' : ''}
        />
        {!usernameValid && (
          <div className="error-message">{usernameErrorMessage}</div>
        )}

        <CustomInput
          label="Email"
          icon={<FontAwesomeIcon icon={faEnvelope} />}
          value={email}
          onChange={handleEmailChange}
          className={!emailValid ? 'error' : ''}
        />
        {!emailValid && (
          <div className="error-message" >{emailErrorMessage}</div>
        )}
        <div className="input-field">
          <input
            className="pswrd"
            type={passwordVisible ? 'text' : 'password'}
            required
            onChange={handlePasswordChange}
          />
          <span className="show" onClick={() => setPasswordVisible(!passwordVisible)}>
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            {passwordVisible ? '' : ''}
          </span>
          <label><FontAwesomeIcon icon={faLock} /> Password</label>
          <div
            className={`password-strength-meter password-${passwordStrength}`}
          ></div>
        </div>

          <div className={`input-field ${countrySelected && 'selected'}`}>
            <label style={{ display: selectedCountry ? 'none' : 'block' }} ><FontAwesomeIcon icon={faFlag} /> Country</label>
            <select value={selectedCountry} onChange={handleCountryChange} style={{color: '#5D5FEF'}}>
              <option disabled selected hidden value="" style={{color: '#5D5FEF'}}></option>
              <option value="USA" style={{color: '#5D5FEF'}}>United States</option>
              <option value="CAN"style={{color: '#5D5FEF'}}>Canada</option>
              <option value="GBR"style={{color: '#5D5FEF'}}>United Kingdom</option>
              <option value="AUS"style={{color: '#5D5FEF'}}>Australia</option>
            </select>
          
        </div>


        <div className='test'>
          <h3 style={{ color: '#5D5FEF' }}>Level of development</h3>
          <div className="checkboxes">
            <label className="checkbox" style={{ color: '#5D5FEF' }}>
              <input type="checkbox" name="basic" />
              Basic
            </label>
            <label className="checkbox" style={{ color: '#5D5FEF' }}>
              <input type="checkbox" name="medium" />
              Medium
            </label>
            <label className="checkbox" style={{ color: '#5D5FEF' }}>
              <input type="checkbox" name="advanced" />
              Advanced
            </label>
          </div>
        </div>

        <h3 style={{ color: '#5D5FEF' }}>Programming Skills</h3>
        <div className="checkboxes">
          <label className="checkbox" style={{ color: '#5D5FEF' }}>
            <input type="checkbox" name="basic" />
            Java
          </label>
          <label className="checkbox" style={{ color: '#5D5FEF' }}>
            <input type="checkbox" name="medium" />
            Python
          </label>
          <label className="checkbox" style={{ color: '#5D5FEF' }}>
            <input type="checkbox" name="advanced" />
            Javascript
          </label>
        </div>

        <div className="button">
          <div className="inner"></div>
          <button onClick={handleSubmit}>SEND</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
