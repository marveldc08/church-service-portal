import React from "react";
import './Login.css'
import {useNavigate} from "react-router-dom";
// import Alerts from '../components/Alerts';


const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="login-block">
        <nav>
            <div className="img">
                <img className="img-sub" src="./images/UIHere.jpeg" />
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
                    <button onClick={() => {navigate("/dashboard")}}> Log In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;