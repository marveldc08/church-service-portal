import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: 50%;
  outline: 0;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  background-color: #003366; 
  position: relative;
  margin: auto;
  border-radius: 8px;
`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
  align-items: center;
`;

export const HeaderText = styled.div`
  color: #fff;
  align-self: center;
  color: lightgray;
`;

export const Close = styled.div`
  font-size: 1.8rem;
  font-weight:600;
  border: none;
  display:flex;
  justify-content: end;
  align-items: center;
  position:relative;
  padding: 20px;
  top: 2px;
  right: 0px;
  border-radius: 3px;
  /* margin-left: 0.5rem; */
  background: none;
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 20px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
  
`;
