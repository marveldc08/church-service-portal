import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import {useNavigate} from "react-router-dom";

import {
  Wrapper,
  Header,
  StyledModal,
  HeaderText,
  Close,
  Content,
  Backdrop,
} from './modal.style';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
    isShown,
    hide,
    modalContent,
    headerText,
  }) =>
 {
    const navigate = useNavigate();
  const modal = (
          <React.Fragment>
      <Backdrop />
      <Wrapper>
        <StyledModal>
        <Close onClick={hide}>X</Close>
          <Header>
            <HeaderText>{headerText}</HeaderText>  
          </Header>
          <Content>
            {modalContent}
            <form>
                    <label>Email:</label>
                    <input type="email"></input>
                    <label>Password:</label>
                    <input type="password"></input>
                    <button onClick={() => {navigate("/dashboard")}}> Log In</button>
            </form>
         
          </Content>
         
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal
