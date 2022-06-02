import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Context from "../components/Contexts";
import { AiOutlineSend } from "react-icons/ai";
import { BsDownload, BsCloudUpload } from "react-icons/bs";
import "./PartnershipReport.css";
import "animate.css";

function SubmitPartnershipReport() {
    const userContext = useContext(Context);
const [count, setCount] = useState<number>(0)
    
      
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
      const inputWrapper1 = document.createElement("div");
      inputWrapper1.classList.add("input-wrapper");
      const selectPartnershipLabel = document.createElement("label");
      selectPartnershipLabel.classList.add("submitAttendance__label");
      selectPartnershipLabel.textContent = " Partnership Type";
      const selectPartnership = document.createElement("select");
      selectPartnership.classList.add("submitAttendance__input");
      selectPartnership.setAttribute("id", "selectPartnership");
      const partnershipOption1 = document.createElement("option");
      partnershipOption1.setAttribute("value", "");
      partnershipOption1.textContent = "select partnership type";
      const partnershipOption2 = document.createElement("option");
      partnershipOption2.setAttribute("value", "Bible Sponsorship");
      partnershipOption2.textContent = "Bible Sponsorship";
      const partnershipOption3 = document.createElement("option");
      partnershipOption3.setAttribute("value", "Loveworld Plus");
      partnershipOption3.textContent = "Loveworld Plus";
      const partnershipOption4 = document.createElement("option");
      partnershipOption4.setAttribute("value", "Loveworld Sat");
      partnershipOption4.textContent = "Loveworld Sat";
      const partnershipOption5 = document.createElement("option");
      partnershipOption5.setAttribute("value", "Loveworld TV Ministry");
      partnershipOption5.textContent = "Loveworld TV Ministry";
      const partnershipOption6 = document.createElement("option");
      partnershipOption6.setAttribute("value", "Rhapsody");
      partnershipOption6.textContent = "Rhapsody";
      const partnershipOption7 = document.createElement("option");
      partnershipOption7.setAttribute("value", "Healing School");
      partnershipOption7.textContent = "Healing School";
      const partnershipOption8 = document.createElement("option");
      partnershipOption8.setAttribute("value", "PCDL");
      partnershipOption8.textContent = "PCDL";
      const partnershipOption9 = document.createElement("option");
      partnershipOption9.setAttribute("value", "Innercity Misson");
      partnershipOption9.textContent = "Innercity Mission";
      const partnershipOption10 = document.createElement("option");
      partnershipOption10.setAttribute("value", "Teens Advance Partnership");
      partnershipOption10.textContent = "Teens Advance Partnership";

      const inputsContainer = document.createElement("div");
      inputsContainer.classList.add("inputsContainer");
       const wrapper = document.createElement("div");
       wrapper.classList.add("wrapper");
      const inputs = document.createElement("div");
      inputs.classList.add("inputs");
      const inputWrapper2 = document.createElement("div");
      inputWrapper2.classList.add("input-wrapper");
      const inputGroup1 = document.createElement("div");
      inputGroup1.classList.add("input-group");
      const paymentMethodLabel = document.createElement("label");
      paymentMethodLabel.classList.add("partnershipReport__label");
      paymentMethodLabel.textContent = "Payment Method";
      const selectPaymentMethod = document.createElement("select");
      selectPaymentMethod.classList.add("multi__input");
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
      const nairaAmountLabel = document.createElement("label");
      nairaAmountLabel.classList.add("partnershipReport__label");
      nairaAmountLabel.innerHTML = `Amount 	&#x20A6`;
      const inputIcon1 = document.createElement("div");
      // const nairaImg = document.createElement("img");
      // nairaImg.classList.add("imgs");
      // nairaImg.setAttribute("src", "/images/naira-icon.png");

      const nairaAmountInput = document.createElement("input");
      nairaAmountInput.classList.add("multi__input");
      nairaAmountInput.setAttribute("type", "number");
      nairaAmountInput.setAttribute("placeholder", "enter amount");
      nairaAmountInput.setAttribute("min", "0");

      const inputWrapper4 = document.createElement("div");
      inputWrapper4.classList.add("input-wrapper");
      const inputGroup3 = document.createElement("div");
      inputGroup3.classList.add("input-group");
      const dollarAmountLabel = document.createElement("label");
      dollarAmountLabel.classList.add("partnershipReport__label");
      dollarAmountLabel.innerHTML = "Amount &#x0024";

      const inputIcon2 = document.createElement("div");
      // const dollarImg = document.createElement("img");
      // dollarImg.classList.add("imgs");
      // dollarImg.setAttribute("src", "/images/dollar-icon.png");
      const dollarAmountInput = document.createElement("input");
      dollarAmountInput.classList.add("multi__input");
      dollarAmountInput.setAttribute("type", "number");
      dollarAmountInput.setAttribute("placeholder", "enter amount");
      dollarAmountInput.setAttribute("min", "0");

       const controlsWrap = document.createElement("div");
       controlsWrap.classList.add("controls");
      const newCard2 = document.createElement("div");
      newCard2.classList.add("newCard");
      newCard2.addEventListener("click", createInputRow);
      newCard2.textContent = "+";

       const removeInputRow = document.createElement("div");
       removeInputRow.classList.add("removeInputRow");
       removeInputRow.addEventListener("click", removeRow);
       removeInputRow.textContent = "-";

      const cardFoot = document.createElement("div");
      cardFoot.classList.add("cardFoot");
    
      const deleteCard = document.createElement("img");
      deleteCard.classList.add("deleteCard");
      deleteCard.addEventListener("click", deleteCardFunc);
      deleteCard.setAttribute("src", "/images/trash.png");

      newButtonWrap.append(span);
      newButtonWrap.append(newCard1);
      cardTop.append(h6, newButtonWrap); //cardTop

      selectPartnership.append(
        partnershipOption1,
        partnershipOption2,
        partnershipOption3,
        partnershipOption4,
        partnershipOption5,
        partnershipOption6,
        partnershipOption7,
        partnershipOption8,
        partnershipOption9,
        partnershipOption10
      );
      inputWrapper1.append(selectPartnershipLabel, selectPartnership);

      selectPaymentMethod.append(
        paymentMethodOption1,
        paymentMethodOption2,
        paymentMethodOption3,
        paymentMethodOption4,
        paymentMethodOption5
      );

      inputGroup1.append(paymentMethodLabel, selectPaymentMethod);
      inputWrapper2.append(inputGroup1);

      inputIcon1.append(nairaAmountInput);
     
      inputGroup2.append(nairaAmountLabel, inputIcon1);

      inputWrapper3.append(inputGroup2);

      inputIcon2.append( dollarAmountInput);
    
      inputGroup3.append(dollarAmountLabel, inputIcon2);

      inputWrapper4.append(inputGroup3);

      inputs.append(inputWrapper2, inputWrapper3, inputWrapper4);
      wrapper.append(inputs, newCard2);
      inputsContainer.append(wrapper);

      cardBody.append(inputWrapper1, inputsContainer); //card body

      cardFoot.append(deleteCard);

      card.append(cardTop, cardBody, cardFoot);

      cardContainer?.append(card);

     
    }

    function deleteCardFunc (this: any) {
      const card = this.parentElement.parentElement;
       card.classList.remove("animate__slideInDown");
      card.classList.add("animate__slideInUp");
      card.classList.add("hide");
    }

    function createInputRow(this: any) {
      
              const inputsContainer = this.parentElement.parentElement;
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
              selectPaymentMethod.classList.add("multi__input");
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
              // const nairaImg = document.createElement("img");
              // nairaImg.classList.add("imgs");
              // nairaImg.setAttribute("src", "/images/naira-icon.png");
              const nairaAmountInput = document.createElement("input");
              nairaAmountInput.classList.add("multi__input");
              nairaAmountInput.setAttribute("type", "number");
              nairaAmountInput.setAttribute("placeholder", "enter amount");
              nairaAmountInput.setAttribute("min", "0");

              const inputWrapper4 = document.createElement("div");
              inputWrapper4.classList.add("input-wrapper");
              const inputGroup3 = document.createElement("div");
              inputGroup3.classList.add("input-group");
              const inputIcon2 = document.createElement("div");
              // const dollarImg = document.createElement("img");
              // dollarImg.classList.add("imgs");
              // dollarImg.setAttribute("src", "/images/dollar-icon.png");
              const dollarAmountInput = document.createElement("input");
              dollarAmountInput.classList.add("multi__input");
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

              inputIcon1.append(nairaAmountInput);
              inputGroup2.append(inputIcon1);
              inputWrapper3.append(inputGroup2);

              inputIcon2.append(dollarAmountInput);

              inputGroup3.append(inputIcon2);

              inputWrapper4.append(inputGroup3);

              inputs.append(inputWrapper2, inputWrapper3, inputWrapper4);
              controlsWrap.append(removeInputRow);
              wrapper.append(inputs, controlsWrap);

              inputsContainer.append(wrapper);

    }

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
       selectPaymentMethod.classList.add("multi__input");
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
       nairaAmountInput.classList.add("multi__input");
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
       dollarAmountInput.classList.add("multi__input");
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
   

  return (
    <Container>
      <SideNav />
      <Contain show={userContext.isOpened}>
        <Header />
        <Content>
          <ButtonWrap>
            <button className="partnershipReport__button"> 
              <span><BsDownload /></span> Download CSV
            </button>{" "}
            <button className="partnershipReport__button">
                <span><BsCloudUpload /></span>  Upload CSV
            </button>
          </ButtonWrap>
          <FormWrap>
            <h2>
              Partnership Report{" "}
              <span>
                <img src="/images/apply.png" alt="submit form" />
              </span>{" "}
            </h2>
            <form>
              <div className="input-wrapper">
                <label className="partnershipReport__label">
                  Church Category
                </label>
                <select className="partnershipReport__input">
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
                    <h6> {"Partnerships "} </h6>
                    <NewButtonWrap>
                      <span>New Card </span>
                      <NewCard onClick={() => { createCard();}}> {"+"} </NewCard>
                    </NewButtonWrap>
                  </CardTop>
                  <CardBody>
                    <div className="input-wrapper">
                      <label className="submitAttendance__label">
                        Partnership Type
                      </label>
                      <select
                        className="submitAttendance__input"
                        id="selectPartnership"
                      >
                        <option value={""}>select partnership type</option>
                        <option value={"Bible Sponsorship"}>
                          Bible Sponsorship
                        </option>
                        <option value={"Loveworld Plus"}>Loveworld Plus</option>
                        <option value={"Loveworld Sat"}>Loveworld Sat</option>
                        <option value={"Loveworld TV Ministry"}>
                          {" "}
                          Loveworld TV Ministry
                        </option>
                        <option value={"Rhapsody"}>Rhapsody</option>
                        <option value={"Loveworld Radio"}>
                          Healing School
                        </option>
                        <option value={"PCDL"}>PCDL</option>
                        <option value={"Loveworld Radio"}>
                          Innercity Mission
                        </option>
                        <option value={"Loveworld Radio"}>
                          Teens Advance Partnership
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
                                <select className="multi__input">
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
                                  Amount <img className="imgs"  src="/images/naira-icon.png" />
                                </label>
                                <InputIcon>
                                  {/* <img src="/images/naira-icon.png" /> */}
                                  <input
                                    type="number"
                                    className="multi__input"
                                    placeholder={"enter amount"}
                                    min="0"
                                  />
                                </InputIcon>
                              </div>
                            </div>
                            <div className="input-wrapper">
                              <div className="input-group">
                                <label className="partnershipReport__label">
                                  Amount <img className="imgs" src="/images/dollar-icon.png" />
                                </label>
                                <InputIcon>
                                  {/* <img src="/images/dollar-icon.png" /> */}
                                  <input
                                    type="number"
                                    className="multi__input"
                                    placeholder={"enter amount"}
                                    min="0"
                                  />
                                </InputIcon>
                              </div>
                            </div>
                          </Inputs>
                          <NewCard onClick={() => {createInputRow2();}}>{"+"}</NewCard>
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
              <ButtonWrap>
                <button className="cellReport__button">
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

export default SubmitPartnershipReport;

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