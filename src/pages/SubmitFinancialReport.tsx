import React, {useContext} from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav';
import  Styled  from 'styled-components';
import Context from '../components/Contexts';
import { useNavigate } from 'react-router';
// import 'bootstrap/dist/css/bootstrap.min.css';
import FinancialReportCard  from "../components/FinancialReportCard";
import FileCSV from '../components/FileCSV';
import styled from 'styled-components';

function SubmitFinancialReport() {
    const userContext = useContext(Context);
        
  return (
      
    <Container>   
        <SideNav /> 
        <Contain show={userContext.isOpened}>
           <Header />
            <Content>
                <DIV>
                    <FileCSV />
                </DIV>
                {/* <FinancialReportCard /> */}
            </Content>
        </Contain>
    </Container>
  )
}

export default SubmitFinancialReport



interface Iprops{
    show: boolean;
  }
  
  const Container = Styled.div` 
  position: relative;
  `
  const Contain =Styled.div<Iprops >`
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

const DIV =styled.div`
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* border: 10px solid red; */
`
