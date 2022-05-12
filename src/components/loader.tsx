import styled from 'styled-components';
import React from 'react'
<<<<<<< HEAD
//import { BeatLoader } from "react-spinners";
=======
// import { BeatLoader } from "react-spinners";
>>>>>>> 5d7dcd73748eb71f12a45db8eece4af10fb1fd05

function Loader() {
  return (
    <Container>
     
      
      {/* <BeatLoader size={52} color={'blue'} loading/> */}
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

