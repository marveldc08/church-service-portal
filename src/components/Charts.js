import React from 'react'
import { VictoryChart,VictoryLine, VictoryPie, VictoryTheme } from 'victory'; 
import styled from 'styled-components'
function Charts() {
  return (
    <Container>
      <PieChart>
        <Wrap>
          <h5>Reports By Group</h5>
          <VictoryPie
            data={[
              { x: "Alakuko Group", y: 30 },
              { x: "Central Group", y: 50 },
              { x: "U-Turn", y: 50 },
              { x: "Otta Group", y: 20 },
              { x: "Iyana Ipaja Group", y: 30 },
              { x: "Ijoko Group", y: 10 },
            ]}
            //animate={{ duration: 2000 }}
            colorScale={["tomato", "navy", "gold", "cyan", "orange", "blue"]}
            //groupComponent={<g transform="rotate(90)" />}

            height={400}
            width={400}
          />
        </Wrap>
        <Wrap>
          <h5>Reports By Time</h5>
          <VictoryPie
            className="border"
            data={[
              { x: "Alakuko Group", y: 30 },
              { x: "Central Group", y: 50 },
              { x: "U-Turn", y: 50 },
              { x: "Otta Group", y: 20 },
              { x: "Iyana Ipaja Group", y: 30 },
              { x: "Ijoko Group", y: 10 },
            ]}
            //animate={{ duration: 2000 }}
            colorScale={["tomato", "navy", "gold", "cyan", "orange", "blue"]}
            //groupComponent={<g transform="rotate(90)" />}
            height={400}
            width={400}
          />
        </Wrap>
      </PieChart>
      <LineChart>
        <h5>Financial Report</h5>
        <VictoryChart theme={VictoryTheme.material}  height={200}   width={500} >
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc" },
            }}
            data={[
              { x: "Jan", y: 2.5 },
              { x: "Feb", y: 3.6 },
              { x: "Mar", y: 40 },
              { x: "Apr", y: 100 },
              { x: "May", y: 90 },
              { x: "June", y: 9.0 },
              { x: "July", y: 230 },
              { x: "Aug", y: 80.99 },
              { x: "Sept", y: 95.3 },
              { x: "Oct", y: 670 },
              { x: "Nov", y: 90 },
              { x: "Dec", y: 900 },
            ]}
            
           
            padding={{ top: 0, bottom: 0 }}
          />
        </VictoryChart>
      </LineChart>
    </Container>
  );
}

export default Charts

const Container =styled.div`

`
const PieChart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3em;
  border-radius: 10px;
  background: #ffffff;
  margin: 1em 0;
`
const LineChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  padding: 3em;
  border-radius: 10px;
  background: #ffffff;
  margin-top: 1em ;
  //margin-bottom: 3em;
`;
const Wrap =styled.div`
  width: 380px;
  height: 380px;
  padding: 3px;

  h5{
    margin-bottom: 1em;
  }
`