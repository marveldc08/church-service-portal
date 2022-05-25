import React, {useContext,  useState} from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import { BiPlusMedical } from 'react-icons/bi';
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

        function openCreateModal() {
            setHeaderText("Create Service")
                setContent(
                    <React.Fragment>
                        <form>
                            <div className='input-wrapper'>
                                <label className='flabel'>Service Type</label>
                                <input type="text" className="finput" />
                            </div>
                            <div className='input-wrapper'>
                                <label className='flabel'>Service Date</label>
                                <input type="text" className="finput" />
                            </div>
                            <div className='input-wrapper'>
                                <label className='flabel'>Start Time</label>
                                <input type="text" className="finput" />
                            </div>
                            <div className='input-wrapper'>
                                <label className='flabel'>End Time</label>
                                <input type="text" className="finput" />
                            </div>
                            <Buttons>
                                <button className='invite__button' onClick={() => {navigate("")}}>Submit</button>
                                <button className='invite__button' onClick={() => {navigate("")}}>Close</button>
                            </Buttons>
                        </form>
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
                                <input type="text" className="finput" />
                            </div>
                            <div className='input-wrapper'>
                                <label className='flabel'>Service Date</label>
                                <input type="text" className="finput" />
                            </div>
                            <div className='input-wrapper'>
                                <label className='flabel'>Start Time</label>
                                <input type="text" className="finput" />
                            </div>
                            <div className='input-wrapper'>
                                <label className='flabel'>End Time</label>
                                <input type="text" className="finput" />
                            </div>
                            <Buttons>
                                <button className='invite__button' onClick={() => {navigate("")}}>Submit</button>
                                <button className='invite__button' onClick={() => {navigate("")}}>Close</button>
                            </Buttons>
                        </form>
                    </React.Fragment>
                )
        };

    const userContext  = useContext(Context)

  return (
      <Container>
          <SideNav />
          <Contain show={userContext.isOpened}>
            <Header />
            <Content>
                <Wrapper>
                   <button className='invite__button' onClick={() => {toggle(); openCreateModal();}}><span><BiPlusMedical /></span> Create</button>
                </Wrapper>
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
     span{
        padding: 0px 8px;
      }

      &:hover {
            background: white;
            color: rgba(24, 35, 89, 0.85);
        }
    `;

    const Buttons = styled.div`
        display: flex;
        justify-content: flex-end;
        padding: 10px;
        font-size: 15px;
        font-weight: 400;
    `;
   
 
export default AllServices;