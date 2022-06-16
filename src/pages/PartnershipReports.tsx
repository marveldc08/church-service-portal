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

function PartnershipReports() {

   const userContext = useContext(Context);
   const navigate = useNavigate();
   const { isShown, toggle } = USEMODAL();


    const [content, setContent] = useState(<></>);
    const [headerText, setHeaderText] = useState("");
    const serviceTypeRef = useRef<HTMLSelectElement>();
    const serviceDateRef = useRef<HTMLInputElement>();
    const partnershipTypeRef = useRef<HTMLSelectElement>();
    const cummulativeAmountNairaRef = useRef();
    const cummulativeAmountDollarRef = useRef();
    

    // State for updating the admin
    const [id, setId] = useState("");
    const [updateFirstName, setUpdateFirstName] = useState("");
    const [updateLastName, setUpdateLastName] = useState("");
    const [updateEmail, setUpdateEmail] = useState("");
    const [updateRole, setUpdateRole] = useState("");
    const [updateChurch, setUpdateChurch] = useState("");
    const [updateGroup, setUpdateGroup] = useState("");



    // Alert states
    const [alertHeader, setAlertHeader] = useState('');
    const [successAlert, setSuccessAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');
    const [alertClass, setAlertClass] = useState('');


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
              <label className="flabel">Partnership Type</label>
              {/* <input
                type="text"
                className="finput"
                ref={partnershipTypeRef}
                defaultValue={updateEmail}
                onChange={(event) => setUpdateEmail(event.target.value)}
              /> */}
              <select
                className="submitAttendance__input"
                id="selectPartnership"
                onChange={(event) => setUpdateEmail(event.target.value)}
                ref={partnershipTypeRef}
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
              onClick={() => {
                updateAdmin();
              }}
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

  
  function updateAdmin(e?: { preventDefault: () => void }) {
    let role = document.getElementById("role") as HTMLSelectElement;
    let church = document.getElementById("church") as HTMLSelectElement;
    const admin = {
      serviceType: serviceTypeRef.current?.value,
      serviceDate: serviceDateRef.current?.value,
      partnershipType: partnershipTypeRef.current?.value,
      // cummulativeAmountNaira: cummulativeAmountNairaRef.current?.value,
      // cummulativeAmountDollar: cummulativeAmountDollarRef.current?.value,
    };
    e?.preventDefault();
    fetch(`https://celz4-api.herokuapp.com/v2/admin/update/${id}`, {
      method: "PUT",
      body: JSON.stringify(admin),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        alert("admin updated successfully");
        console.log(data);
      });
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
    partnershipTypeRef.current!.value = "";
    // cummulativeAmountNairaRef.current!.value = "";
    // cummulativeAmountDollarRef.current!.value = "";
  }


    const headers = ['ID','Service Type', 'Service Date','Partnership Type', `Cummulative Amount (naira)`, `Cummulative Amount (dollar)`]
  const partnershipArray = userContext.partnershipTableData.map(({id, serviceType, serviceDate, partnershipType, cummulativeAmountNaira, cummulativeAmountDollar}) => {
      return {id, serviceType, serviceDate, partnershipType, cummulativeAmountNaira, cummulativeAmountDollar}
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
            <button className="invite__button" onClick={() => { navigate("/submit-partnership-report"); }}>
              {" "}
              <span>
                <BiPlusMedical />
              </span>{" "}
              Submit Report
            </button>
          </Actions>
          <DataTable
            data={partnershipArray}
            headers={headers}
            // actions={actions}
            tableTitle="Partnerships"
          />
          
          <Modal
            isShown={isShown}
            hide={toggle}
            modalContent={content}
            headerText={headerText}
          />
        </Content>
      </Contain>
    </Container>
  );
}

export default PartnershipReports;

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
