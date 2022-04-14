import React from 'react'
import {
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryTheme,
  VictoryContainer,
} from "victory"; 
import styled from 'styled-components'
function Charts() {
  return (
    <Container>
      <PieChart>
        <MainWap>
          <Wrap>
            <h5>Reports By Group</h5>
            <VictoryPie
              data={[
                { x: 1, y: 30, label: " " },
                { x: "", y: 50, label: " " },
                { x: "", y: 50, label: " " },
                { x: "", y: 20, label: " " },
                { x: "", y: 30, label: " " },
                { x: "", y: 10, label: " " },
              ]}
              //animate={{ duration: 2000 }}
              colorScale={["tomato", "navy", "gold", "cyan", "orange", "blue"]}
              //groupComponent={<g transform="rotate(90)" />}
              height={400}
              width={400}
            />
            <ColorKey>
              <h5>Color Key</h5>
              <ColorGrid>
                <DetailWrap>
                  <Key className="bg-tomato"></Key>
                  <span>Alakuko Group</span>
                </DetailWrap>
                <DetailWrap>
                  <Key className="bg-navy"></Key>
                  <span>Central Group</span>
                </DetailWrap>
                <DetailWrap>
                  <Key className="bg-gold"></Key>
                  <span>U-Turn Group</span>
                </DetailWrap>
                <DetailWrap>
                  <Key className="bg-cyan"></Key>
                  <span>Otta Group</span>
                </DetailWrap>
                <DetailWrap>
                  <Key className="bg-orange"></Key>
                  <span>Iyana Ipaja Group</span>
                </DetailWrap>
                <DetailWrap>
                  <Key className="bg-blue"></Key>
                  <span>Ijoko Group</span>
                </DetailWrap>
              </ColorGrid>
            </ColorKey>
          </Wrap>
          <Wrap>
            <h5>Reports By Time</h5>
            <VictoryPie
              
              data={[
                { x: "", y: 30, label: " " },
                { x: "", y: 50, label: " " },
                { x: "", y: 30, label: " " },
                { x: "", y: 20, label: " " },
                { x: "", y: 37, label: " " },
                { x: "", y: 40, label: " " },
              ]}
              //animate={{ duration: 2000 }}
              colorScale={["tomato", "navy", "gold", "cyan", "orange", "blue"]}
              //groupComponent={<g transform="rotate(90)" />}
              height={400}
              width={400}
            />
            <ColorKey>
              <h5>Color Key</h5>
              <ColorGrid>
                <DetailWrap>
                  <Key className="bg-tomato"></Key>
                  <span>9:45am</span>
                </DetailWrap>
                <DetailWrap>
                  <Key className="bg-navy"></Key>
                  <span>3:00pm</span>
                </DetailWrap>
                <DetailWrap>
                  <Key className="bg-gold"></Key>
                  <span>7:20am</span>
                </DetailWrap>
                <DetailWrap>
                  <Key className="bg-cyan"></Key>
                  <span>2:02pm</span>
                </DetailWrap>
                <DetailWrap>
                  <Key className="bg-orange"></Key>
                  <span>5:00pm</span>
                </DetailWrap>
                <DetailWrap>
                  <Key className="bg-blue"></Key>
                  <span>6:07am</span>
                </DetailWrap>
              </ColorGrid>
            </ColorKey>
          </Wrap>
        </MainWap>
      </PieChart>

      <LineChart>
        <h5>Financial Report</h5>
        <VictoryChart theme={VictoryTheme.material} height={400} width={600}>
          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #ccc" },
            }}
            data={[
              { x: "Jan", y: 2.5 },
              { x: "Feb", y: 39 },
              { x: "Mar", y: 40 },
              { x: "Apr", y: 100 },
              { x: "May", y: 90 },
              { x: "June", y: 9.0 },
              { x: "July", y: 230 },
              { x: "Aug", y: 80.99 },
              { x: "Sept", y: 95.3 },
              { x: "Oct", y: 70 },
              { x: "Nov", y: 90 },
              { x: "Dec", y: 900 },
            ]}
            interpolation="natural"
            padding={{ top: 200, bottom: 200 }}
          />
          <VictoryLine
            style={{
              data: { stroke: "#645200" },
              parent: { border: "1px solid #ccc" },
            }}
            data={[
              { x: "Jan", y: 20.5 },
              { x: "Feb", y: 3.6 },
              { x: "Mar", y: 400 },
              { x: "Apr", y: 10 },
              { x: "May", y: 940 },
              { x: "June", y: 90.0 },
              { x: "July", y: 30 },
              { x: "Aug", y: 67 },
              { x: "Sept", y: 95.3 },
              { x: "Oct", y: 670 },
              { x: "Nov", y: 8 },
              { x: "Dec", y: 90 },
            ]}
            interpolation="natural"
            padding={{ top: 200, bottom: 200 }}
          />
          <VictoryLine
            style={{
              data: { stroke: "#083e55" },
              parent: { border: "1px solid #ccc" },
            }}
            data={[
              { x: "Jan", y: 200.5 },
              { x: "Feb", y: 300.6 },
              { x: "Mar", y: 90 },
              { x: "Apr", y: 800 },
              { x: "May", y: 90 },
              { x: "June", y: 79.6 },
              { x: "July", y: 30 },
              { x: "Aug", y: 67 },
              { x: "Sept", y: 5.3 },
              { x: "Oct", y: 60 },
              { x: "Nov", y: 500 },
              { x: "Dec", y: 10 },
            ]}
            interpolation="natural"
            padding={{ top: 200, bottom: 200 }}
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #ffffff;
  margin: 2em 0;
  padding: 2em;
`
const MainWap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

const Wrap = styled.div`
  width: 380px;
  height: auto;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ColorKey= styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding: 1em;

 h5{
   margin-bottom: 20px;
 }
`
const ColorGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
const DetailWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  margin-bottom: 12px;

  span {
    font-size: 11px;
    line-height: 1.3;
    opacity: 0.8;
    text-transform: capitalize;
  }
`;
const Key = styled.div`
  width: 70px;
  height: 12px;
  margin-right: 4px;
`

const LineChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  padding: 3em;
  border-radius: 10px;
  background: #ffffff;
  margin-top: 1em;
  //margin-bottom: 3em;
`;