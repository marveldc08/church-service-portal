import React, { useContext, useMemo, useRef, useState } from 'react'
import SideNav from '../components/SideNav';
import Header from '../components/Header'
import  Styled  from 'styled-components';
import Context from '../components/Contexts';
import DataTable from '../components/DataTable';
import Modal from "../components/Modal";
import USEMODAL from "../components/USEMODAL";
import { FaRegEye } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { useNavigate } from 'react-router';
import { BiPlusMedical } from "react-icons/bi";
import './FinancialReport.css';

function FinancialReport() {
    const userContext = useContext(Context);
    const navigate = useNavigate();
    const { isShown, toggle } = USEMODAL();


    const [content, setContent] = useState(<></>);
    const [headerText, setHeaderText] = useState("");
    const serviceTypeRef = useRef<HTMLSelectElement>();
    const serviceDateRef = useRef<HTMLInputElement>();
    const financeTypeRef = useRef<HTMLSelectElement>();
    const cummulativeAmountNairaRef = useRef();
    const cummulativeAmountDollarRef = useRef();
 
 
 
    // State for updating the admin
    const [id, setId] = useState('')
    const [updateFirstName, setUpdateFirstName] = useState('')
    const [updateLastName, setUpdateLastName] = useState('')
    const [updateEmail, setUpdateEmail] = useState('')
    const [updateRole, setUpdateRole] = useState('')
    const [updateChurch, setUpdateChurch] = useState('')
    const [updateGroup, setUpdateGroup] = useState('')
 
    //  Modals Start Here
    function openUpdateModal() {
        setHeaderText("Update Admin")
          setContent(
            <React.Fragment>
              <form>
                <div className="input__wrapper">
                  <label className="flabel">Service Type</label>
                  {/* <input type="text" className='finput' ref={serviceTypeRef} defaultValue={updateFirstName}  onChange = {event => setUpdateFirstName(event.target.value)} /> */}
                  <select
                    className="partnershipReport__input"
                    onChange={(event) => setUpdateFirstName(event.target.value)}
                  >
                    <option value={""}>select church category</option>
                    <option value={"Adult Church"}>Adult Church </option>
                    <option value={"Youth Church "}>Youth Church </option>
                    <option value={"Children Church"}> Children Church </option>
                    <option value={"Teens Church"}>Teens Church </option>
                    <option value={""}> Others </option>
                  </select>
                </div> 
                <div className="input__wrapper">
                  <label className="flabel">Service Date</label>
                  <input
                    type="text"
                    className="finput"
                    ref={serviceDateRef}
                    defaultValue={updateLastName}
                    onChange={(event) => setUpdateLastName(event.target.value)}
                  />
                </div>
                <div className="input__wrapper">
                  <label className="flabel">Finance Type</label>
                  {/* <input
                    type="text"
                    className="finput"
                    ref={financeTypeRef}
                    defaultValue={updateEmail}
                    onChange={(event) => setUpdateEmail(event.target.value)}
                  /> */}
                  <select
                    className="submitAttendance__input"
                    id="selectPartnership"
                    onChange={(event) => setUpdateEmail(event.target.value)}
                    ref={financeTypeRef}
                    defaultValue={updateEmail}
                  >
                    <option value={""}>select partnership type</option>
                    <option value={"Bible Sponsorship"}>Bible Sponsorship</option>
                    <option value={"Loveworld Plus"}>Loveworld Plus</option>
                    <option value={"Loveworld Sat"}>Loveworld Sat</option>
                    <option value={"Loveworld TV Ministry"}>
                      {" "}
                      Loveworld TV Ministry
                    </option>
                    <option value={"Rhapsody"}>Rhapsody</option>
                    <option value={"Loveworld Radio"}>Healing School</option>
                    <option value={"PCDL"}>PCDL</option>
                    <option value={"Loveworld Radio"}>Innercity Mission</option>
                    <option value={"Loveworld Radio"}>
                      Teens Advance Partners
                    </option>
                  </select>
                </div>
                <div className="input__wrapper">
                  <label className="flabel">Cummulative Amount Naira</label>
                  <input
                    type="text"
                    className="finput"
                    ref={cummulativeAmountNairaRef}
                    defaultValue={updateEmail}
                    onChange={(event) => setUpdateEmail(event.target.value)}
                  />
                  {/* <input type="text" className='finput' ref={cummulativeAmountNairaRef} defaultValue={updateRole} onChange = {event => setUpdateRole(event.target.value)} /> */}
                </div>
                <div className="input__wrapper">
                  <label className="flabel">Church</label>
                  <select
                    className="finput"
                    placeholder="Select Role"
                    id="church"
                    defaultValue={updateChurch}
                  >
                    <option className="finput" value="">
                      Select Church
                    </option>
                    {/* {churchesDetails.map(element => (
                        <option  className='finput' value={element.ChurchName}>{element.ChurchName}</option>
                      ))} */}
                  </select>
                </div>
                <div className="input__wrapper">
                  <label className="flabel">Group</label>
                  <input
                    type="text"
                    className="finput"
                    ref={cummulativeAmountDollarRef}
                    defaultValue={updateGroup}
                    onChange={(event) => setUpdateGroup(event.target.value)}
                  />
                </div>
                {/* <div className='input__wrapper'>
                <label className='flabel'>Status</label>
                <input type="text" className='finput' />
              </div> */}
              </form>
    
              <Buttons>
                <button
                  className="invite__button"
               
                >
                  Submit
                </button>
                <button className="invite__button" onClick={toggle}>
                  Close
                </button>
              </Buttons>
            </React.Fragment>
          );
      }
      
      function openViewModal() {
        setHeaderText("Admin Details")
        setContent(
          <React.Fragment>
            <div className='viewdetails__wrapper'>
                <p className='viewlabel'>First Name</p>
                <p className='viewinput'>{updateFirstName}</p>
            </div>
            <div className='viewdetails__wrapper'>
                <p className='viewlabel'>Last Name</p>
                <p className='viewinput'>{updateLastName}</p>
            </div>
            <div className='viewdetails__wrapper'>
                <p className='viewlabel'>Email</p>
                <p className='viewinput'>{updateEmail}</p>
            </div>
            <div className='viewdetails__wrapper'>
                <p className='viewlabel'>Role</p>
                <p className='viewinput'>{updateRole}</p>
            </div>
            <div className='viewdetails__wrapper'>
                <p className='viewlabel'>Church</p>
                <p className='viewinput'>{updateChurch}</p>
            </div>
            <div className='viewdetails__wrapper'>
                <p className='viewlabel'>Group</p>
                <p className='viewinput'>{updateGroup}</p>
            </div>
            {/* <div className='viewdetails__wrapper'>
                <p className='viewlabel'>Status</p>
                <p className='viewinput'>Emeka chinye</p>
            </div> */}
        
          
          
          
        </React.Fragment>
        )
    }
  
    


    document.querySelectorAll(".table__update__button")!.forEach((element) => {
        element.addEventListener("click", handleUpdateAdmin);
      });
    
      document.querySelectorAll(".table__view__button")!.forEach((element) => {
        element.addEventListener("click", handleViewAdmin);
      });
      function handleUpdateAdmin(this: any) {
        let tableRow = this.parentNode.parentNode;
        setId(tableRow.cells[0].innerHTML);
        setUpdateFirstName(tableRow.cells[1].innerHTML);
        setUpdateLastName(tableRow.cells[2].innerHTML);
        setUpdateEmail(tableRow.cells[3].innerHTML);
        setUpdateRole(tableRow.cells[4].innerHTML);
        setUpdateChurch(tableRow.cells[5].innerHTML);
        setUpdateGroup(tableRow.cells[6].innerHTML);
      }
    
      function handleViewAdmin(this: any) {
        let tableRow = this.parentNode.parentNode;
        setId(tableRow.cells[0].innerHTML);
        setUpdateFirstName(tableRow.cells[1].innerHTML);
        setUpdateLastName(tableRow.cells[2].innerHTML);
        setUpdateEmail(tableRow.cells[3].innerHTML);
        setUpdateRole(tableRow.cells[4].innerHTML);
        setUpdateChurch(tableRow.cells[5].innerHTML);
        setUpdateGroup(tableRow.cells[6].innerHTML);
      }

      function clearForm() {
        serviceTypeRef.current!.value = "";
        serviceDateRef.current!.value = "";
        financeTypeRef.current!.value = "";
        // cummulativeAmountNairaRef.current!.value = "";
        // cummulativeAmountDollarRef.current!.value = "";
      }



 

    const headers = ['ID','Service Type', 'Service Date','Finance Type', `Cummulative Amount (naira)`, `Cummulative Amount (dollar)`]
  const FinancialArray = userContext.financeTableData.map(({id, serviceType, serviceDate, financeType, cummulativeAmountNaira, cummulativeAmountDollar}) => {
      return {id, serviceType, serviceDate, financeType, cummulativeAmountNaira, cummulativeAmountDollar}
  })

  const actions = <React.Fragment >
                      <button className='table__button table__update__button' onClick={() => { toggle(); openUpdateModal();}}>
                        <span><FiRefreshCw className='table-button-icon' /></span> Update
                      </button>
                      {/* <button className='table__button table__view__button' onClick={() => { toggle(); openViewModal();}}>
                        <span><FaRegEye className='table-button-icon' /></span> View
                      </button> */}
                  </React.Fragment>

//Impliment the table
  return (
    <Container>
        <SideNav />
      <Contain show={userContext.isOpened}>
            <Header />
            <Content>
                <Actions>
                    <button className='report__button' onClick={() => {navigate("/submit-financial-report")}}>
                        {" "} <span ><BiPlusMedical /></span>{" "}Submit Report
                    </button>
                </Actions>
                <DataTable data={FinancialArray} headers = {headers}  tableTitle = 'Finanacial Report'/>
                <Modal
            isShown={isShown}
            hide={toggle}
            modalContent={content}
            headerText={headerText}
          />  
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
const Buttons = Styled.div`
   display: flex;
   justify-content: flex-end;
   padding: 10px 50px;
`;