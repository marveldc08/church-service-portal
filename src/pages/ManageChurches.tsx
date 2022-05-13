import React, { useContext, useState, useEffect, useMemo } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Context from "../components/Contexts";
import Modal from "../components/Modal";
import USEMODAL from "../components/USEMODAL";
import Tables from "../components/Tables";
import { SelectColumnFilter } from "../components/Filter";
import { useNavigate } from "react-router";
import { BiPlusMedical } from "react-icons/bi";
import { HeaderText } from "../components/modal.style";
import styled from "styled-components";




function ManageChurches() {
   const userContext = useContext(Context)
   const useApiCall = useContext(Context);
   const navigate = useNavigate();

   const [content, setContent] = useState(<></>);
   const [headerText, setHeaderText] = useState("");
   const { isShown, toggle } = USEMODAL();
  useApiCall.ApiCall("http://api.tvmaze.com/search/shows?q=girls");

   const columns = useMemo(
     () => [
       {
         Header: "All Churches",
         columns: [
           {
             Header: "ID",
             accessor: "show.id",
           },
           {
             Header: "Church Name",
             accessor: "show.name",
           },
           {
             Header: "Pastors Name",
             accessor: "show.language",
             Filter: SelectColumnFilter,
             filter: "includes",
           },
           {
             Header: "Contact",
             accessor: "show.officialSite",
             Cell: "09022356748",
           },
           {
             Header: "Address",
             accessor: "show.rating.average",
             //Cell:({ cell: { value } }) => value || "-",
           },
           {
             Header: "Group",
             accessor: "show.status",
           },
           {
             Header: "Membership Strength",
             accessor: "show.premiered",
             //Cell: ({ cell: { value } }) => value || "-",
           },
           {
             Header: "Action",
             accessor: "",
             Cell: () => (
               <>
                 <button className="table__button" onClick={() => {toggle(), openUpdateModal();}}>Update</button>
               </>
             ),
           },
         ],
       },
     ],
     []
   );

    function openAddModal() {
          setHeaderText("Add Church")
       
        setContent(
          <React.Fragment>
          
          <form>
          <div className='input__wrapper'>
                  <label className='flabel'>Church Name</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Group</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Address</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Pastor's Name</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Contact</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Membership Strength</label>
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
    
    function openUpdateModal() {
          setHeaderText("Update Church")
       
        setContent(
          <React.Fragment>
          
          <form>
          <div className='input__wrapper'>
                  <label className='flabel'>Church Name</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Group</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Address</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Pastor's Name</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Contact</label>
                  <input type="text" className='finput' />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Membership Strength</label>
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
  return (
    <Container>
      <SideNav />
      <Contain show={userContext.isOpened}>
        <Header />
        <Content>
          <Wrap>
            <button className='invite__button' onClick={()=> {toggle(), openAddModal();}}> <span ><BiPlusMedical /></span> Invite</button>
          </Wrap>
          <Tables columns={columns} data={useApiCall.data} />
          <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={headerText} />
        </Content>
      </Contain>
    </Container>
  );
   
}


export default ManageChurches;

interface Iprops{
  show: boolean;
}
const Container = styled.div`
  position: relative;
`;

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
`
const Wrap = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  padding-left: 12rem;

  button {
    span {
      padding: 0px 8px;
    }
  }
`;
const Buttons = styled.div`
   display: flex;
   justify-content: flex-end;
   padding: 10px;
`;

function setheaderText() {
  throw new Error("Function not implemented.");
}

function setheader(arg0: JSX.Element) {
  throw new Error("Function not implemented.");
}