import React, {useState, useEffect, useRef} from 'react'
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import './CreateAdmin.css';
import { setAccount } from '../utilities/HttpConnection';
function CreateAdmin() {
     const [firstName, setFirstName] = useState<string | null>()
     const [lastName, setLastName] = useState<string | null>()
     const [email, setEmail] = useState<string | null>()
     const [role, setRole] = useState<string | null>()
     const [church, setChurch] = useState<string | null>()
     const [groupChurch, setGroupChurch] = useState<string | null>()
     const passwordRef = useRef<HTMLInputElement>()
     const confirmPasswordRef = useRef<HTMLInputElement>()
     const navigate = useNavigate();

     //Validate password state
     const [validateUppercase, setValidateUppercase] = useState(false);
     const [validateLowercase, setValidateLowercase] = useState(false);
     const [validateNumber, setValidateNumber] = useState(false);
     const [validateLenght, setValidateLenght] = useState(false);
     const [validateConfirmPsw, setValidateConfirmPsw] = useState(false);

     // alert state
     const [successAlert, setSuccessAlert] = useState(false);

     useEffect(() => {
          let queryString = window.location.search;
          let params = new URLSearchParams(queryString); 
          setFirstName(params.get('firstname'));
          setLastName(params.get('lastname'));
          setRole(params.get('role'));
          setEmail(params.get('email'));
          setChurch(params.get('church'));
          setGroupChurch(params.get('groupchurch'));
     }, []);

     
     function createAdmin(){
          const admin: setAccount = {
               firstName: firstName,
               lastName: lastName,
               email: email,
               role: role,
               church: church,
               groupChurch: groupChurch,
               password: passwordRef.current?.value,
          }

          fetch(`https://celz4-api.herokuapp.com/v2/admin/create`,{
               method : 'POST',
               body : JSON.stringify(admin),
               headers: {
               'content-Type': 'application/json'
               }
          }).then(response =>{return response.json()}).then((data) => {
               alert('Church created successfully');
               navigate('/sucessful')

          })
     }
     function clearForm(){
          setFirstName('');
          setLastName('');
          setRole('');
          setEmail('');
          setChurch('');
          setGroupChurch('');
     }

     useEffect(() => {
          let password = document.getElementById("psw") as HTMLInputElement;
          let userConfirmPassword = document.getElementById("confirmPsw") as HTMLInputElement;
          let validationText = document.querySelector('.confirm__password');
          let letter = document.getElementById("letter")!;
          let capital = document.getElementById("capital")!;
          let number = document.getElementById("number")!;
          let length = document.getElementById("length")!;


               password.onfocus = function() {
                    document.getElementById("message")!.style.display = "block";
               }
             
             // When the user clicks outside of the password field, hide the message box
               password.onblur = function() {
                    document.getElementById("message")!.style.display = "none";
               }
               
               // When the user starts to type something inside the password field
               password.onkeyup = function() {
                    // Validate lowercase letters
                    var lowerCaseLetters = /[a-z]/g;
                    if(password.value.match(lowerCaseLetters)) {  
                         letter.classList.remove("invalid");
                         letter.classList.add("valid");
                         setValidateLowercase(true);
                    } else {
                         letter.classList.remove("valid");
                         letter.classList.add("invalid");
                         setValidateLowercase(false);
                    }
                    
                    // Validate capital letters
                    var upperCaseLetters = /[A-Z]/g;
                    if(password.value.match(upperCaseLetters)) {  
                         capital.classList.remove("invalid");
                         capital.classList.add("valid");
                         setValidateUppercase(true);
                    } else {
                         capital.classList.remove("valid");
                         capital.classList.add("invalid");
                         setValidateUppercase(false)
                    }
                    
                    // Validate numbers
                    var numbers = /[0-9]/g;
                    if(password.value.match(numbers)) {  
                         number.classList.remove("invalid");
                         number.classList.add("valid");
                         setValidateNumber(true)
                    } else {
                         number.classList.remove("valid");
                         number.classList.add("invalid");
                         setValidateNumber(false)
                    }
                    
                    // Validate length
                    if(password.value.length >= 8) {
                         length.classList.remove("invalid");
                         length.classList.add("valid");
                         setValidateLenght(true)
                    } else {
                         length.classList.remove("valid");
                         length.classList.add("invalid");
                         setValidateLenght(false);
                    }
               }

               function checkPassword(password: HTMLInputElement, confirmPassword: HTMLInputElement){
                    confirmPassword.addEventListener('keyup', function(){
                         if(confirmPassword.value == password.value){
                              confirmPassword.classList.remove('red-text')
                              validationText!.innerHTML = '';
                              validationText!.classList.remove('invalid');
                              setValidateConfirmPsw(true);
                         }
                         else{
                              confirmPassword.classList.add('red-text')
                              validationText!.innerHTML = 'Password does not match';
                              validationText!.classList.add('invalid');
                              setValidateConfirmPsw(false);
                         }
                    })
               }
               checkPassword(password, userConfirmPassword);
     }, [])
    
    
     
     


  return (
    <Container>
         <ImageDiv>
               <img src='./images/signup2.svg' />
         </ImageDiv>
         <FormDiv>
              <h1>Create Account</h1>
              <p>Kindly create your password to complete your account creation</p>
               <form>
                    <div className='input__wrapper'>
                         <label className='flabel'>First Name</label>
                         <input type="text" className='finput' id='fname' value={firstName} />
                    </div>
                    <div className='input__wrapper'>
                         <label className='flabel'>Last Name</label>
                         <input type="text" className='finput'  value ={lastName} />
                    </div>
                    <div className='input__wrapper'>
                         <label className='flabel'>Email</label>
                         <input type="text" className='finput' readOnly value ={email} />
                    </div>
                    <div className='input__wrapper'>
                         <label className='flabel'>Role</label>
                         <input type="text" className='finput' readOnly value ={role} />
                    </div>
                    <div className='input__wrapper'>
                         <label className='flabel'>Church</label>
                         <input type="text" className='finput' readOnly value ={church} />
                    </div>
                    <div className='input__wrapper'>
                         <label className='flabel'>Group</label>
                         <input type="text" className='finput' readOnly value ={groupChurch} />
                    </div>
                    <div className='input__wrapper'>
                         <label className='flabel'>Password</label>
                         <input type="password"  id= 'psw' className='finput' pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  placeholder='Create Password' ref={passwordRef} required />
                    </div>
                    <div className='input__wrapper'>
                         <label className='flabel'>Confirm Password</label>
                         <input type="password" className='finput' id='confirmPsw' placeholder='Confirm Password' ref={confirmPasswordRef} required />
                         
                    </div>
                    <p className="confirm__password"></p>
               </form>
                    <Buttons>
                         <button className='invite__button' onClick={() => {createAdmin()}} disabled = {(validateLenght && validateLowercase && validateNumber && validateUppercase && validateConfirmPsw && firstName != null && email != null && role != null)?false : true} >Submit</button>
                    </Buttons>
               <div id="message">
                    <h3 className='message__header'>Password must contain the following:</h3>
                    <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
                    <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
                    <p id="number" className="invalid">A <b>number</b></p>
                    <p id="length" className="invalid">Minimum <b>8 characters</b></p>
               </div>
         </FormDiv>
    </Container>
  )
}

export default CreateAdmin;

const Container = styled.div`
     display: flex;
     height: 100vh;
`
const ImageDiv = styled.div`
     flex: 50%;
     img{
          width: 100%;
          height: 100%;
          object-fit: contain;
     }
`

const FormDiv = styled.div`
     flex: 50%;
     display: flex; 
     flex-direction: column;
     padding-top: 50px;
     justify-content: center;
     overflow: scroll;
     &::-webkit-scrollbar{
          display: none;
     }
     border-left: 1px solid #f1f2f3;
     h1{
          text-align: center;
     }
     p{
          text-align: center;
     }
`

const Buttons = styled.div`
   display: flex;
   justify-content: flex-end;
   padding: 10px;
`