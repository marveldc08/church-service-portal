import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BsCheck2Circle} from 'react-icons/bs';

function Redirect() {
  return (
    <Container>
      <Content>
        <div>
          <BsCheck2Circle className = 'icon' />
          <h1>Congratulations!! </h1>

          <p>
            <b>
              <i>Your account has been successfuly created</i>
            </b>
          </p>
          <p>
            Click <Link to="/">here</Link> to continue to login.
          </p>
        </div>
      </Content>
    </Container>
  );
}

export default Redirect;


const Container = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #f1f2f3;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 650px;
  height: 60;
  background-color: white;
  div {
    padding: 10px 30px;
    text-align: center;

    h1 {
      color: #008000;
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    p {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 15px;
      a{
        text-decoration: underline;
      }
    }
    .icon{
      color: #008000;
      font-size: 200px;
      margin: 0px auto;
    }
  }
`;