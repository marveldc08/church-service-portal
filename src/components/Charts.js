import React from 'react'
import { VictoryChart,VictoryLine, VictoryPie, VictoryTheme } from "victory"; 
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
        <VictoryChart>
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
            theme={VictoryTheme.material}
            height={200}
            width={200}
            padding={{ top: 1, bottom: 1 }}
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
  padding: 16px;
`
const LineChart = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;
  padding: 16px;
`;
const Wrap =styled.div`
  width: 400px;
  height: 400px;
`