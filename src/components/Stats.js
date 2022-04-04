import React from 'react';

import styled from 'styled-components';

import { BiChurch } from "react-icons/bi";
import {
  AiOutlineFileDone,
  AiOutlineFileText,
  AiOutlineFileSync,
  AiOutlineFileProtect,
  AiOutlineFileSearch
} from "react-icons/ai";


function Stats() {
    return (
      <Container>
        <Wrap>
          <IconWrap className="bg-teal-active ">
            <BiChurch className="icons" />
          </IconWrap>
          <Detail>
            <Figure>72</Figure>
            <Highlight>Churches</Highlight>
          </Detail>
        </Wrap>
        <Wrap>
          <IconWrap className="bg-primary-active ">
            <AiOutlineFileText className="icons" />
          </IconWrap>
          <Detail>
            <Figure>203</Figure>
            <Highlight>Submitted Reports</Highlight>
          </Detail>
        </Wrap>
        <Wrap>
          <IconWrap className="bg-success-active ">
            <AiOutlineFileDone className="icons" />
          </IconWrap>
          <Detail>
            <Figure>130</Figure>
            <Highlight>Completed Reports</Highlight>
          </Detail>
        </Wrap>
        <Wrap>
          <IconWrap className="bg-warning-active ">
            <AiOutlineFileSync className="icons" />
          </IconWrap>
          <Detail>
            <Figure>70</Figure>
            <Highlight>Awaiting Acknowledgement</Highlight>
          </Detail>
        </Wrap>
        <Wrap>
          <IconWrap className="bg-primary-active ">
            <AiOutlineFileText className="icons" />
          </IconWrap>
          <Detail>
            <Figure>50</Figure>
            <Highlight>Churches With Reports</Highlight>
          </Detail>
        </Wrap>
        <Wrap>
          <IconWrap className="bg-success-active ">
            <AiOutlineFileDone className="icons" />
          </IconWrap>
          <Detail>
            <Figure>40</Figure>
            <Highlight>Churches With Complete Report</Highlight>
          </Detail>
        </Wrap>
        <Wrap>
          <IconWrap className="bg-info-active ">
            <AiOutlineFileProtect className="icons" />
          </IconWrap>
          <Detail>
            <Figure>30</Figure>
            <Highlight>Acknowledged Churches</Highlight>
          </Detail>
        </Wrap>
        <Wrap>
          <IconWrap className="bg-danger-active ">
            <AiOutlineFileSearch className="icons" />
          </IconWrap>
          <Detail>
            <Figure>15</Figure>
            <Highlight>Churches With Missing Report</Highlight>
          </Detail>
        </Wrap>
      </Container>
    );
}

export default Stats;

const Container = styled.div`
    display: grid;
    grid-gap: 23px;
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
  padding: 1em;
  
`
const IconWrap = styled.div`
  //position: relative;
  line-height: 1;
  white-space: nowrap;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  
`;
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: end;

` 
const Highlight = styled.p`
  font-size: 11px;
  line-height: 1.3;
  opacity: 0.6;
  text-transform: capitalize;
  display: flex;
  justify-content: end;
  align-items: end;
`;
const Figure = styled.span` 
    font-weight: 500;
    line-height: 1.25;
    font-size: 1.5em;
    text-transform: capitalize;
    display: flex;
    justify-content: end;
    align-items: end;
`