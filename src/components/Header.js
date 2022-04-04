import React, { useState, useEffect, useRef, useContext} from 'react'
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { CSSTransition } from "react-transition-group";
import { AiOutlineBars } from "react-icons/ai";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import styled from 'styled-components';
import Context from './Contexts';

function Header() {
     //const [burgernav, setBurgernav] = useState(false);
     const userContext = useContext(Context);
  return (
    <Nav>
      <LeftMenu>
        <span>
          {userContext.isOpened ? <AiOutlineBars className ='icon' onClick={()=> {userContext.collapseSideNav()}} /> : <RiBarChartHorizontalLine className ='icon' onClick={()=> {userContext.openSideNav()}}/>}
        </span>
      </LeftMenu>

     
      <Isme>
        <h4 className='Adminsname'>Stephen Nzubechukwu</h4>
        {/* <h5>Church Admin</h5> */}
        <UserImg src="./images/admin.jpg" />
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu className="dropdown"></DropdownMenu>
        </NavItem>
      </Isme>
    
    </Nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className={props.active ? 'hi':"icon-button"}>{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem active >Hi Stephen</DropdownItem>
           <DropdownItem
             leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Settings
          </DropdownItem>
           <DropdownItem
              leftIcon={<ArrowIcon />}
              rightIcon={<ChevronIcon />}
             goToMenu="Sign Out">
             Sign Out
          </DropdownItem>
         </div>
       </CSSTransition>    
    </div>
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
   background: #fafbfd;
   z-index: 9;
   .icon{
     width: 30px;
     height: 30px;
   }
`

const UserImg =styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right:10px;
`
const Isme=styled.div`
  display: flex;
  
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

const dropdownRef =styled.div``



