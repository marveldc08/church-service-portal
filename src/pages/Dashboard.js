import React from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import Stats from '../components/Stats';

import styled from "styled-components";
import Chart from "chart.js/auto"; 
import './Dashboard.css';
//import { getRelativePosition } from "chart.js/helpers";
function Dashboard() {

    //code for Charts starts...
    const ctx = document.getElementById('reportsByGroup');
    //const ctx2 = document.getElementById('reortsByTime');
    let chartStatus = Chart.getChart("reportsByGroup");
    //let secondChartStatus = Chart.getChart("reportsByTime")
    if (chartStatus !== undefined ) { 
      chartStatus.destroy();
      //secondChartStatus.destroy();
    } 

    const dataByGroup = { 
      labels: ["Alakuko", "Central", "U-Turn", "Otta", "Iyana Ipaja", "Ijoko"],
      datasets: [
        {
          label: "Dataset For Reports By Group",
          data: [30, 50, 50, 20, 30, 10],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(245, 205, 96)",
            "rgb(255, 125, 86)",
            "rgb(245, 205, 67)"
          ],
          hoverOffset: 4,
        },
      ],
    };
   const firstChart = new Chart( ctx, {
     type: "pie",
     data: dataByGroup,
     // borderColor: "red",
     options: {
       devicePixelRatio: 10
     },
   }); 

  
   //Code for Charts ends...
 
  return (
    <Container>
      <SideNav />
      <Contain>
        <Header />
        <Content>
            <h3>Welcome</h3>
          <Stats />
          <Wrap>
            <Canvas id="reportsByGroup"></Canvas>
           
          </Wrap>
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
const Wrap =styled.div`
    width: 250px;
    height: 250px;
    padding-top: 1em;
    /* canvas{
        width: 100%;
        height: 100%;
        border: 4px solid #ff0000; 
    } */
`
const Canvas = styled.canvas`
    width: 100%;
     height: 100%;
`
