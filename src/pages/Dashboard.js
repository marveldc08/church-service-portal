import React from 'react'
import Header from '../components/Header'

import styled from "styled-components";
import Chart from "chart.js/auto";
import './Dashboard.css';
//import { getRelativePosition } from "chart.js/helpers";
function Dashboard() {
    const ctx = document.getElementsByClassName('reportsByGroup');
    let chartStatus = Chart.getChart("reportsByGroup");
    if (chartStatus !== undefined) {
      chartStatus.destroy();
    }  
    const data = {   
        labels: ['Red','Blue','Yellow'],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    }
   const chart = new Chart( ctx, {
     type: "pie",
     data: data,
     // borderColor: "red",
     options: {
       devicePixelRatio: 10
     },
   });
 
  return (
    <Container>
      <Header />
      <Wrap>
        <canvas className="reportsByGroup"></canvas>
       
      </Wrap>
    </Container>
  );
}

export default Dashboard

const Container = styled.div`
  
`;
const Wrap =styled.div`
    width: 400px;
    height: 400px;
    canvas{
        width: 100%;
        height: 100%;
        //border: 4px solid #ff0000; 
    }
`
