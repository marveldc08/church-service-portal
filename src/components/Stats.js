import React from 'react';

import styled from 'styled-components';

function Stats() {
    return (
      <Container>
        <Wrap>
          <Icon>
            <img src="./images/admin.jpg" />
          </Icon>
          <Detail>
            <Figure>72</Figure>
            <p>Churches</p>
          </Detail>
        </Wrap>
        <Wrap>
          <Icon>
            <img src="./images/admin.jpg" />
          </Icon>
          <Detail>
            <Figure>203</Figure>
            <p>Submitted Reports</p>
          </Detail>
        </Wrap>
        <Wrap>
          <Icon>
            <img src="./images/admin.jpg" />
          </Icon>
          <Detail>
            <Figure>130</Figure>
            <p>Completed Reports</p>
          </Detail>
        </Wrap>
        <Wrap>
          <Icon>
            <img src="./images/admin.jpg" />
          </Icon>
          <Detail>
            <Figure>70</Figure>
            <p>Awaiting Acknowledgement</p>
          </Detail>
        </Wrap>
        <Wrap>
          <Icon>
            <img src="./images/admin.jpg" />
          </Icon>
          <Detail>
            <Figure>50</Figure>
            <p>Churches With Reports</p>
          </Detail>
        </Wrap>
        <Wrap>
          <Icon>
            <img src="./images/admin.jpg" />
          </Icon>
          <Detail>
            <Figure>40</Figure>
            <p>Churches With Complete Reports</p>
          </Detail>
        </Wrap>
        <Wrap>
          <Icon>
            <img src="./images/admin.jpg" />
          </Icon>
          <Detail>
            <Figure>30</Figure>
            <p>Churches With Acknowledgement</p>
          </Detail>
        </Wrap>
        <Wrap>
          <Icon>
            <img src="./images/admin.jpg" />
          </Icon>
          <Detail>
            <Figure>15</Figure>
            <p>Churches With Missing Reports</p>
          </Detail>
        </Wrap>
      </Container>
    );
}

export default Stats;

const Container = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    justify-content: center;
    align-items: center;
    padding: 1em, 2em;
`
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgb(249, 249, 249, 0.1);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding-top: 1em;
  padding-bottom: 1em;
`
const Icon = styled.div`
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 6px;
  }
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
        font-size: 12px;
        line-height: 1.3;
        opacity: 0.6;
        text-transform: capitalize;
  }
`;
const Figure = styled.span`
    font-weight: 500;
    line-height: 1.25;
    font-size: 2em;
    text-transform: capitalize;
`