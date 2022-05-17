import React from 'react'
import styled from 'styled-components';
import './CreateAdmin.css';
function CreateAdmin() {
document.addEventListener('DOMContentLoaded', function(){
     let queryString = window.location.search;
     let params = new URLSearchParams(queryString);
     let firstname = params.get('firstname')
     console.log(`${params}`)
     console.log(firstname)
})
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
                         <input type="text" className='finput' readOnly />
                    </div>
                    <div className='input__wrapper'>
                         <label className='flabel'>Last Name</label>
                         <input type="text" className='finput' readOnly />
                    </div>
                    <div className='input__wrapper'>
                         <label className='flabel'>Email</label>
                         <input type="text" className='finput' readOnly />
                    </div>
                    <div className='input__wrapper'>
                         <label className='flabel'>Role</label>
                         <input type="text" className='finput' readOnly />
                    </div>
                    <div className='input__wrapper'>
                         <label className='flabel'>Church</label>
                         <input type="text" className='finput' readOnly />
                    </div>
                    <div className='input__wrapper'>
                         <label className='flabel'>Group</label>
                         <input type="text" className='finput' readOnly />
                    </div>
                    <div className='input__wrapper'>
                         <label className='flabel'>Password</label>
                         <input type="email" className='finput' placeholder='Create Email' />
                    </div>
                    <div className='input__wrapper'>
                         <label className='flabel'>Confirm Password</label>
                         <input type="email" className='finput' placeholder='Confirm Email' />
                    </div>
                    <Buttons>
                         <button className='invite__button'>Submit</button>
                    </Buttons>
               </form>
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