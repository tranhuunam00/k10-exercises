import React, { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    async function accountLogin() {
        let item = { username, password };
        let response = await fetch("http://3.95.239.60:9001/api/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        })
        const result = await response.json();
        console.log(response.status);
        console.log(response);
        console.log(result)
    }
    return (
        <div>
            <h1>Login</h1>
            <form action="" onSubmit={(e) => { e.preventDefault() }}>
                <div className="input">
                    <label htmlFor="">Username</label>
                    <input type="text" name="" id="username" onChange={(e) => { setUsername(e.target.value) }} />
                </div>
                <div className="input">
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="password" onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <button onClick={accountLogin}>
                    Login
                </button>
            </form>
        </div>
    )
}
