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

function CellReports() {

  const userContext = useContext(Context);
  const navigate = useNavigate();
  const { isShown, toggle } = USEMODAL();

  const headers = [ 'Cell Name','Meeting Date', 'Meeting Type', 'Start Time', 'End Time', 'Male', 'Female', 'First Timers', 'Offering', 'New Converts', 'Spirit Filled']
  const cellArray = userContext.cellTableData.map(({ cellName, meetingDate, meetingType, startTime, endTime, numberOfMale, numberOfFemale, numberOfFirstTimer, Offering, numberOfNewConverts, numberOfSpiritFilled}) => {
      return { cellName, meetingDate, meetingType, startTime, endTime, numberOfMale, numberOfFemale, numberOfFirstTimer, Offering, numberOfNewConverts, numberOfSpiritFilled}
  })

  return( 
    <Container>
       <SideNav />
      <Contain show={userContext.isOpened}>
        <Header />
        <Content>
          <Actions>
            <button className="invite__button" onClick={() => { navigate("/submit-cell-report");}}>
              {" "}
              <span>
                <BiPlusMedical />
              </span>{" "}
              Submit Report
            </button>
          </Actions>
          <DataTable data={cellArray} headers={headers}  tableTitle="Cell Reports"/>
          {/* <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={headerText} /> */}
        </Content>
      </Contain>
    </Container>
  );
}

export default CellReports;

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

