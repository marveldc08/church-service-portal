import React , {useState, useEffect, useContext, useRef}from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Context from "../components/Contexts";
import { AiOutlineSend } from "react-icons/ai";
import './AttendanceReport.css'
import { FaRegEye } from 'react-icons/fa';
import { useNavigate} from 'react-router'

function SubmitAttendanceReport() {
     const userContext = useContext(Context);
     const navigate = useNavigate();

      // Alert states
      const [alertHeader, setAlertHeader] = useState('');
      const [successAlert, setSuccessAlert] = useState(false);
      const [alertContent, setAlertContent] = useState('');
      const [alertClass, setAlertClass] = useState('');

      let churchCategory = document.getElementById('selectChurch') as HTMLSelectElement;
      let serviceType = document.getElementById('selectService') as HTMLSelectElement;
     const serviceDateRef = useRef<HTMLInputElement>();
     const numberOfMaleRef = useRef<HTMLInputElement>();
     const numberOfFemaleRef = useRef<HTMLInputElement>();
     const numberOfFirstTimerRef = useRef<HTMLInputElement>();
     const numberOfNewConvertRef = useRef<HTMLInputElement>();
     const numberOfSpiritFilledRef = useRef<HTMLInputElement>();

     const handleSubmitAttendanceReport = (e?: {preventDefault: () => void;}) => {
      const attendance = {
        serviceDate: serviceDateRef.current?.value,
        numberOfMale: numberOfMaleRef.current?.value,
        numberOfFemale: numberOfFemaleRef.current?.value,
        numberOfFirstTimer: numberOfFirstTimerRef.current?.value,
        numberOfNewConvert: numberOfNewConvertRef.current?.value,
        numberOfSpiritFilled: numberOfSpiritFilledRef.current?.value
      }

      fetch('https://celz4-api.herokuapp.com/v2/attendance/submit',{
        method: "POST",
        body: JSON.stringify(attendance),
        headers: {"content-Type" : "application/json"}
      }).then(response => {return response.json()}).then((data) => { 
        setSuccessAlert(true); setAlertClass('alert alert-success alert-dismissible display'); setAlertContent(`Attendance report has been successfully submited.`); setAlertHeader('Atendance Report Successfully submited!')
        churchCategory.value = "";
        serviceType.value ="";
        serviceDateRef.current!.value = "";
         numberOfMaleRef.current!.value = "";
         numberOfFemaleRef.current!.value ="";
        numberOfFirstTimerRef.current!.value ="";
         numberOfNewConvertRef.current!.value =""
        numberOfSpiritFilledRef.current!.value =""
      }).catch(error =>{
        setSuccessAlert(true); setAlertClass('alert alert-danger alert-dismissible display'); setAlertContent(`There was an error while trying to submit your report. Kindly check your network connection and try again later`); setAlertHeader('Error!')
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
              className="submitAttendance__button "
              onClick={() => {
                navigate("/attendance-reports");
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
              Attendance Report{" "}
              <span>
               <img src='/images/apply.png'  alt='submit form'/>
              </span>{" "}
            </h2>
            <form>
              <div className="input-wrapper">
                <label className="submitAttendance__label">Church Category</label>
                <select className="submitAttendance__input" id='selectChurch'>
                  <option className='submitAttendance__option' value={""}>select church category</option>
                  <option className='submitAttendance__option' value={"Adult Church"}>Adult Church </option>
                  <option className='submitAttendance__option' value={"Youth Church "}>Youth Church </option>
                  <option className='submitAttendance__option' value={"Children Church"}> Children Church </option>
                  <option className='submitAttendance__option' value={"Teens Church"}>Teens Church </option>
                  <option className='submitAttendance__option' value={""}> Others </option>
                </select>
              </div>
              <div className="input-wrapper">
                <label className="submitAttendance__label">Service Type</label>
                <select className="submitAttendance__input" id='selectService'>
                  <option className='submitAttendance__option' value={""}>select service type</option>
                  <option className='submitAttendance__option' value={"Sunday Service"}>Sunday Service </option>
                  <option className='submitAttendance__option' value={"Mid-Week Service "}>Mid-Week Service </option>
                  <option className='submitAttendance__option' value={"All-Night Service "}>
                    {" "}
                    All-Night Service{" "}
                  </option>
                  <option className='submitAttendance__option' value={""}>Others</option>
                </select>
              </div>
              <div className="input-wrapper">
                <label className="submitAttendance__label">Service Date</label>
                <input type="date" className="submitAttendance__input" ref={serviceDateRef} />
              </div>
              <div className="input-wrapper">
                <label className="submitAttendance__label">Male</label>
                <input type="number" className="submitAttendance__input" placeholder="no_ of male" min="0" ref={numberOfMaleRef} />
              </div>
              <div className="input-wrapper">
                <label className="submitAttendance__label">Female</label>
                <input type="number" className="submitAttendance__input" placeholder="no_ of female" min="0" ref={numberOfFemaleRef} />
              </div>
              <div className="input-wrapper">
                <label className="submitAttendance__label">First Timer</label>
               <input type="number" className="submitAttendance__input" placeholder="no_ of first timer" min="0" ref={numberOfFirstTimerRef}/>
              </div>
              <div className="input-wrapper">
                <label className="submitAttendance__label">New Convert</label>
                <input type="number" className="submitAttendance__input" placeholder="no_ of new convert" min="0" ref={numberOfNewConvertRef} />
              </div>
              <div className="input-wrapper">
                <label className="submitAttendance__label">Spirit Filled</label>
              <input type="number" className="submitAttendance__input" placeholder="no_ of spirit filled" min="0" ref={numberOfSpiritFilledRef} />
              </div>
            </form>
            <PreButtonWrap>
              <ButtonWrap>
                <button className="submitAttendance__button" onClick={() => {handleSubmitAttendanceReport();}}>
                  <span>
                    <AiOutlineSend />
                  </span>{" "}
                  Submit
                </button>
              </ButtonWrap>
            </PreButtonWrap>
          </FormWrap>
        </Content>
      </Contain>
    </Container>
  );
}

export default SubmitAttendanceReport

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
  margin: 2em 0;
  padding: 3em  2px;

  h2{
      margin-bottom: 1em;
      margin-top: 1em;
      span{
          img{
              width: 40px;
              height: 40px;
             
          }
      }
  }
`;
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