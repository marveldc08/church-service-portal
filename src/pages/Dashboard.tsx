import React, {useContext, useState, useEffect, useMemo} from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav';
import Stats from '../components/Stats';
import Charts from '../components/Charts';
import styled from "styled-components";
import Context from '../components/Contexts';
import Modal from '../components/Modal';
import USEMODAL from '../components/USEMODAL';
// import Loader from '../components/Loader';
// import {useNavigate} from "react-router-dom";

import { useGet, usePost } from '../utilities/HttpConnection';
import requests from '../utilities/requests';
import './Dashboard.css';



function Dashboard() {
  const userContext = useContext(Context);
  const useApiCall = useContext(Context);
        //MODAL
  //       const navigate = useNavigate();
  // const {isShown, toggle } = USEMODAL();
  // const content = <React.Fragment>
  //                   <h3>Hey, I'm a model.</h3>
  //                   <form>
  //                   <label>Email:</label>
  //                   <input type="email"></input>
  //                   <label>Password:</label>
  //                   <input type="password"></input>
  //                   <button onClick={() => {navigate("/Error")}}>Error</button>
  //                   </form>
  //                 </React.Fragment>;
        // MODAL END
  //const results = useGet(requests.fetchActionMovies);
  // const content = <React.Fragment><h3>Hey, I'm a model.</h3></React.Fragment>;
        //MODAL END
  const { isLoading, serverError, apiData } = useGet(requests.fetchActionMovies);
  // const {isLoading, serverError, responsMessage } = usePost({email: 'mikecodes@gmail.com', password:'mikecodes12344'})
   if (isLoading == true){
      console.log('loading.....')
   }else if(isLoading == false && !serverError){
      console.log(apiData)
   }

   
  return (
    <Container>
      <SideNav />
      <Contain show={userContext.isOpened}>
        <Header />
        <Content>

        {/* <button onClick={toggle}>Open modal</button> 
           <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={''} /> */}
          {/* <Loader /> */}

          <Stats />
          <Charts />
        </Content>
      </Contain>
    </Container>
  );
}

export default Dashboard

interface Iprops{
  show: boolean;
}
const Container = styled.div` 
  position: relative;
`
const Contain =styled.div<Iprops>`
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


