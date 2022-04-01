import React from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import Stats from '../components/Stats';
import Charts from '../components/Charts';
import styled from "styled-components";

import './Dashboard.css';
function Dashboard() {
 
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
 
  position: relative;
`
const Contain =styled.div`
    position: relative;
    margin-left: 300px;
    height: 100vh;
    overflow: auto;
    background-color: #f1f2f3;
    &::-webkit-scrollbar{
          display: none;
    }
`
const Content = styled.div`
  background: #f1f2f3;
  height: calc(100vh - 70px);
  padding: 1rem;
`;

