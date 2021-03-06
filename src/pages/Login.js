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
                <form>
                    <label>Email:</label>
                    <input type="email"></input>
                    <label>Password:</label>
                    <input type="email"></input>
                </form>
            </div>
        </div>
    );
}

export default Login;