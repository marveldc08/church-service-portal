import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import 'animate.css';
import {useNavigate} from "react-router-dom";
import { BiXCircle } from 'react-icons/bi';

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
    
  const modal = (
    <React.Fragment>
      <Backdrop />
      <Wrapper className='animate__animated animate__fadeIn'>
        <StyledModal>
        
          <Header>
            <HeaderText>
              {headerText}
              
            </HeaderText>  
            <Close onClick={hide}><BiXCircle/></Close>
          </Header>
          <Content>
            {modalContent}
          </Content>
         
        </StyledModal>
      </Wrapper>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal
