import React, { useContext, useMemo, useRef, useState } from 'react'
import SideNav from '../components/SideNav';
import Header from '../components/Header'
import  Styled  from 'styled-components';
import Context from '../components/Contexts';
import DataTable from '../components/DataTable'

import { useNavigate } from 'react-router';
import { BiPlusMedical } from "react-icons/bi";
import './FinancialReport.css';

function FinancialReport() {
    const userContext = useContext(Context);
    const navigate = useNavigate();


    //Impliment the table
    const firstnameRef = useRef<HTMLInputElement>();
    const lastnameRef = useRef<HTMLInputElement >();
    const emailRef = useRef<HTMLInputElement >();
    const roleRef = useRef<HTMLInputElement >();
    const churchRef = useRef<HTMLInputElement>();
    const groupchurchRef = useRef<HTMLInputElement>();
 
 
 
    // State for updating the admin
    // const [id, setId] = useState('')
    // const [updateFirstName, setUpdateFirstName] = useState('')
    // const [updateLastName, setUpdateLastName] = useState('')
    // const [updateEmail, setUpdateEmail] = useState('')
    // const [updateRole, setUpdateRole] = useState('')
    // const [updateChurch, setUpdateChurch] = useState('')
    // const [updateGroup, setUpdateGroup] = useState('')
 
 
    function sendEmail(e?: { preventDefault: () => void; }) {
     e?.preventDefault();
         let params = new URLSearchParams()
         params.set('firstname', `${firstnameRef.current?.value}`)
         params.set('lastname', `${lastnameRef.current?.value}`)
         params.set('email', `${emailRef.current?.value}`)
         params.set('role', `${roleRef.current?.value}`)
         params.set('church', `${churchRef.current?.value}`)
         params.set('groupchurch', `${groupchurchRef.current?.value}`);
         console.log(params.toString())
         Email.send({
              SecureToken : "f2cce189-d9e8-4bc6-8604-bb86a87a4f88",
              To : `${emailRef.current?.value}`,
              From : "michaelchinye2018@gmail.com",
              Subject : "Admin Invitation",
              Body : `<!DOCTYPE html>
              <html lang="en">
                 <head>
                      <meta charset="UTF-8">
                      <meta http-equiv="X-UA-Compatible" content="IE=edge">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Document</title>
              
                      <style>
                           .imgDiv{
                             height: 300px;
                           }
                           .content{
                             padding: 50px;
                           }
                           h2{
                             font-size: 18px;
                           }
                           @media only screen and (min-width: 480px) and (max-width: 767px){
                                  h1{
                                       font-size: 22px;
                                  }
                                  h2{
                                       font-size: 20px;
                                  }
                                  h3{
                                       font-size: 19px;
                                  }
                                  p{
                                       font-size: 16px;
                                  }
                                  .content{
                                       padding: 20px;
                                  }
                                  .imgDiv{
                                       height: 180px;
                                  }
                           }
                           @media (max-width: 767px){
                                  h1{
                                       font-size: 22px;
                                  }
                                  h2{
                                       font-size: 20px;
                                  }
                                  h3{
                                       font-size: 19px;
                                  }
                                  p{
                                       font-size: 16px;
                                  }
                                  .content{
                                       padding: 20px;
                                  }
                                  .imgDiv{
                                       height: 180px;
                                  }
                           }
                      </style>
                 </head>
                 <body>
                      <div class="emailContainer" style = "background-color: #f9f9f9; margin: 0px auto;">
                           <div>
                               <div style="width: 100%;" class="imgDiv">
                                    <a  href="index.html"><img style="width: 100%; height: 100%; object-fit: cover;" src="https://res.cloudinary.com/mike-ik/image/upload/v1652902981/Celz4-church-portal/toy-bricks-table-with-word-welcome_mdfguw.jpg"
                                    alt=""></a>
                                </div>
                           </div>
                           <div  class="content">
                                  <h1 style="text-align: center; color:#003366;">Christ Embassy Lagos Zone 4</h1>
                                  <h2 class="title" style="color:#003366;">Admin Invitation!</h2>
                                  <h3><span id="applicantName" style="color: #003366; ">Hi <b><i>${firstnameRef.current?.value} ${lastnameRef.current?.value}</i></b></span></h3>
                                  <p style="color: lignt-grey; line-height: 20px;">
                                      Congratulations, you have been invited to become a ${roleRef.current?.value} for ${churchRef.current?.value} Church
                                       <br/><br/>
                                       Kindly follow the link below to complete your registration and begin your administrative work
                                  </p>
                                  <ul class="menu">
                                       <li style="list-style-type: none;">Full Name: <b style="color:#003366; padding: 0px 5px;">${firstnameRef.current?.value} ${lastnameRef.current?.value}</b></li>
                                       <li style="list-style-type: none;">Role: <b style="color:#003366; padding: 0px 5px;">${roleRef.current?.value}</b></li>
                                  </ul>
                                  <p class="sign-up">Click <span><a href="http://localhost:3000/create-account?${params.toString()}" id="signUpLink" >here</a></span> to proceed to Create your Account</p>
                           </div>
                      </div>
                 </body>
              </html>`
         }).then(
              message => alert(message)
         );
    }
 

    const headers = ['ID','First Name', 'Last Name', 'Email', 'Role', 'Church', 'Group', 'Actions']
  const adminArray = userContext.adminTableData.map(({id, firstName, lastName, email, role, church, groupChurch}) => {
      return {id, firstName, lastName, email, role, church, groupChurch}
  })

  const actions = <React.Fragment >
      {/* <button className='table__button table__update__button' onClick={() => { toggle(); openUpdateModal();}}>Update</button>
      <button className='table__button table__view__button' onClick={() => { toggle(); openViewModal();}}>View</button> */}
  </React.Fragment>

//Impliment the table
  return (
    <Container>
        <SideNav />
      <Contain show={userContext.isOpened}>
            <Header />
            <Content>
                <Actions>
                    <button className='report__button' onClick={() => {navigate("/submit-financial-report")}}> <span ><BiPlusMedical /></span>Submit Report</button>
                </Actions>
                <DataTable data={adminArray} columns = {headers} actions = {actions} tableTitle = 'Christ Embassy Lagos Zone 4  Admins Database'/>  
            </Content>
      </Contain>
    </Container>
  )
}



export default FinancialReport
interface Iprops{
    show: boolean;
  }
  
  const Container = Styled.div` 
  position: relative;
  `
  const Contain =Styled.div<Iprops >`
      position: relative;
      margin-left: ${props => props.show ? '300px':'78px'};
      height: 100vh;
      overflow: auto;
      background-color: #f1f2f3;
      transition: all 0.35s ease; 
      &::-webkit-scrollbar{
            display: none;
      }
  `
  
  const Content = Styled.div`
    background: #f1f2f3;
    height: calc(100vh - 70px);
    padding: 1rem;
  `
const Actions = Styled.div`
display: flex;
justify-content: flex-end;
/* border: 1px solid red; */
 padding: 10px;
button{
  span{
    padding: 0px 8px;
  }
}
` 
// const Buttons =Styled.div`
// display: flex;
// justify-content: flex-end;
// padding: 10px;
// `