import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Redirect() {
  return (
    <Container>
      <Content>
        <div>
          <h1>Congratulations!! </h1>

          <p>
            <b>
              <i>Your account has been successfuly created</i>
            </b>
          </p>
          <p>
            Kindly follow the link below to login to your account with your
            email and password to begin your administrative work.
          </p>
          <p>
            Click <Link to="/">here</Link> to continue to login.
          </p>
        </div>
      </Content>
    </Container>
  );
}

export default Redirect


const Container = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 950px;
  height: 50vh;
  background-color: #f9f9f9;
  div {
    padding: 0px 30px;

    h1 {
      color: #008000;
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    p {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 15px;
      a{
          text-decoration: underline;
      }
    }
  }
`;