import React, {useContext,  useState, useRef} from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import DataTable from '../components/DataTable';
import { BiPlusMedical } from 'react-icons/bi';
import {FiRefreshCw} from 'react-icons/fi';
import Context from '../components/Contexts';
import { useNavigate } from 'react-router';
import USEMODAL from '../components/USEMODAL';
import styled from 'styled-components';
import Modal from '../components/Modal';
import "./AllServices.css";



function AllServices() {

    const {isShown, toggle } = USEMODAL();
    const navigate = useNavigate();

    const [content, setContent] = useState(<></>);
    const [headerText, setHeaderText] = useState("");
    const userContext  = useContext(Context)

    // State for updating the admin
   const [id, setId] = useState('')
   const [updateServiceType, setUpdateServiceType] = useState('')
   const [updateServiceDate, setUpdateServiceDate] = useState('')
   const [updateStartTime, setUpdateStartTime] = useState('')
   const [updateEndTime, setUpdateEndTime] = useState('')

   const serviceTypeRef = useRef<HTMLInputElement>();
   const serviceDateRef = useRef<HTMLInputElement >();
   const startTimeRef = useRef<HTMLInputElement >();
   const endTimeRef = useRef<HTMLInputElement >();

//    Alerts state
    const [alertHeader, setAlertHeader] = useState('');
    const [successAlert, setSuccessAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');
    const [alertClass, setAlertClass] = useState('');


        function openCreateModal() {
            setHeaderText("Create Service")
                setContent(
                    <React.Fragment>
                        <form>
                            <div className='input-wrapper'>
                                <label className='flabel'>Service Type</label>
                                <input type="text" className="finput" ref={serviceTypeRef} />
                            </div>
                            <div className='input-wrapper'>
                                <label className='flabel'>Service Date</label>
                                <input type="date"  className="finput" ref={serviceDateRef} />
                            </div>
                            <div className='input-wrapper'>
                                <label className='flabel'>Start Time</label>
                                <input type="time" className="finput" ref={startTimeRef} />
                            </div>
                            <div className='input-wrapper'>
                                <label className='flabel'>End Time</label>
                                <input type="time" className="finput" ref={endTimeRef} />
                            </div>
                            
                        </form>

                        <Buttons>
                            <button className='invite__button' onClick={() => {createService();}}>Submit</button>
                            <button className='invite__button' onClick={() => {navigate("")}}>Close</button>
                        </Buttons>
                    </React.Fragment>
                )
        };



        function openUpdateModal() {
            setHeaderText("Update Service")
                setContent(
                    <React.Fragment>
                        <form>
                            <div className='input-wrapper'>
                                <label className='flabel'>Service Type</label>
                                <input type="text" defaultValue={updateServiceType} ref={serviceTypeRef} className="finput" />
                            </div>
                            <div className='input-wrapper'>
                                <label className='flabel'>Service Date</label>
                                <input type="date" defaultValue={updateServiceDate} ref={serviceDateRef} className="finput" placeholder='yyyy-mm-dd' />
                            </div>
                            <div className='input-wrapper'>
                                <label className='flabel'>Start Time</label>
                                <input type="time" defaultValue={updateStartTime} ref={startTimeRef} className="finput" placeholder= 'e.g 7:30 AM' id='startTime'/>
                            </div>
                            <div className='input-wrapper'>
                                <label className='flabel'>End Time</label>
                                <input type="time" defaultValue={updateEndTime} ref={endTimeRef} className="finput"  placeholder= 'e.g 10:30 AM' id='endTime' />
                            </div>
                            
                        </form>
                        <Buttons>
                            <button className='invite__button' onClick={() => {updateService();}}>Submit</button>
                            <button className='invite__button' onClick={() => {navigate("/all-services")}}>Close</button>
                        </Buttons>
                    </React.Fragment>
                )
        };

        
        
        function createService(e?: { preventDefault: () => void;}){
            e?.preventDefault()
            const service = {
                serviceType: serviceTypeRef.current?.value,
                serviceDate: serviceDateRef.current?.value,
                startTime: startTimeRef.current?.value,
                endTime: endTimeRef.current?.value
            }
            fetch(`https://celz4-api.herokuapp.com/v2/service/create`,{
                method : 'POST',
                body : JSON.stringify(service),
                headers: {
                    'content-Type': 'application/json'
                }
              }).then(response =>{return response.json()}).then((data) => {
                setSuccessAlert(true); setAlertClass('alert alert-success alert-dismissible display'); setAlertContent(`Service has been successfully created. Kindly refresh to see changes`); setAlertHeader('Service Successfully Created!')
                console.log(data);
                console.log(startTimeRef.current?.value)
              }).catch(err => {
                setSuccessAlert(true); setAlertClass('alert alert-success alert-dismissible display'); setAlertContent(`${err}`); setAlertHeader('Error!')
              })
        }
        function updateService(e?: { preventDefault: () => void; }){
            const service = {
                serviceType: serviceTypeRef.current?.value,
                serviceDate: serviceDateRef.current?.value,
                startTime: startTimeRef.current?.value,
                endTime: endTimeRef.current?.value
            }
              e?.preventDefault()
              fetch(`https://celz4-api.herokuapp.com/v2/service/update/${id}`,{
                method : 'PUT',
                body : JSON.stringify(service),
                headers: {
                    'content-Type': 'application/json'
                }
              }).then(response =>{return response.json()}).then((data) => {
                setSuccessAlert(true); setAlertClass('alert alert-success alert-dismissible display'); setAlertContent(`Details of Service with id ${id} has been successfully updated. Kindly refresh to see changes`); setAlertHeader('Service Successfully Updated!')
                // console.log(data);
              }).catch(err => {
                setSuccessAlert(true); setAlertClass('alert alert-success alert-dismissible display'); setAlertContent(`${err}`); setAlertHeader('Error!')
              })
        }
        document.querySelectorAll(".table__update__button")!.forEach(element => {
            element.addEventListener("click", handleUpdateAdmin);
        });
        function handleUpdateAdmin(this: any) {
            let tableRow = this.parentNode.parentNode;
            setId(tableRow.cells[0].innerHTML);
            setUpdateServiceType(tableRow.cells[1].innerHTML);
            setUpdateServiceDate(tableRow.cells[2].innerHTML);
            setUpdateStartTime(tableRow.cells[3].innerHTML);
            setUpdateEndTime(tableRow.cells[4].innerHTML);
      
        }

        const headers = ['ID','Service Type', 'Service Date', 'Start Time', 'End Time',  ' ']
        const serviceArray = userContext.serviceTableData.map(({id, serviceType, serviceDate, startTime, endTime, }) => {
            return {id, serviceType, serviceDate, startTime, endTime}
        })
        const actions = <React.Fragment >
            <button className='table__button table__update__button' onClick={() => { toggle(); openUpdateModal();}}> <span><FiRefreshCw className='table-button-icon' /></span>Update</button>
        </React.Fragment>
      


  return (
      <Container>
          <SideNav />
          <Contain show={userContext.isOpened}>
            <Header />
            <Content>
                <div className= {successAlert? alertClass : "hide"}>
                    <button type="button" className="close" data-dismiss="alert" onClick= {() => {setSuccessAlert(false);}}>&times;</button>
                    <h4><b>{alertHeader}</b></h4>
                    <p>{alertContent}</p>
                </div>
                <Wrapper>
                   <button className='invite__button' onClick={() => {toggle(); openCreateModal();}}><span><BiPlusMedical /></span> Create</button>
                </Wrapper>
                <DataTable data={serviceArray} headers = {headers} actions = {actions} tableTitle = 'All Services' />
                <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={headerText} />
            </Content>
          </Contain>
      </Container>
  )
}






interface Iprops{
    show: boolean;
  }
  const Container = styled.div` 
    position: relative;
  `;

    const Contain =styled.div<Iprops>`
    position: relative;
    margin-left: ${props => props.show ? '300px':'78px'};
    height: 100vh;
    overflow: auto;
    transition: all 0.35s ease; 
    &::-webkit-scrollbar{
        display: none;
    }
    `
    const Wrapper = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: flex-end;
            padding: 10px 25px;
    `;
    const Content = styled.div` 
    background-color: #f1f2f3;
    padding: 1rem;
     span{
        padding: 0px 8px;
      }

    `;

    const Buttons = styled.div`
        display: flex;
        justify-content: flex-end;
        padding: 10px 50px;
        font-size: 15px;
        font-weight: 400;
    `;
   
 
export default AllServices;