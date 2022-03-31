import React from "react";
import './Login.css'

const Login = () => {
    return (
        <div className="login-block">
            <div className="sub-main">
                <h1>Welcome to CELZ4 Admin</h1>
                <input type="email" placeholder="Email" id="email" />
                <input type="password" placeholder="Password" id="password" />
                <button>Submit</button>
            </div>
        </div>
    );
}

export default Login;