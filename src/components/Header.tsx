import React, { useState, useContext, useEffect} from 'react'
import { FaCaretDown } from 'react-icons/fa';
import { FaCogs } from 'react-icons/fa';
import { BiArrowToLeft } from 'react-icons/bi';
import { CSSTransition } from "react-transition-group";
import { AiOutlineBars } from "react-icons/ai";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import styled from 'styled-components';
import Context from './Contexts';
import './Header.css';
import {useNavigate, Link} from "react-router-dom";
import { useStorage, useGetStorage } from "../utilities/LocalStorage";

  const imageArray = [
    './images/icon1.jpeg',
    './images/icon2.jpg',
    './images/icon3.png',
    './images/icon4.jpg',
    './images/icon5.jpg',
  ]
  function Header() {
     const userContext = useContext(Context);
     const [iconSrc, setIconSrc] = useState('');
     useEffect(() => {
        let randomNum = Math.floor(Math.random() * imageArray.length); 
        setIconSrc(imageArray[randomNum])
     }, [iconSrc])
     
      return (
          <Nav>
          <LeftMenu>
              <span>
              {userContext.isOpened ? <AiOutlineBars className ='icon' onClick={()=> {userContext.collapseSideNav()}} /> : <RiBarChartHorizontalLine className ='icon' onClick={()=> {userContext.openSideNav()}}/>}
              </span>
          </LeftMenu>
      
        <Isme>
          <Name>
            <AdminsName>{userContext.adminFirstName} {userContext.adminLastName}</AdminsName>
            <ChurchAdmin>{userContext.adminRole}</ChurchAdmin>
          </Name>
          
          <UserImg src={iconSrc} />
          <NavItem icon={<FaCaretDown />}>
            <DropdownMenu className="dropdown"></DropdownMenu>
          </NavItem>
        </Isme>
          
          </Nav>
        );
}
  interface Inav {
    icon?: JSX.Element;
    children: JSX.Element;
  }
 function NavItem(props: Inav) {
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
interface Idropmenu {
  className: string;
}
function DropdownMenu(props:Idropmenu) {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(150);
  const userContext = useContext(Context);

  function handleSignout(){
    const token = localStorage.getItem('token');
    if(token){
      localStorage.removeItem('token')
      console.log(localStorage.length)
      console.log(localStorage)
      navigate('/')
    }
    else{
      console.log('no token')
    }
  }
  function calcHeight(el: { offsetHeight: number; }) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
   interface Idrop{
     active?: boolean;
     leftIcon?: JSX.Element;
     rightIcon?: JSX.Element;  
      
     children?: string;
     goToMenu?: string;
   }
   function DropdownItem(props: Idrop) {
   
     return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className={props.active ? 'hi':"icon-button"}>{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  const navigate = useNavigate();
  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
            <DropdownItem active >{ 'Hi ' + userContext.adminFirstName}</DropdownItem>
            <DropdownItem
              leftIcon={<FaCogs />}
              goToMenu="settings">
              Settings
            </DropdownItem>
            <div onClick={() => { handleSignout(); navigate('/'); userContext.signOut();} }>
              <DropdownItem
                  leftIcon={<BiArrowToLeft />}
                goToMenu="Sign Out" >
                  Sign Out
                
              </DropdownItem>
            </div>
        </div>
      </CSSTransition>    
    </div>
 );
}

export default Header

interface Iprops{
  className: string;
}

const Nav = styled.nav`
   height: 70px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: #ffffff;
   padding: 0 39px;
   overflow: hidden;
   border-bottom: 1px solid #808080;
   /* background: #fafbfd; */
   z-index: 9;
   .icon{
     width: 30px;
     height: 30px;
   }
`
const AdminsName = styled.div`
  margin-right: 25px;
  display: flexbox;
  align-items: center;
`
const Name =styled.div``

const ChurchAdmin = styled.div`
  text-align: center;
  margin-right: 20px;
  font-weight: bold;
`

const UserImg =styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right:10px;
`
const Isme=styled.div`
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
const dropdownRef =styled.div``

