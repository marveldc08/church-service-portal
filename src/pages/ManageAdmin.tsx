import React, { useContext, useMemo, useState } from 'react';
import Header from '../components/Header'
import SideNav from '../components/SideNav';
import  Styled  from 'styled-components';
import './ManageAdmin.css';
import Context from '../components/Contexts';
import Tables from '../components/Tables';
import { SelectColumnFilter } from '../components/Filter';
import Modal from '../components/Modal';
import USEMODAL from '../components/USEMODAL';
import { useNavigate } from 'react-router';
import { BiPlusMedical } from "react-icons/bi";
import { HeaderText } from '../components/modal.style';


function ManageAdmin() {
  const userContext = useContext(Context);
  const useApiCall = useContext(Context)
      //modal
  const navigate = useNavigate();
  const {isShown, toggle } = USEMODAL();

   const [content, setContent] = useState(<></>)
   const [headerText, setHeaderText] = useState("")
           
        function openUpdateModal() {
          setHeaderText("Update Admin")
            setContent(
              <React.Fragment>
              <form>
                <div className='input__wrapper'>
                  <label className='flabel'>First Name</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Last Name</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Email</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Role</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Church</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Group</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Status</label>
                  <input type="text" className='finput' />
                </div>
                <Buttons>
                    <button className='invite__button' onClick={() => {navigate("")}}>Submit</button>
                    <button className='invite__button' onClick={() => {navigate("")}}>Close</button>
               </Buttons>
              </form>
            </React.Fragment>
            )
        }

       

        function openViewModal() {
          setHeaderText("Admin Details")
          setContent(
            <React.Fragment>
            
          
            
            <button className='invite__button' onClick={() => {navigate("")}}>Close</button>
            
          </React.Fragment>
          )
      }

      function openInviteModal() {
          setHeaderText("Invite Admin")
       
        setContent(
          <React.Fragment>
          
          <form>
          <div className='input__wrapper'>
                  <label className='flabel'>First Name</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Last Name</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Email</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Role</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Church</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Group</label>
                  <input type="text" className='finput' />
                </div>
          <Buttons>
              <button className='invite__button' onClick={() => {navigate("")}}>Submit</button>
              <button className='invite__button' onClick={() => {navigate("")}}>Close</button>
          </Buttons>
          </form>
        </React.Fragment>
        )
    }
          //Modal End 

   useApiCall.ApiCall("http://api.tvmaze.com/search/shows?q=girls")

   const columns = useMemo(() => [
    {
      Header: "All Admin",
      columns: [
        {
          Header: "ID",
          accessor: "show.id",
        },
        {
          Header: "First Name",
          accessor: "show.type",
        },
        {
          Header: "Last Name",
          accessor: "show.language",
          Filter: SelectColumnFilter,
         filter: "includes",
        },
        {
          Header: "Email",
          accessor: "",
          Cell: "emekachinye09bleryui@gmail.com"
          
        },
        {
          Header: "Role",
          accessor: "show.rating.average",
          //Cell:({ cell: { value } }) => value || "-",
        },
        {
          Header: "Church",
          accessor: "show.status",
        },
        {
          Header: "Group",
          accessor: "show.premiered",
          //Cell: ({ cell: { value } }) => value || "-",
        },
        {
          Header: "Status",
          accessor: "show.schedule.time",
          //Cell: ({ cell: { value } }) => value || "-",
        },
        {
         Header: "Action",
         accessor: "",
         Cell: () => (<>
         <div>
         <button className='table__button' onClick={()=> {toggle(),  openUpdateModal()} }>Update</button>
         {" "}
         <button className='table__button' onClick={()=> {toggle(),  openViewModal()}}>View</button>
         </div>
         </> ),
       },
      ],
    },
  ], []);
//// impliment the table


  return (
    <Container>
        <SideNav />
      <Contain show={userContext.isOpened}>
        <Header />
        <Content>
          <Actions>
            <button className='invite__button' onClick={()=> {toggle(),  openInviteModal()}}> <span ><BiPlusMedical /></span> Invite</button>
          </Actions>
        <Tables columns={columns} data={useApiCall.data} />
        <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={headerText} />
        </Content>
      </Contain>
    </Container>
  )
}

export default ManageAdmin
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
const Buttons =Styled.div`
   display: flex;
   justify-content: flex-end;
   padding: 10px;
`


function setheaderText() {
  throw new Error('Function not implemented.');
}

function setheader(arg0: JSX.Element) {
  throw new Error('Function not implemented.');
}

