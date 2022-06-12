import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: 50%;
  max-width: 950px;
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
  background-color: #f1f1f1; 
  position: relative;
  /* margin: auto; */
  border-radius: 8px;
`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  align-items: center;
  background-color: #01162c; 

`;

export const HeaderText = styled.div`
  color: #ffffff;
  align-self: center;
  color: lightgray;
  font-size: 1.8rem;
  font-weight: 200;
  padding: 10px;
`;

export const Close = styled.div`
  font-size: 1.8rem;
  font-weight:600;
  border: none;
  display:flex;
  justify-content: end;
  align-items: center;
  position:relative;
  padding: 10px;
  top: 2px;
  right: 15px;
  border-radius: 3px;
  /* margin-left: 0.5rem; */
  background: none;
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 10px 50px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Closebutton = styled.div`
  background-color: #003366;
  color: #ffffff;
  padding: 12px 25px;
  margin: 0px 15px;
  width: 180px;
  border-radius: 8px;
  border: 1px solid #003366;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #003366;
    background-color: gold;
    border: 1px solid #003366;
    transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s; 
    cursor: pointer;
  }
`
