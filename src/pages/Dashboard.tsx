import React, {useContext, useState, useEffect, useMemo} from 'react';
import { useNavigate } from 'react-router';
import Header from '../components/Header'
import SideNav from '../components/SideNav';
import Stats from '../components/Stats';
import Charts from '../components/Charts';
import styled from "styled-components";
import Context from '../components/Contexts';


function Dashboard() {
  const userContext = useContext(Context);
  return (
    <Container>
      <SideNav />
      <Contain show={userContext.isOpened}>
        <Header />
        <Content>
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
    background-color: aliceblue;
    transition: all 0.35s ease; 
    &::-webkit-scrollbar{
          display: none;
    }
`
const Content = styled.div`
  background-color: aliceblue;
  height: calc(100vh - 70px);
  padding: 1rem;

  h3{
    margin-bottom: 1em;
    color: rgba(24, 35, 89, 0.85) !important;
  }
`


