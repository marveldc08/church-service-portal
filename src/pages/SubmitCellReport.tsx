import React , {useState, useEffect, useContext}from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import Context from "../components/Contexts";
import { AiOutlineSend } from "react-icons/ai";
import './CellReport.css'

function SubmitCellReport() {
     const userContext = useContext(Context);


  return (
    <Container>
      <SideNav />
      <Contain show={userContext.isOpened}>
        <Header />
        <Content>
          <FormWrap>
            <h2>
              Cell Meeting Report{" "}
              <span>
               <img src='/images/apply.png'  alt='submit form'/>
              </span>{" "}
            </h2>
            <form>
              <div className="input-wrapper">
                <label className="submitAttendance__label">Church Category</label>
                <select className="submitAttendance__input">
                  <option className='submitAttendance__option' value={""}>select church category</option>
                  <option className='submitAttendance__option' value={"Adult Church"}>Adult Church </option>
                  <option className='submitAttendance__option' value={"Youth Church "}>Youth Church </option>
                  <option className='submitAttendance__option' value={"Children Church"}> Children Church </option>
                  <option className='submitAttendance__option' value={"Teens Church"}>Teens Church </option>
                  <option className='submitAttendance__option' value={""}> Others </option>
                </select>
              </div>
              <div className="input-wrapper">
                <label className="submitAttendance__label">Cell Name</label>
                <select className="submitAttendance__input">
                  <option className='submitAttendance__option' value={""}>select cell</option>
                  <option className='submitAttendance__option' value={"Sunday Service"}>Agape Cell </option>
                  <option className='submitAttendance__option' value={"Mid-Week Service "}>Heros Cell </option>
                  <option className='submitAttendance__option' value={"All-Night Service "}>Love Cell</option>
                  <option className='submitAttendance__option' value={"Women PCF"}>Women PCF</option>
                  <option className='submitAttendance__option' value={"Men PCF"}>Men PCF</option>
                  <option className='submitAttendance__option' value={"Heaven's Best Cell 3"}>Heaven's Best Cell 3</option>
                  <option className='submitAttendance__option' value={"Treasure Cell"}>Treasure Cell</option>
                  <option className='submitAttendance__option' value={"Women PCF"}>Perfection Cell 2</option>
                  <option className='submitAttendance__option' value={"Women PCF"}>Truth Cell 1</option>
                </select>
              </div>
              <div className="input-wrapper">
                <label className="submitAttendance__label">Meeting Date</label>
                <input type="date" className="submitAttendance__input" />
              </div>
              <div className="input-wrapper">
                <label className="submitAttendance__label">Start Time</label>
                <input type="time" className="submitAttendance__input" placeholder="no_ of male" min="0"/>
              </div>
              <div className="input-wrapper">
                <label className="submitAttendance__label">End Time</label>
                <input type="time" className="submitAttendance__input" placeholder="no_ of female" min="0"/>
              </div>
              <div className="input-wrapper">
                <label className="submitAttendance__label">Offering</label>
                <InputIcon>
                    <img src='/images/naira-icon.png' />
                    <input type="number" className="submitAttendance__input" placeholder={"  " +"enter amount"} min="0"/>
                </InputIcon>
              
              </div>
              <SubHeading>
                  <hr style={{"width": "20%"}} /><h6>Attendance</h6><hr style={{"width": "40%"}}/>
              </SubHeading>
              <div className="input-wrapper">
                <label className="submitAttendance__label">Male</label>
               <input type="number" className="submitAttendance__input" placeholder="no_ of first timer" min="0"/>
              </div>
              <div className="input-wrapper">
                <label className="submitAttendance__label">Female</label>
               <input type="number" className="submitAttendance__input" placeholder="no_ of first timer" min="0"/>
              </div>
              <div className="input-wrapper">
                <label className="submitAttendance__label">First Timer</label>
               <input type="number" className="submitAttendance__input" placeholder="no_ of first timer" min="0"/>
              </div>
              <div className="input-wrapper">
                <label className="submitAttendance__label">New Convert</label>
                <input type="number" className="submitAttendance__input" placeholder="no_ of new convert" min="0"/>
              </div>
              <div className="input-wrapper">
                <label className="submitAttendance__label">HolyGhost Filled</label>
              <input type="number" className="submitAttendance__input" placeholder="no_ of spirit filled" min="0"/>
              </div>
              <ButtonWrap>
                <button className="submitAttendance__button">
                  <span>
                    <AiOutlineSend />
                  </span>{" "}
                  Submit
                </button>
              </ButtonWrap>
            </form>
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