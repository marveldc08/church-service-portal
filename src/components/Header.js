import React, { useState } from 'react'

import styled from 'styled-components';
function Header() {
     const [burgernav, setBurgernav] = useState(false);
  return (
    <Nav>
      <LeftMenu>
        <span>
          <i
            className="fas fa-bars"
            aria-hidden="true"
            onClick={() => setBurgernav(true)}
          ></i>
        </span>
      </LeftMenu>

      <BurgerNav show={burgernav}>
        <Close>
          <span>
            <i
              className="fas fa-times"
              aria-hidden="true"
              onClick={() => setBurgernav(false)}
            ></i>
          </span>
        </Close>

        <li>
          <a>
            <span>Home</span>
            <i className="fas fa-home" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a>
            <span>Our Services</span>
            <i className="fas fa-hands primary" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a>
            <span>About Us</span>
            <i className="fas fa-seedling" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a>
            <span>Contact Us</span>
            <i className="fas fa-phone-alt" aria-hidden="true"></i>
          </a>
        </li>

        <Foot>
          <span>CopyRight 2022. All Rights Reserved.</span>
        </Foot>
      </BurgerNav>
      <UserImg src="./images/admin.jpg" />
    </Nav>
  );
}

export default Header


const Nav = styled.nav`
   height: 70px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: #ffffff;
   padding: 0 39px;
   overflow: hidden;
   border-bottom: 1px solid #808080;
   background: #e5f2ff;
`

const UserImg =styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
`
const LeftMenu =styled.div`
 align-items: center;
 cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: darkblue;
  width: 300px;
  z-index: 16;
  padding: 20px;
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: end;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.2s ease-in;

  li {
    padding: 15px 0;
    padding-left: 3px;
    border-bottom: 1px solid #ffffff;
    cursor: pointer;

    a {
      span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;
        color: #ffffff;
        padding-left: 4px;
      }
      &:hover {
        span:after {
          transform: scaleX(1);
          opacity: 1;
        }
      }
      i.fa-home,
      .fa-hands,
      .fa-seedling,
      .fa-phone-alt {
        color: #ffffff;
      }
    }
  }
`;
const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  span {
    i.fa-times {
      color: #ffffff;
    }
  }
`;
const Foot = styled.div`
  position:absolute;
  bottom: 35px;
  display: flex;
  justify-content: center;
  padding-left: 12px;
  flex-direction: column;
  color: #ffffff;
  font-size: 12px;
`