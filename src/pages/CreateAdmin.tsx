import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components';
import './CreateAdmin.css';
import { usePost } from '../utilities/HttpConnection';
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

     
     let post = usePost()
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
          post.makePost(admin,'http://localhost:8000/v2/admin/create'); // posts the data
         if(post.responsMessage === "Successful"){
              alert('Successfully created an admin')
         }else{
              alert(post.serverError)
         }
     }
     function clearForm(){
          setFirstName('');
          setLastName('');
          setRole('');
          setEmail('');
          setChurch('');
          setGroupChurch('');
     }
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
                         <input type="text" className='finput' id='fname' readOnly value={firstName} />
                    </div>
                    <div className='input__wrapper'>
                         <label className='flabel'>Last Name</label>
                         <input type="text" className='finput' readOnly value ={lastName} />
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
                         <input type="password" className='finput' placeholder='Create Password' ref={passwordRef} />
                    </div>
                    <div className='input__wrapper'>
                         <label className='flabel'>Confirm Password</label>
                         <input type="password" className='finput' placeholder='Confirm Password' ref={confirmPasswordRef} />
                    </div>
               </form>
               <Buttons>
                    <button className='invite__button' onClick={() => {createAdmin()}}>Submit</button>
               </Buttons>
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