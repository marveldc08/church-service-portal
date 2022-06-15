import React, { useState, useEffect, useContext, useRef } from "react";
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import  Styled  from 'styled-components';
import Context from '../components/Contexts';
import { useNavigate } from 'react-router';
import FileCSV from '../components/FileCSV';
import styled from 'styled-components';
import { AiOutlineSend } from "react-icons/ai";
import "animate.css";
import './FinancialReport.css';

function SubmitFinancialReport() {
    const userContext = useContext(Context);
    const navigate = useNavigate();
    const [count, setCount] = useState<number>(0)
    const serviceTypeRef = useRef();
    const serviceDateRef = useRef<HTMLInputElement>();
    const partnershipTypeRef = useRef();
    const cummulativeAmountNairaRef = useRef();
    const cummulativeAmountDollarRef = useRef();


    const createInputRow2 = () => {
      const inputsContainer = document.querySelector('.inputsContainer');
      //inputsContainer.classList.add("inputsContainer");
      const wrapper = document.createElement("div");
      wrapper.classList.add("wrapper");
      wrapper.classList.add("animate__animated");
      wrapper.classList.add("animate__fadeIn");
      const inputs = document.createElement("div");
      inputs.classList.add("inputs");

      const inputWrapper2 = document.createElement("div");
      inputWrapper2.classList.add("input-wrapper");
      const inputGroup1 = document.createElement("div");
      inputGroup1.classList.add("input-group");
      const selectPaymentMethod = document.createElement("select");
      selectPaymentMethod.classList.add("multi__select");
      const paymentMethodOption1 = document.createElement("option");
      paymentMethodOption1.setAttribute("value", "");
      paymentMethodOption1.textContent = "select method";
      const paymentMethodOption2 = document.createElement("option");
      paymentMethodOption2.setAttribute("value", "Cash");
      paymentMethodOption2.textContent = "Cash";
      const paymentMethodOption3 = document.createElement("option");
      paymentMethodOption3.setAttribute("value", "Cheque");
      paymentMethodOption3.textContent = "Cheque";
      const paymentMethodOption4 = document.createElement("option");
      paymentMethodOption4.setAttribute("value", "POS");
      paymentMethodOption4.textContent = "POS";
      const paymentMethodOption5 = document.createElement("option");
      paymentMethodOption5.setAttribute("value", "Transfer");
      paymentMethodOption5.textContent = "Transfer";

      const inputWrapper3 = document.createElement("div");
      inputWrapper3.classList.add("input-wrapper");
      const inputGroup2 = document.createElement("div");
      inputGroup2.classList.add("input-group");
      const inputIcon1 = document.createElement("div");
     //  const nairaImg = document.createElement("img");
     //  nairaImg.classList.add("imgs");
     //  nairaImg.setAttribute("src", "/images/naira-icon.png");
      const nairaAmountInput = document.createElement("input");
      nairaAmountInput.classList.add("multi__inputNaira");
      nairaAmountInput.setAttribute("type", "number");
      nairaAmountInput.setAttribute("placeholder", "enter amount");
      nairaAmountInput.setAttribute("min", "0");

      const inputWrapper4 = document.createElement("div");
      inputWrapper4.classList.add("input-wrapper");
      const inputGroup3 = document.createElement("div");
      inputGroup3.classList.add("input-group");
      const inputIcon2 = document.createElement("div");
     //  const dollarImg = document.createElement("img");
     //  dollarImg.classList.add("imgs");
     //  dollarImg.setAttribute("src", "/images/dollar-icon.png");
      const dollarAmountInput = document.createElement("input");
      dollarAmountInput.classList.add("multi__inputDollar");
      dollarAmountInput.setAttribute("type", "number");
      dollarAmountInput.setAttribute("placeholder", "enter amount");
      dollarAmountInput.setAttribute("min", "0");

      const controlsWrap = document.createElement("div");
      controlsWrap.classList.add("controls");
      // const addInputRow = document.createElement("div");
      // addInputRow.classList.add("newCard");
      // addInputRow.addEventListener("click", createInputRow);
      // addInputRow.textContent = "+";

      const removeInputRow = document.createElement("div");
      removeInputRow.classList.add("removeInputRow");
      removeInputRow.addEventListener("click", removeRow);
      removeInputRow.textContent = "-";

      selectPaymentMethod.append(
        paymentMethodOption1,
        paymentMethodOption2,
        paymentMethodOption3,
        paymentMethodOption4,
        paymentMethodOption5
      );

      inputGroup1.append(selectPaymentMethod);
      inputWrapper2.append(inputGroup1);

      inputIcon1.append( nairaAmountInput);
      inputGroup2.append(inputIcon1);
      inputWrapper3.append(inputGroup2);

      inputIcon2.append( dollarAmountInput);

      inputGroup3.append(inputIcon2);

      inputWrapper4.append(inputGroup3);

      inputs.append(inputWrapper2, inputWrapper3, inputWrapper4);
      controlsWrap.append(removeInputRow);
      wrapper.append(inputs, controlsWrap);
      inputsContainer?.append(wrapper);
    }

    
   function removeRow(this: any) {
     const row = this.parentElement.parentElement;
     row.classList.remove("animate__fadeIn");
     row.classList.add("animate__fadeOut");
     row.classList.add("hide");
   }
   let totalNairaAmount: number = 0;

   //  function cummulativeNairaAmount() {

  //    const nairas = document.querySelectorAll(".multi__inputNaira") as NodeListOf<HTMLInputElement>;
  //    nairas.forEach(element => {
  //     const naira = parseInt(element.value);
  //     totalNairaAmount = totalNairaAmount + naira;
  //     console.log(naira);
  //    })
  //    console.log(totalNairaAmount);
     
  //   }
  let totalDollarAmount: number = 0;
  //  function cummulativeDollarAmount() {

  //    const dollars = document.querySelectorAll(".multi__inputNaira") as NodeListOf<HTMLInputElement>;
  //    dollars.forEach(element => {
  //     const dollar = parseInt(element.value);
  //     totalDollarAmount = totalDollarAmount + dollar;
  //     console.log(dollar);
  //    })
  //    console.log(totalDollarAmount);
     
  //   }

  const handleSubmitPartnership = (e?: {preventDefault: () => void;}) => {
    e?.preventDefault();

     const nairas = document.querySelectorAll(".multi__inputNaira") as NodeListOf<HTMLInputElement>;
      nairas.forEach(element => {
        const naira = parseInt(element.value);
        totalNairaAmount = totalNairaAmount + naira;
        console.log(naira);
      })

    const dollars = document.querySelectorAll(".multi__inputDollar") as NodeListOf<HTMLInputElement>;
      dollars.forEach(element => {
        const dollar = parseInt(element.value);
        totalDollarAmount = totalDollarAmount + dollar;
        console.log(dollar);
     })
    let serviceType = document.getElementById('serviceSelect') as HTMLSelectElement;
    let financeType = document.getElementById('selectFinance') as HTMLSelectElement;
    
  const finance = {
    serviceType: serviceType.value,
    serviceDate: serviceDateRef.current?.value,
    financeType: financeType.value,
    cummulativeAmountNaira: totalNairaAmount,
    cummulativeAmountDollar: totalDollarAmount,
  };

  fetch("https://celz4-api.herokuapp.com/v2/finance/submit",{
    method: "POST",
    body: JSON.stringify(finance),
    headers: { "content-Type": "application/json" },
  }).then(response => {return response.json()}).then((data) => {
    alert('submitted successfully')
    serviceType.value = "";
    serviceDateRef.current!.value = "";
    financeType.value = "";
    totalNairaAmount = 0;
    totalDollarAmount = 0;
    console.log(data)
  })
}
        
  return (
      
    <Container>   
        <SideNav /> 
        <Contain show={userContext.isOpened}>
           <Header />
            <Content>
              <FileCSV type = 'finance' />
              <FormWrap>
                <h2>
                  Financial Report{" "}
                  <span>
                    <img src="/images/apply.png" alt="submit form" />
                  </span>{" "}
                </h2>
                <form>
                  <div className="input-wrapper">
                    <label className="partnershipReport__label">
                      Church Category
                    </label>
                    <select className="partnershipReport__input" id="churchSelect">
                      <option value={""}>select church category</option>
                      <option value={"Adult Church"}>Adult Church </option>
                      <option value={"Youth Church "}>Youth Church </option>
                      <option value={"Children Church"}> Children Church </option>
                      <option value={"Teens Church"}>Teens Church </option>
                      <option value={""}> Others </option>
                    </select>
                  </div>
                  <div className="cardContainer">
                    <Card>
                      <CardTop>
                        <h6> {"Financials "} </h6>
                        <NewButtonWrap>
                          <span>New Card </span>
                          <NewCard
                          // onClick={() => {
                          //   createCard();
                          // }}
                          >
                            {" "}
                            {"+"}{" "}
                          </NewCard>
                        </NewButtonWrap>
                      </CardTop>
                      <CardBody>
                        <div className="input-wrapper">
                          <label className="submitAttendance__label">
                            Service Type
                          </label>
                          <select
                            className="submitAttendance__input"
                            id="serviceSelect"
                          >
                            <option className="submitAttendance__option" value={""}>
                              select service type
                            </option>
                            <option
                              className="submitAttendance__option"
                              value={"Sunday Service"}
                            >
                              Sunday Service{" "}
                            </option>
                            <option
                              className="submitAttendance__option"
                              value={"Mid-Week Service "}
                            >
                              Mid-Week Service{" "}
                            </option>
                            <option
                              className="submitAttendance__option"
                              value={"All-Night Service "}
                            >
                              {" "}
                              All-Night Service{" "}
                            </option>
                            <option className="submitAttendance__option" value={""}>
                              Others
                            </option>
                          </select>
                        </div>
                        <div className="input-wrapper">
                          <label className="submitAttendance__label">
                            Service Date
                          </label>
                          <input
                            type="date"
                            ref={serviceDateRef}
                            className="submitAttendance__input"
                          />
                        </div>
                        <div className="input-wrapper">
                          <label className="submitAttendance__label">
                            Financial Type
                          </label>
                          <select
                            className="submitAttendance__input"
                            id="selectFinance"
                          >
                            <option value={""}>select Financial  type</option>
                            <option value={"Tithe"}>
                              Tithe
                            </option>
                            <option value={"Offering"}>Offering</option>
                            <option value={"First Fruit"}>First Fruit</option>
                            <option value={"Seed Offering"}>
                              {" "}
                              Seed Offering
                            </option>
                            <option value={"Thanksgiving Offering"}>Thanksgiving Offering</option>
                            <option value={"Building Project"}>
                              Building Project
                            </option>
                            <option value={"Local Church Development"}>Local Church Development</option>
                            <option value={"Special Programmes"}>
                              Special Programmes
                            </option>
                          </select>
                        </div>
                        {/* <SubHeading>
                            <h6>Payment Method</h6><h6>Amount <img src='/images/naira-icon.png' /></h6><h6>Amount $</h6>
                        </SubHeading> */}
                        <div className="inputsContainer">
                          <div className="wrapper">
                            <Inputs>
                              <div className="input-wrapper">
                                <div className="input-group">
                                  <label className="partnershipReport__label">
                                    Payment Method
                                  </label>
                                  <select className="multi__select">
                                    <option value={""}>select method</option>
                                    <option value={"Cash"}>Cash</option>
                                    <option value={"Cheque"}>Cheque</option>
                                    <option value={"POS"}>POS</option>
                                    <option value={"Transfer"}>Transfer</option>
                                  </select>
                                </div>
                              </div>
                              <div className="input-wrapper">
                                <div className="input-group">
                                  <label className="partnershipReport__label">
                                    Amount{" "}
                                    <img
                                      className="imgs"
                                      src="/images/naira-icon.png"
                                    />
                                  </label>
                                  <InputIcon>
                                    {/* <img src="/images/naira-icon.png" /> */}
                                    <input
                                      type="number"
                                      className="multi__inputNaira"
                                      placeholder={"enter amount"}
                                      min="0"
                                    />
                                  </InputIcon>
                                </div>
                              </div>
                              <div className="input-wrapper">
                                <div className="input-group">
                                  <label className="partnershipReport__label">
                                    Amount{" "}
                                    <img
                                      className="imgs"
                                      src="/images/dollar-icon.png"
                                    />
                                  </label>
                                  <InputIcon>
                                    {/* <img src="/images/dollar-icon.png" /> */}
                                    <input
                                      type="number"
                                      className="multi__inputDollar"
                                      placeholder={"enter amount"}
                                      min="0"
                                    />
                                  </InputIcon>
                                </div>
                              </div>
                            </Inputs>
                            <NewCard
                              onClick={() => {
                                createInputRow2();
                              }}
                            >
                              {"+"}
                            </NewCard>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="input-wrapper">
                    <label className="partnershipReport__label">Summary</label>
                    <textarea
                      className="partnershipReport__input"
                      rows={4}
                      cols={50}
                    ></textarea>
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
                {/* <FinancialReportCard /> */}
            </Content>
        </Contain>
    </Container>
  )
}

export default SubmitFinancialReport



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
  
  const Content = styled.div`
  background: #f1f2f3;
  height: calc(100vh - 70px);
  padding: 1rem;

  h3{
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

const DIV =styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* border: 10px solid red; */
`
