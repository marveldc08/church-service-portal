import styled from 'styled-components';
import React from 'react'
import { BeatLoader } from "react-spinners";

function Loader() {
  return (
    <Container>
     
      
      <BeatLoader size={72} color={'blue'} loading/>
    </Container>

  )
}

export default Loader

const Container= styled.div`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 
`

