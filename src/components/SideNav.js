import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
function SideNav() {
  return (
     <Nav></Nav>
  )
}

export default SideNav
const Nav = styled.div`
     flex: 20%;
     padding: 10px 20px;
     height: 100vh;
     background-color: #023364; 
`