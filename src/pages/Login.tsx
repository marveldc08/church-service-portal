import React, {useRef,useState, useEffect, FC, useContext} from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";
import { useStorage } from "../utilities/LocalStorage";
import { useGet } from "../utilities/HttpConnection";
import Context from "../components/Contexts";

const BASE_URL: string  = 'https://celz4-api.herokuapp.com';

const Login = () => {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const [encoded, setEncoded] = useState<string>('')
  const [errorAlert, setErrorAlert] = useState(false);
  const navigate = useNavigate();
  const userContext = useContext(Context)
   const storage = useStorage();    
    
   async function handleLogin(event?: React.FormEvent<HTMLFormElement>) {
      event?.preventDefault();
      const password = passwordRef.current?.value;
      const email = emailRef.current?.value
     await fetch(`${BASE_URL}/v2/admin/login`,{
        headers: {
          'content-Type': 'application/json'
         },
        method : 'post',
        body : JSON.stringify({email, password}),
      }).then(response =>{return response.json()}).then((data) => {
        if(data.status == 'ok'){
          console.log(data);
          storage.storeData(data.token);
          navigate('/dashboard'); 
          userContext.signIn();
        }else{
          setErrorAlert(true);
        }

      }).catch(error => {
        
        console.log(error);
      }) 
    
    }


  
    return (
      <div className="login-block"> 
        <nav>
          <div className="img">
            <img className="img-sub" src="./images/UIHere.jpeg" />
          </div>
        </nav>

        <div className="sub-main">
          <div className= {errorAlert? 'alert alert-danger alert-dismissible display' : "hide"}>
            <button type="button" className="close" data-dismiss="alert" onClick= {() => {setErrorAlert(false);}}>&times;</button>
              <h4><b>Invalid Credentials!</b></h4>
              <p>Your login credentials are invalid. Kindly check your email and password and try again.</p>
          </div>
          <h3 className="login__h3">Welcome to CELZ4 Admin</h3>
          <h6 className="login__h6">Kindly input your credential.</h6>
          <form className="login__form" onSubmit={handleLogin}>
            <label className="login__lable">Email:</label>
            <input ref={emailRef} type="email"></input>
            <label className="login__lable">Password:</label>
            <input ref={passwordRef} type="password"></input>
            <button className="login__button">Log In</button>
          </form>
        </div>
        {/* <Alerts /> */}
      </div>

    );
}

export default Login;