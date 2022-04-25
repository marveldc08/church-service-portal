import React, {useRef,useState, useEffect, FC} from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";
import { useStorage } from "../utilities/LocalStorage";


const Login: FC = () => {
  const emailRef = useRef<null | HTMLInputElement >(null);
  const passwordRef = useRef<null | HTMLInputElement>(null);
  const [encoded, setEncoded] = useState<string>('')
    const navigate = useNavigate();
   
     
    const handleLogin= (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
     const password = passwordRef.current?.value;
     console.log(password);
    
      if(typeof password == 'string'){
          setEncoded(password);  
      }
      navigate("/dashboard");
          
    }
     const handleStore = useStorage( encoded );
    
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
            <button className="login__button" onClick={ () => { handleStore.storeData();}}>
              {" "}
              Log In
            </button>
          </form>
        </div>
      </div>
    );
}

export default Login;