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
            <Figure className='figure'>72</Figure>
            <Highlight className='highlight'>Churches</Highlight>
          </Detail>
        </Wrap>
        <Wrap>
          <IconWrap className="bg-primary-active ">
            <AiOutlineFileText className="icons" />
          </IconWrap>
          <Detail>
            <Figure className='figure'>203</Figure>
            <Highlight className='highlight'>Submitted Reports</Highlight>
          </Detail>
        </Wrap>
        <Wrap>
          <IconWrap className="bg-success-active ">
            <AiOutlineFileDone className="icons" />
          </IconWrap>
          <Detail>
            <Figure className='figure'>130</Figure>
            <Highlight className='highlight'>Completed Reports</Highlight>
          </Detail>
        </Wrap>
        <Wrap>
          <IconWrap className="bg-warning-active ">
            <AiOutlineFileSync className="icons" />
          </IconWrap>
          <Detail>
            <Figure className='figure'>70</Figure>
            <Highlight className='highlight'>Awaiting Acknowledgement</Highlight>
          </Detail>
        </Wrap>
        <Wrap>
          <IconWrap className="bg-primary-active ">
            <AiOutlineFileText className="icons" />
          </IconWrap>
          <Detail>
            <Figure className='figure'>50</Figure>
            <Highlight className='highlight'>Churches With Reports</Highlight>
          </Detail>
        </Wrap>
        <Wrap>
          <IconWrap className="bg-success-active ">
            <AiOutlineFileDone className="icons" />
          </IconWrap>
          <Detail>
            <Figure className='figure'>40</Figure>
            <Highlight className='highlight'>Churches With Complete Report</Highlight>
          </Detail>
        </Wrap>
        <Wrap>
          <IconWrap className="bg-info-active ">
            <AiOutlineFileProtect className="icons" />
          </IconWrap>
          <Detail>
            <Figure className='figure'>30</Figure>
            <Highlight className='highlight'>Acknowledged Churches</Highlight>
          </Detail>
        </Wrap>
        <Wrap>
          <IconWrap className="bg-danger-active ">
            <AiOutlineFileSearch className="icons" />
          </IconWrap>
          <Detail>
            <Figure className='figure'>15</Figure>
            <Highlight className='highlight'>Churches With Missing Report</Highlight>
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
    @media (min-width: 768px) and (max-width: 1024px){
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-gap: 20px;
    }
    @media (min-width: 768px) and (max-width: 995px){
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-gap: 15px;
    }
    @media (max-width: 767px) {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      grid-gap: 15px;
    }
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
  cursor: pointer;
  &:hover{
    background: #01162c;
    border: 3px solid #01162c;
    .figure, .highlight{
      color: #ffffff;
    }
  }
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