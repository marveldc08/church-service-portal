import React from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import Stats from '../components/Stats';
import Charts from '../components/Charts';
import styled from "styled-components";

import './Dashboard.css';
function Dashboard() {

    //code for Charts starts...
    
   //Code for Charts ends...
 
  return (
    <Container>
      <SideNav />
      <Contain>
        <Header />
        <Content>
          <h3>Welcome</h3>
          <Stats />
          <Charts />
        </Content>
      </Contain>
    </Container>
  );
}

export default Dashboard

const Container = styled.div`
  display: flex;
 
`
const Contain =styled.div`
    flex: 80;
`
const Content = styled.div`
  background: #e5f2ff;
  height: calc(100vh - 70px);
  padding: 1rem;
`;

