import React, { useContext, useState, useEffect, useMemo } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Context from "../components/Contexts";
import Modal from "../components/Modal";
import USEMODAL from "../components/USEMODAL";
import Tables from "../components/Tables";
import { SelectColumnFilter } from "../components/Filter";
import styled from "styled-components";




function ManageChurches() {
   const userContext = useContext(Context)
   const useApiCall = useContext(Context);

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
             accessor: "show.name",
           },
           {
             Header: "Contact",
             accessor: "",
             Cell: "08099234156",
             Filter: SelectColumnFilter,
             filter: "includes",
           },
           {
             Header: "Address",
             accessor: "show.officialSite",
           },
           {
             Header: "Group",
             accessor: "show.rating.average",
             //Cell:({ cell: { value } }) => value || "-",
           },
           {
             Header: "Membership Strenght",
             accessor: "show.status",
           },
           {
             Header: "Action",
             accessor: "",
             Cell: () => (
               <>
                 <button className="table__button">Update</button>
               </>
             ),
           },
         ],
       },
     ],[]);

   useApiCall.ApiCall("http://api.tvmaze.com/search/shows?q=girls");

  return (
    <Container>
      <SideNav />
      <Contain show={userContext.isOpened}>
        <Header />
       <Content>
           Hiii
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
`;