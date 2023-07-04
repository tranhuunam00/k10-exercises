import './signup.css';
import { useState } from 'react';



function Signup() {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countrySelected, setCountrySelected] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');
    const [username, setUsername] = useState('');
    const [usernameValid, setUsernameValid] = useState(true);
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [emailOrUsernameValid, setEmailOrUsernameValid] = useState(true);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setCountrySelected(true);
    };

    const handlePasswordChange = (event) => {
        const password = event.target.value;
        // Xác định độ mạnh yếu của password
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
        setUsername(event.target.value);
        setUsernameValid(true);
    };

    const handleEmailOrUsernameChange = (event) => {
        const value = event.target.value;
        setEmailOrUsername(value);
        setEmailOrUsernameValid(true);

        // Kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value !== '' && !emailRegex.test(value)) {
            setEmailOrUsernameValid(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Kiểm tra các trường thông tin
        if (username === '') {
            setUsernameValid(false);
        }

        if (emailOrUsername === '') {
            setEmailOrUsernameValid(false);
        }

        if (username !== '' && emailOrUsername !== '' && selectedCountry !== '') {
            // Gửi form nếu thông tin đã được điền đúng
            console.log('Form submitted');
        }
    };

    return (
        <div className="container">
            <header>Form</header>
            <form onSubmit={handleSubmit}>
                <div className={`input-field ${!usernameValid && 'error'}`}>
                    <input type="text" required value={username} onChange={handleUsernameChange} />
                    <label>Username</label>
                </div>
                <div className={`input-field ${!emailOrUsernameValid && 'error'}`}>
                    <input
                        type="text"
                        required
                        value={emailOrUsername}
                        onChange={handleEmailOrUsernameChange}
                    />
                    <label>Email or Username</label>
                </div>
                <div className="input-field">
                    <input
                        className="pswrd"
                        type={passwordVisible ? 'text' : 'password'}
                        required
                        onChange={handlePasswordChange}
                    />
                    <span className="show" onClick={() => setPasswordVisible(!passwordVisible)}>
                        {passwordVisible ? 'HIDE' : 'SHOW'}
                    </span>
                    <label>Password</label>
                    <div
                        className={`password-strength-meter password-${passwordStrength}`}
                    ></div>
                </div>

                <div className={`input-field country ${countrySelected && 'selected'}`}>
                    <label>Country</label>
                    <select value={selectedCountry} onChange={handleCountryChange}>
                        <option disabled selected hidden value=""></option>
                        <option value="USA">United States</option>
                        <option value="CAN">Canada</option>
                        <option value="GBR">United Kingdom</option>
                        <option value="AUS">Australia</option>
                    </select>
                </div>

                {countrySelected && (
                    <div className="input-field country">
                        <label className="selected-country">Country: {selectedCountry}</label>
                    </div>
                )}

                <div className="button">
                    <div className="inner"></div>
                    <button>SEND</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
