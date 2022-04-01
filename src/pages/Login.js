import React from "react";
import './Login.css'

const Login = () => {
    return (
        <div className="login-block">
        <nav>
            <div className="img">
                <img src="./images/UIHere.jpeg" />
            </div>
        </nav>
            <div className="sub-main">
                <h3>Welcome to CELZ4 Admin</h3>
                <h6>Kindly input your credential.</h6>
                <input type="email" placeholder="Email" id="email" />
                <input type="password" placeholder="Password" id="password" />
                <button>Submit</button>
            </div>
        </div>
    );
}

export default Login;