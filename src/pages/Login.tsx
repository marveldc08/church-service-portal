import React, {useRef,useState, useEffect, FC, useContext} from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";
import { useStorage } from "../utilities/LocalStorage";
import { useGet } from "../utilities/HttpConnection";
import Context from "../components/Contexts";
import requests from "../utilities/requests";
import Alerts from "../components/Alerts";
const BASE_URL: string  = 'https://celz4-api.herokuapp.com';

const Login = () => {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const [encoded, setEncoded] = useState<string>('')
  const navigate = useNavigate();
  const userContext = useContext(Context)
   const storage = useStorage();
     
    function handleLogin(event?: React.FormEvent<HTMLFormElement>) {
      event?.preventDefault();
      const password = passwordRef.current?.value;
      const email = emailRef.current?.value
      fetch(`${BASE_URL}/v2/admin/login`,{
        headers: {
          'content-Type': 'application/json'
         },
        method : 'post',
        body : JSON.stringify({email, password}),
      }).then(response =>{return response.json()}).then((data) => {
        if(data){
          storage.storeData(data.token);
          console.log(data.token); 
          navigate('/dashboard'); 
          userContext.signIn();
        }

      }).catch(error => {
         console.log(error)
      }) 
    
      console.log("This is the encoded token" + encoded)
    }


  
    return (
      <div className="login-block"> 
        <nav>
          <div className="img">
            <img className="img-sub" src="./images/UIHere.jpeg" />
          </div>
        </nav>

        <div className="sub-main">
          <h3 className="login__h3">Welcome to CELZ4 Admin</h3>
          <h6 className="login__h6">Kindly input your credential.</h6>
          <form onSubmit={handleLogin}>
            <label>Email:</label>
            <input ref={emailRef} type="email"></input>
            <label>Password:</label>
            <input ref={passwordRef} type="password"></input>
            <button className="login__button">Log In</button>
          </form>
        </div>
        <Alerts />
      </div>

    );
}

export default Login;