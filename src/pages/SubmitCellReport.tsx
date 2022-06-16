import React , {useState, useEffect, useContext, useRef}from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Context from "../components/Contexts";
import { AiOutlineSend } from "react-icons/ai";
import './CellReport.css'
import { FaRegEye } from 'react-icons/fa';
import { useNavigate } from 'react-router';
 
function SubmitCellReport() {
     const userContext = useContext(Context);
     const navigate = useNavigate();

     let churchCategory = document.getElementById('selectChurch') as HTMLSelectElement;
     let cellName = document.getElementById('selectCellName') as HTMLSelectElement;
     const meetingDateRef = useRef<HTMLInputElement>();
     let meetingType = document.getElementById('selectMeetingType') as HTMLSelectElement;
     const startTimeRef = useRef<HTMLInputElement>();
     const endTimeRef = useRef<HTMLInputElement>();
     const numberOfMaleRef = useRef<HTMLInputElement>();
     const numberOfFemaleRef = useRef<HTMLInputElement>();
     const numberOfFirstTimerRef = useRef<HTMLInputElement>();
     const numberOfNewConvertsRef = useRef<HTMLInputElement>();
     const numberOfSpiritFilledRef = useRef<HTMLInputElement>();
     const offeringRef = useRef<HTMLInputElement>(); 


     // Alert states
      const [alertHeader, setAlertHeader] = useState('');
      const [successAlert, setSuccessAlert] = useState(false);
      const [alertContent, setAlertContent] = useState('');
      const [alertClass, setAlertClass] = useState('');

     const handleSubmtCellReport = (e?: {preventDefault: () => void;}) => {
       
       e?.preventDefault();

       const cellReport = {
        cellName: cellName.value,
        meetingDate: meetingDateRef.current?.value,
        meetingType: meetingType.value,
        startTime: startTimeRef.current?.value,
        endTime: endTimeRef.current?.value,
        numberOfMale: numberOfMaleRef.current?.value,
        numberOfFemale: numberOfFemaleRef.current?.value,
        numberOfFirstTimer: numberOfFirstTimerRef.current?.value,
        numberOfNewConverts: numberOfNewConvertsRef.current?.value,
        numberOfSpiritFilled: numberOfSpiritFilledRef.current?.value,
        Offering: offeringRef.current?.value,
       }

       fetch('https://celz4-api.herokuapp.com/v2/cell-report/submit',{
         method: "POST",
         body: JSON.stringify(cellReport),
         headers: {"content-Type" : "application/json"}
       }).then(response => {return response.json()}).then((data) => {
        setSuccessAlert(true); setAlertClass('alert alert-success alert-dismissible display'); setAlertContent(`Cell report  has been successfully submited.`); setAlertHeader('Cell Report Successfully submited!')
        
        churchCategory.value = "";
        cellName.value = "";
        meetingDateRef.current!.value = "";
        meetingType.value = "";
        startTimeRef.current!.value= "";
        endTimeRef.current!.value = "";
        numberOfMaleRef.current!.value= "";
        numberOfFemaleRef.current!.value= "";
        numberOfFirstTimerRef.current!.value= "";
        numberOfNewConvertsRef.current!.value= "";
        numberOfSpiritFilledRef.current!.value= "";
        offeringRef.current!.value= "";
       }).catch(error =>{
        setSuccessAlert(true); setAlertClass('alert alert-danger alert-dismissible display'); setAlertContent(`There was an error while trying to submit your report. Kindly check your network connection and try again later`); setAlertHeader('Error!')
        console.log(error);
      })
     }

  return (
    <Container>
      <SideNav />
      <div className= {successAlert? alertClass : "hide"}>
            <button type="button" className="close" data-dismiss="alert" onClick= {() => {setSuccessAlert(false);}}>&times;</button>
              <h4><b>{alertHeader}</b></h4>
              <p>{alertContent}</p>
      </div> 
      <Contain show={userContext.isOpened}>
        <Header />
        <Content>
        <ButtonWrap>
            <button
              className="cellReport__button "
              onClick={() => {
                navigate("/cell-reports");
              }}
            >
              <span>
                <FaRegEye />
              </span>{" "}
              View Reports
            </button>{" "}
          </ButtonWrap>
          <FormWrap>
            <h2>
              Cell Meeting Report{" "}
              <span>
               <img src='/images/apply.png'  alt='submit form'/>
              </span>{" "}
            </h2>
            <form>
              <div className="input-wrapper">
                <label className="cellReport__label">Church Category</label>
                <select className="cellReport__input" id='selectChurch'>
                  <option className='cellReport__option' value={""}>select church category</option>
                  <option className='cellReport__option' value={"Adult Church"}>Adult Church </option>
                  <option className='cellReport__option' value={"Youth Church "}>Youth Church </option>
                  <option className='cellReport__option' value={"Children Church"}> Children Church </option>
                  <option className='cellReport__option' value={"Teens Church"}>Teens Church </option>
                  <option className='cellReport__option' value={""}> Others </option>
                </select>
              </div>
              <div className="input-wrapper">
                <label className="cellReport__label">Cell Name</label>
                <select className="cellReport__input" id='selectCellName' >
                  <option className='cellReport__option' value="">select cell</option>
                  <option className='cellReport__option' value="Agape Cel">Agape Cell </option>
                  <option className='cellReport__option' value="Heros Cell">Heros Cell </option>
                  <option className='cellReport__option' value="Love Cell">Love Cell</option>
                  <option className='cellReport__option' value="Women PCF">Women PCF</option>
                  <option className='cellReport__option' value="Men PCF">Men PCF</option>
                  <option className='cellReport__option' value="Heaven's Best Cell 3">Heaven's Best Cell 3</option>
                  <option className='cellReport__option' value="Treasure Cell">Treasure Cell</option>
                  <option className='cellReport__option' value="Perfection Cell 2">Perfection Cell 2</option>
                  <option className='cellReport__option' value="Truth Cell 1">Truth Cell 1</option>
                </select>
              </div>
              <div className="input-wrapper">
                <label className="cellReport__label">Meeting Date</label>
                <input type="date" className="cellReport__input" ref={meetingDateRef} />
              </div>
              <div className="input-wrapper">
                <label className="cellReport__label">Meeting Type</label>
                <select className="cellReport__input" id='selectMeetingType' >
                  <option className='cellReport__option' value={""}>select Meeting Type</option>
                  <option className='cellReport__option' value={"Prayer and Planning (Week 1)"}>Prayer and Planning (Week 1)</option>
                  <option className='cellReport__option' value={"Bible Study (Week 2)"}>Bible Study (Week 2)</option>
                  <option className='cellReport__option' value={"Bible Study (Week 3)"}>Bible Study (Week 3)</option>
                  <option className='cellReport__option' value={"Outreach (Week 4)"}>Outreach (Week 4)</option>
                </select>
              </div>
              <div className="input-wrapper">
                <label className="cellReport__label">Start Time</label>
                <input type="time" className="cellReport__input" placeholder="no_ of male" min="0" ref={startTimeRef} />
              </div>
              <div className="input-wrapper">
                <label className="cellReport__label">End Time</label>
                <input type="time" className="cellReport__input" placeholder="no_ of female" min="0" ref={endTimeRef} />
              </div>
              <div className="input-wrapper">
                <label className="cellReport__label">Offering</label>
                <InputIcon>
                    {/* <img src='/images/naira-icon.png' /> */}
                    <input type="number" className="cellReport__input" placeholder={"  " +"enter amount"} min="0"ref={offeringRef}/>
                </InputIcon>
              
              </div>
              <SubHeading>
                  <hr style={{"width": "20%"}} /><h6>Attendance</h6><hr style={{"width": "40%"}}/>
              </SubHeading>
              <div className="input-wrapper">
                <label className="cellReport__label">Male</label>
               <input type="number" className="cellReport__input" placeholder="no_ of first timer" min="0" ref={numberOfMaleRef}/>
              </div>
              <div className="input-wrapper">
                <label className="cellReport__label">Female</label>
               <input type="number" className="cellReport__input" placeholder="no_ of first timer" min="0" ref={numberOfFemaleRef}/>
              </div>
              <div className="input-wrapper">
                <label className="cellReport__label">First Timer</label>
               <input type="number" className="cellReport__input" placeholder="no_ of first timer" min="0" ref={numberOfFirstTimerRef}/>
              </div>
              <div className="input-wrapper">
                <label className="cellReport__label">New Convert</label>
                <input type="number" className="cellReport__input" placeholder="no_ of new convert" min="0" ref={numberOfNewConvertsRef}/>
              </div>
              <div className="input-wrapper">
                <label className="cellReport__label">HolyGhost Filled</label>
              <input type="number" className="cellReport__input" placeholder="no_ of spirit filled" min="0"ref={numberOfSpiritFilledRef}/>
              </div>
              
            </form>
              <PreButtonWrap>
                <ButtonWrap>
                  <button className="cellReport__button" onClick={() => {handleSubmtCellReport();}}>
                    <span> <AiOutlineSend /></span>{" "}Submit
                  </button>
                </ButtonWrap>
              </PreButtonWrap>
          </FormWrap>
        </Content>
      </Contain>
    </Container>
  );
}

export default SubmitCellReport

interface Iprops {
  show: boolean;
}

const Container = styled.div`
position: relative;
`
const Contain = styled.div<Iprops>`
  position: relative;
  margin-left: ${(props) => (props.show ? "300px" : "78px")};
  height: 100vh;
  overflow: auto;
  background-color: #f1f2f3;
  transition: all 0.35s ease;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Content = styled.div`
  background: #f1f2f3;
  height: calc(100vh - 70px);
  padding: 1rem;

  h3 {
    margin-bottom: 1em;
    color: rgba(24, 35, 89, 0.85) !important;
  }
`;
const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #ffffff;
  margin-top: 2em;
  margin-bottom: 3em;
  padding: 3em  2px;

  h2{
      margin-bottom: 1em;
      span{
          img{
              width: 40px;
              height: 40px;
          }
      }
  }
`
const PreButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`
const ButtonWrap = styled.div` 
    display: flex;
        justify-content: flex-end;
        padding: 10px;
        font-size: 15px;
        font-weight: 400;

        button{
            span{
                padding: 0px 8px;
            }
        }
`
const SubHeading = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const InputIcon = styled.div`

  img {
    position: absolute;
    top: 20px;
    left: 27%;
    //bottom: 10px;
  }
`;