import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Context from "../components/Contexts";
import { AiOutlineSend } from "react-icons/ai";
import { BsDownload, BsCloudUpload } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import "./PartnershipReport.css";
import "animate.css";
import FileCSV from "../components/FileCSV";

function SubmitServiceReport() {
  const navigate = useNavigate();
  const userContext = useContext(Context);
  const [count, setCount] = useState<number>(0)
  const startTimeRef = useRef();
  const serviceDateRef = useRef<HTMLInputElement>();
  const endTimeRef = useRef();
  const handeldByRef = useRef();
  const DescriptionRef = useRef();
  // Alert states
  const [alertHeader, setAlertHeader] = useState('');
  const [successAlert, setSuccessAlert] = useState(false);
  const [alertContent, setAlertContent] = useState('');
  const [alertClass, setAlertClass] = useState('');
      
    const createCard = () => {
     
      
      const cardContainer = document.querySelector(".cardContainer");
      const selectvalue = document.querySelector("#selectPartnership") as HTMLSelectElement ;
      const card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("animate__animated");
      card.classList.add("animate__slideInDown");
      const cardTop = document.createElement("div");
      cardTop.classList.add("cardTop");
      const h6 = document.createElement("h6");
      h6.textContent = "Partnerships ";
      const newButtonWrap = document.createElement("div");
      newButtonWrap.classList.add("newButtonWrap");
      const span = document.createElement("span");
      span.classList.add("span");
      span.textContent = "New Card";
      const newCard1 = document.createElement("div");
      newCard1.classList.add("newCard");
      newCard1.addEventListener("click", createCard);
      newCard1.textContent = "+";

      const cardBody = document.createElement("div");
      cardBody.classList.add("cardBody");

      const inputWrapper = document.createElement("div");
      inputWrapper.classList.add("input-wrapper");
      const selectSessionLabel = document.createElement("label");
      selectSessionLabel.classList.add("submitAttendance__label");
      selectSessionLabel.textContent = " Session";
      const selectSession = document.createElement("select");
      selectSession.classList.add("submitAttendance__input");
      selectSession.setAttribute("id", "selectSession");
       const sessionOption1 = document.createElement("option");
       sessionOption1.setAttribute("value", "");
       sessionOption1.textContent = "select session";
       const sessionOption2 = document.createElement("option");
       sessionOption2.setAttribute("value", "Opening Prayer");
       sessionOption2.textContent = "Opening Prayer";
       const sessionOption3 = document.createElement("option");
       sessionOption3.setAttribute("value", "Worship Session");
       sessionOption3.textContent = "Worship Session";
       const sessionOption4 = document.createElement("option");
       sessionOption4.setAttribute("value", "Rhapsody Session");
       sessionOption4.textContent = "Rhapsody Session";
       const sessionOption5 = document.createElement("option");
       sessionOption5.setAttribute("value", "Testimonies Session");
       sessionOption5.textContent = "Testimonies Session";
       const sessionOption6 = document.createElement("option");
       sessionOption6.setAttribute("value", "Word Session");
       sessionOption6.textContent = "Word Session";
       const sessionOption7 = document.createElement("option");
       sessionOption7.setAttribute("value", "Announcements");
       sessionOption7.textContent = "Announcements";
       const sessionOption8 = document.createElement("option");
       sessionOption8.setAttribute("value", "Tithes And Offering");
       sessionOption8.textContent = "Tithes And Offering";
       const sessionOption9 = document.createElement("option");
       sessionOption9.setAttribute("value", "Benediction");
       sessionOption9.textContent = "Benediction";

      const inputWrapper0 = document.createElement("div");
      inputWrapper0.classList.add("input-wrapper");
      const startTimeLabel = document.createElement("label");
      startTimeLabel.classList.add("submitAttendance__label");
      startTimeLabel.textContent = " Start Time";
      const startTimeInput = document.createElement("input");
      startTimeInput.classList.add("submitAttendance__input");
      startTimeInput.setAttribute('type', 'time');

      

      const inputWrapper1 = document.createElement("div");
      inputWrapper1.classList.add("input-wrapper");
      const endTimeLabel = document.createElement("label");
      endTimeLabel.classList.add("submitAttendance__label");
      endTimeLabel.textContent = " End Time";
      const endTimeInput = document.createElement("input");
      endTimeInput.classList.add("submitAttendance__input");
      endTimeInput.setAttribute('type', 'time');

      const inputWrapper2 = document.createElement("div");
      inputWrapper2.classList.add("input-wrapper");
      const handledByLabel = document.createElement("label");
      handledByLabel.classList.add("submitAttendance__label");
      handledByLabel.textContent = " Handled By";
      const handledByInput = document.createElement("input");
      handledByInput.classList.add("submitAttendance__input");
      handledByInput.setAttribute('type', 'text');

      const inputWrapper3 = document.createElement("div");
      inputWrapper3.classList.add("input-wrapper");
      const selectDesignationLabel = document.createElement("label");
      selectDesignationLabel.classList.add("submitAttendance__label");
      selectDesignationLabel.textContent = " Designation";
      const selectDesignation = document.createElement("select");
      selectDesignation.classList.add("submitAttendance__input");
      selectDesignation.setAttribute("id", "designation");
      const designationOption1 = document.createElement("option");
      designationOption1.setAttribute("value", "");
      designationOption1.textContent = "select designation";
      const designationOption2 = document.createElement("option");
      designationOption2.setAttribute("value", "Pastor");
      designationOption2.textContent = "Pastor";
      const designationOption3 = document.createElement("option");
      designationOption3.setAttribute("value", "Deacon");
      designationOption3.textContent = "Deacon";
      const designationOption4 = document.createElement("option");
      designationOption4.setAttribute("value", "Deaconess");
      designationOption4.textContent = "Deaconess";
      const designationOption5 = document.createElement("option");
      designationOption5.setAttribute("value", "Brother");
      designationOption5.textContent = "Brother";
      const designationOption6 = document.createElement("option");
      designationOption6.setAttribute("value", "Sister");
      designationOption6.textContent = "Sister";

      const inputWrapper4 = document.createElement("div");
      inputWrapper4.classList.add("input-wrapper");
      const descriptionLabel = document.createElement("label");
      descriptionLabel.classList.add("submitAttendance__label");
      descriptionLabel.textContent = " Description";
      const descriptionInput = document.createElement("textarea");
      descriptionInput.classList.add("submitAttendance__input");
      descriptionInput.setAttribute('row', '4');
      descriptionInput.setAttribute('col', '50');
      
      
      const cardFoot = document.createElement("div");
      cardFoot.classList.add("cardFoot");
    
      const deleteCard = document.createElement("img");
      deleteCard.classList.add("deleteCard");
      deleteCard.addEventListener("click", deleteCardFunc);
      deleteCard.setAttribute("src", "/images/trash.png");

      newButtonWrap.append(span);
      newButtonWrap.append(newCard1);
      cardTop.append(h6, newButtonWrap); //cardTop

      selectSession.append(
        sessionOption1,
        sessionOption2,
        sessionOption3,
        sessionOption4,
        sessionOption5,
        sessionOption6,
        sessionOption7,
        sessionOption8,
        sessionOption9,
      );
      inputWrapper.append(selectSessionLabel, selectSession);

      inputWrapper0.append(startTimeLabel, startTimeInput)

      inputWrapper1.append(endTimeLabel, endTimeInput);

    

      inputWrapper2.append(handledByLabel, handledByInput);

      selectDesignation.append(
        designationOption1,
        designationOption2,
        designationOption3,
        designationOption4,
        designationOption5,
        designationOption6
      );

      inputWrapper3.append(selectDesignationLabel, selectDesignation);

      inputWrapper4.append(descriptionLabel, descriptionInput);

      cardBody.append(inputWrapper,inputWrapper0, inputWrapper1, inputWrapper2, inputWrapper3, inputWrapper4); //card body

      cardFoot.append(deleteCard);

      card.append(cardTop, cardBody, cardFoot);

      cardContainer?.append(card);

     
    }

    function deleteCardFunc (this: any) {
      const card = this.parentElement.parentElement;
       card.classList.remove("animate__slideInDown");
      card.classList.add("animate__slideInUp");
      card.remove();
    }


    interface ISession {
      sessionType: string,
      startTime: string,
      endTime: string,
      handledBy: string,
      designation: string,
      description: string,
}
    let sessionsArray: ISession[] = [];
    const handleSubmitPartnership = (e?: {preventDefault: () => void;}) => {
        e?.preventDefault();
        let serviceType = document.getElementById('selectService') as HTMLSelectElement
          document.querySelectorAll('.card').forEach((card, index) => {
              let cardBody = card.children[1];
              let inputWrapper = cardBody?.children;
              let sessionType = inputWrapper[0].children[1] as HTMLSelectElement | HTMLInputElement
              let startTime = inputWrapper[1].children[1] as HTMLSelectElement | HTMLInputElement
              let endTime = inputWrapper[2].children[1] as HTMLSelectElement | HTMLInputElement
              let handledBy = inputWrapper[3].children[1] as HTMLSelectElement | HTMLInputElement
              let designation = inputWrapper[4].children[1] as HTMLSelectElement | HTMLInputElement
              let description = inputWrapper[5].children[1] as HTMLSelectElement | HTMLInputElement
              let session = {
                sessionType: sessionType.value,
                startTime: startTime.value,
                endTime: endTime.value,
                handledBy: handledBy.value,
                designation: designation.value,
                description: description.value,
              }
              sessionsArray.push(session);
               console.log(session);
          })

        console.log(sessionsArray);
        let firstSession = sessionsArray[0];
        let lastSession = sessionsArray.at(-1)
        let serviceDuration: number;
        serviceDuration = parseFloat(lastSession!.endTime) - parseFloat(firstSession.startTime);
        
        let sessionsNumber = sessionsArray.length;
        //  console.log(serviceDuration);
        let partnershipType = document.getElementById('selectPartnership') as HTMLSelectElement;
        
      const service = {
        serviceType: serviceType.value,
        serviceDuration: serviceDuration,
        serviceDate: serviceDateRef.current?.value,
        sessionsNumber: sessionsNumber,
        sessions: sessionsArray,
      };

      fetch("https://celz4-api.herokuapp.com/v2/service-report/submit",{
        method: "POST",
        body: JSON.stringify(service),
        headers: { "content-Type": "application/json" },
      }).then(response => {return response.json()}).then((data) => {
        // alert('submitted successfully')
        setSuccessAlert(true); setAlertClass('alert alert-success alert-dismissible display'); setAlertContent(`Partnership report  has been successfully submited.`); setAlertHeader('Partnership Successfully submited!')
        console.log(data)
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
            <button className="submitAttendance__button " onClick={() => { navigate("/service-reports"); }}>
              <span><FaRegEye /></span>{" "}View Reports
            </button>
          </ButtonWrap>
          <FormWrap>
            <h2>
              Service Report{" "}
              <span>
                <img src="/images/apply.png" alt="submit form" />
              </span>{" "}
            </h2>
            <form>
              <div className="input-wrapper">
                <label className="partnershipReport__label">
                  Service Type
                </label>
                <select className="submitAttendance__input" id="selectService">
                  <option value={""}>Select Service Category</option>
                  <option value={"Sunday Service "}>Sunday Service </option>
                  <option value={"Mid-week Service"}>Mid-week Service</option>
                  <option value={"All Night Service"}>All Night Service</option>
                  <option value={""}> Others </option>
                </select>
              </div>
              <div className="input-wrapper">
                <label className="partnershipReport__label">
                  Service Date
                </label>
                <input type="date" className="submitAttendance__input" ref={serviceDateRef} />
              </div>
              <div className="cardContainer">
                <Card className="card">
                  <CardTop>
                    <h6> {"Services "} </h6>
                    <NewButtonWrap>
                      <span>New Card </span>
                      <NewCard
                      onClick={() => {
                        createCard();
                      }}
                      >
                        {" "}
                        {"+"}{" "}
                      </NewCard>
                    </NewButtonWrap>
                  </CardTop>
                  <CardBody>
                    <div className="input-wrapper">
                      <label className="submitAttendance__label">
                        Session
                      </label>
                      <select
                        className="submitAttendance__input"
                        id="selectSession"
                      >
                        <option className="submitAttendance__option" value={""}>
                          Select Sesssion
                        </option>
                        <option
                          className="submitAttendance__option"
                          value={"Opening Prayer"}
                        >
                          Opening Prayer{" "}
                        </option>
                        <option
                          className="submitAttendance__option"
                          value={"Worship Session"}
                        >
                           Worship Section
                        </option>
                        <option
                          className="submitAttendance__option"
                          value={"Rhapsody Session"}
                        >
                          {" "}
                          Rhapsody Session{" "}
                        </option>
                        <option
                          className="submitAttendance__option"
                          value={"Testimonies Session"}
                        >
                          {" "}
                          Testimonies Session{" "}
                        </option>
                        <option
                          className="submitAttendance__option"
                          value={"Word Session"}
                        >
                          {" "}
                          Word Session{" "}
                        </option>
                        <option className="submitAttendance__option" value={"Announcements"}>
                          Announcements
                        </option>
                        <option className="submitAttendance__option" value={"Tithes And Offering"}>
                          Tithes And Offering
                        </option>
                        <option className="submitAttendance__option" value={"Benediction"}>
                          Benediction
                        </option>
                      </select>
                    </div>
                    <div className="input-wrapper">
                      <label className="submitAttendance__label">
                        Start Time
                      </label>
                      <input
                        type="time"
                        ref={startTimeRef}
                        className="submitAttendance__input"
                      />
                    </div>
                    <div className="input-wrapper">
                      <label className="submitAttendance__label">
                        End Time
                      </label>
                      <input type="time"  className="submitAttendance__input" ref={endTimeRef}  />
                    </div>
                    <div className="input-wrapper">
                      <label className="submitAttendance__label">
                        Handled By
                      </label>
                      <input type="text"  className="submitAttendance__input"  ref={handeldByRef} />
                    </div>
                    <div className="input-wrapper">
                      <label className="submitAttendance__label">
                        Designation
                      </label>
                      <select name="designation" id="designation" className="submitAttendance__input">
                        <option value="">Select Designation</option>
                        <option value="Pastor" className="submitAttendance__option" >Pastor</option>
                        <option value="Deacon"  className="submitAttendance__option" >Deacon</option>
                        <option value="Deaconess"  className="submitAttendance__option" >Deaconess</option>
                        <option value="Brother" className="submitAttendance__option" >Brother</option>
                        <option value="Sister"  className="submitAttendance__option" >Sister</option>
                      </select>
                    </div>
                    <div className="input-wrapper">
                      <label className="submitAttendance__label">
                        Description
                      </label>
                      <textarea name="description" ref = {DescriptionRef} id="description" className="partnershipReport__input" cols={50} rows= {4}></textarea>
                    </div>
                    
                  </CardBody>
                </Card>
              </div>
              <div className="input-wrapper">
                <label className="partnershipReport__label">Summary</label>
                <textarea className="partnershipReport__input" rows={4} cols={50}></textarea>
              </div>
            </form>
           <PreButtonWrap>
              <ButtonWrap>
                  <button className="partnershipReport__button" onClick={() => { handleSubmitPartnership(); }}>
                    <span> <AiOutlineSend /> </span>{" "}
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

export default SubmitServiceReport;

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
`
const Content = styled.div`
  background: #f1f2f3;
  height: calc(100vh - 70px);
  padding: 1rem;

  h3 {
    margin-bottom: 1em;
    color: rgba(24, 35, 89, 0.85) !important;
  }
`
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
  width: 71%;
`
const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 3px;

  button {
    span {
      padding: 0px 8px;
    }
  }
`
const CardContainer =styled.div`
    
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid #e7e6e6;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 8px 8px 4px #aaaaaa;
  padding:7px 1em; 
  margin-bottom: 1em;
`
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  border-bottom: 1px solid #e7e6e6;
  width: 100%;
   padding: 10px;
`;
const NewButtonWrap =styled.div`
    display: flex;
    justify-content: center;

    span{
        margin-right: 3px;
        margin-bottom: 4px;
    }
`
const NewCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: -3px;
    font-size: 20px;
    font-weight: 600;
  border-radius: 50%;
  width: 21px;
  height: 21px;
  background-color: #e7e6e6;
  cursor: pointer;
`
const CardBody = styled.div`
    padding: 3px;
`
const SubHeading = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  h6{
    margin-right: 12px;
  }
`
const Inputs = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 15px;
`
const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const InputIcon = styled.div`

  img {
    position: absolute;
    top: 3.8rem;
    left: 5%;
    //bottom: 10px;
  }
`