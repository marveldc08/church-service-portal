import React, { useContext, useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Styled from "styled-components";
import "./PartnershipReport.css";
import Context from "../components/Contexts";
import DataTable from "../components/DataTable";
import Modal from "../components/Modal";
import USEMODAL from "../components/USEMODAL";
import { useNavigate } from "react-router";
import { BiPlusMedical } from "react-icons/bi";
import { FaRegEye } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

function ServiceReports() {

   const userContext = useContext(Context);
   const navigate = useNavigate();
   const { isShown, toggle } = USEMODAL();
   const [modifiedServiceDuration , setModifiedServiceDuration] = useState('')

   function openUpdateModal() {
     // setHeaderText("Update Admin")
     //   setContent(
     //     <React.Fragment>
     //     <form>
     //       <div className='input__wrapper'>
     //         <label className='flabel'>First Name</label>
     //         <input type="text" className='finput' ref={firstnameRef} defaultValue={updateFirstName}  onChange = {event => setUpdateFirstName(event.target.value)} />
     //       </div>
     //       <div className='input__wrapper'>
     //         <label className='flabel'>Last Name</label>
     //         <input type="text" className='finput' ref = {lastnameRef} defaultValue={updateLastName} onChange = {event => setUpdateLastName(event.target.value)} />
     //       </div>
     //       <div className='input__wrapper'>
     //         <label className='flabel'>Email</label>
     //         <input type="email" className='finput' ref = {emailRef} defaultValue={updateEmail} onChange = {event => setUpdateEmail(event.target.value)} />
     //       </div>
     //       <div className='input__wrapper'>
     //         <label className='flabel'>Role</label>
     //         <select className='finput' placeholder='Select Role' id='role' defaultValue={updateRole}>
     //               <option  className='finput' value="">Select Role</option>
     //               <option  className='finput' value="Zonal Pastor">Zonal Pastor</option>
     //               <option  className='finput' value="Church Pastor">Church Pastor</option>
     //               <option  className='finput' value="Top Admin">Top Admin</option>
     //               <option  className='finput' value="Church Admin">Church Admin</option>
     //         </select>
     //       </div>
     //       <div className='input__wrapper'>
     //         <label className='flabel'>Church</label>
     //         <select className='finput' placeholder='Select Role' id='church' defaultValue={updateChurch}>
     //               <option  className='finput' value="">Select Church</option>
     //               {churchesDetails.map(element => (
     //                 <option  className='finput' value={element.ChurchName}>{element.ChurchName}</option>
     //               ))}
     //         </select>
             
     //       </div>
     //       <div className='input__wrapper'>
     //         <label className='flabel'>Group</label>
     //         <input type="text" className='finput' ref={groupchurchRef} id = 'groupChurch' defaultValue={updateGroup} onChange = {event => setUpdateGroup(event.target.value)} />
     //       </div>
           {/* <div className='input__wrapper'>
             <label className='flabel'>Status</label>
             <input type="text" className='finput' />
           </div> */}
           
     //     </form>
 
     //     <Buttons>
     //           <button className='invite__button' onClick={() => {updateAdmin();}}>Submit</button>   
     //           <button className='invite__button' onClick={toggle}>Close</button>                
     //       </Buttons>
     //   </React.Fragment>
     //   )
   }
 
   function openViewModal() {
     //   setHeaderText("Admin Details")
     //   setContent(
     //     <React.Fragment>
     //       <div className='viewdetails__wrapper'>
     //           <p className='viewlabel'>First Name</p>
     //           <p className='viewinput'>{updateFirstName}</p>
     //       </div>
     //       <div className='viewdetails__wrapper'>
     //           <p className='viewlabel'>Last Name</p>
     //           <p className='viewinput'>{updateLastName}</p>
     //       </div>
     //       <div className='viewdetails__wrapper'>
     //           <p className='viewlabel'>Email</p>
     //           <p className='viewinput'>{updateEmail}</p>
     //       </div>
     //       <div className='viewdetails__wrapper'>
     //           <p className='viewlabel'>Role</p>
     //           <p className='viewinput'>{updateRole}</p>
     //       </div>
     //       <div className='viewdetails__wrapper'>
     //           <p className='viewlabel'>Church</p>
     //           <p className='viewinput'>{updateChurch}</p>
     //       </div>
     //       <div className='viewdetails__wrapper'>
     //           <p className='viewlabel'>Group</p>
     //           <p className='viewinput'>{updateGroup}</p>
     //       </div>
           {/* <div className='viewdetails__wrapper'>
               <p className='viewlabel'>Status</p>
               <p className='viewinput'>Emeka chinye</p>
           </div> */}
       
         
         
         
     // //   </React.Fragment>
     //   )
   }

  const headers = ['ID', 'Service Type', 'Service Date', 'Service Duration', 'Sessions', 'Actions']
  const attendanceArray = userContext.serviceReportTableData.map(({id, serviceType, serviceDate, serviceDuration, sessionsNumber}) => {
    // setModifiedServiceDuration(serviceDuration + " Hours")
    return {id,  serviceType, serviceDate, serviceDuration, sessionsNumber}
     
  })
  const actions = <React.Fragment >
                    <button className='table__button table__update__button' onClick={() => { toggle(); openUpdateModal();}}>
                    <span><FiRefreshCw className='table-button-icon' /></span> Update
                    </button>
                    <button className='table__button table__view__button' onClick={() => { toggle(); openViewModal();}}>
                         <span><FaRegEye className='table-button-icon' /></span> View
                    </button>
                </React.Fragment>

  return (
    <Container>
      <SideNav />
      <Contain show={userContext.isOpened}>
        <Header />
        <Content>
          <Actions>
            <button className="invite__button" onClick={() => { navigate("/submit-service-report");}}>
              {" "}
              <span>
                <BiPlusMedical />
              </span>{" "}
              Submit Report
            </button>
          </Actions>
          <DataTable data={attendanceArray} headers={headers} actions={actions}  tableTitle="Services"/>
          {/* <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={headerText} /> */}
        </Content>
      </Contain>
    </Container>
  );
}

export default ServiceReports;

interface Iprops {
  show: boolean;
}

const Container = Styled.div` 
position: relative;
`;
const Contain = Styled.div<Iprops>`
    position: relative;
    margin-left: ${(props) => (props.show ? "300px" : "78px")};
    height: 100vh;
    overflow: auto;
    background-color: #f1f2f3;
    transition: all 0.35s ease; 
    &::-webkit-scrollbar{
          display: none;
    }
`;

const Content = Styled.div`
  background: #f1f2f3;
  height: calc(100vh - 70px);
  padding: 1rem;
`;
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
`;
const Buttons = Styled.div`
   display: flex;
   justify-content: flex-end;
   padding: 10px 50px;
`;
