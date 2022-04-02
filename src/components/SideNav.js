import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
/* import { AiFillCaretDown, AiFillCaretRight, AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown, AiFillCaretRight, AiOutlineBars } from "react-icons/ai";
import { IoDesktopOutline } from "react-icons/io5";
import { BiGridAlt, BiGridSmall, BiCollection, BiChurch, BiCopyright,BiLogOut } from "react-icons/bi";
import { BsFillCollectionFill } from "react-icons/bs";
import { MdAdminPanelSettings, MdOutlineAdminPanelSettings, MdHomeRepairService } from "react-icons/md";
import { useContext } from 'react'; */
import { AiFillCaretDown, AiFillCaretRight} from "react-icons/ai";

import { BiGridAlt, BiCollection, BiChurch, BiCopyright,BiLogOut } from "react-icons/bi";
import { MdAdminPanelSettings, MdHomeRepairService } from "react-icons/md";
import { useContext } from 'react';
import Context from './Contexts';
function SideNav(props) {
     const [toggleDropDown, setToogleDropDown] = useState(false);
     const userContext = useContext(Context);
  return (
     <Nav show = {userContext.isOpened}>
          <LogoDiv>
               <div className={userContext.isOpened? 'logoCont': 'hide'}>
                    <img src='/images/logo-light.png'/>
               </div>
               <div className='logoText'>CELZ4</div>
          </LogoDiv>
          <Navigations>
               <ul className='menu'>
                    <li className='items'>
                         <a href='#'>
                              <BiGridAlt className='icon' />
                              <span className='link-name'>Dashboard</span>
                         </a>
                    </li>
                    <li className='items'>
                         <a href='#'>
                              <MdHomeRepairService className='icon' />
                              <span className='link-name'>Manage Service</span>
                         </a>
                    </li>
                    <li className='items'>
                         <div className='icon-link'>
                              <a href='#'>
                                   <BiCollection className='icon' />
                                   <span className='link-name' onClick={()=>{setToogleDropDown(!toggleDropDown)} }>Manage Report</span>
                              </a>
                              { toggleDropDown ? <AiFillCaretDown className='icon-toggle-down' onClick={()=>{setToogleDropDown(!toggleDropDown)} }/> :  <AiFillCaretRight className='icon-toggle-right' onClick={()=>{setToogleDropDown(!toggleDropDown)} }/>}
                         </div>
                         <ul className={toggleDropDown? 'sub-menu show': 'hide'}>
                              <li><a href='#'>Service Report</a></li>
                              <li><a href='#'>Finacial Report</a></li>
                              <li><a href='#'>Partnership Report</a></li>
                              <li><a href='#'>Attendance Report</a></li>
                              <li><a href='#'>Cell Report</a></li>
                              
                         </ul>
                    </li>
                    <li className='items'>
                         <a href='#'>
                              <BiChurch className='icon' />
                              <span className='link-name'>Manage Church</span>
                         </a>
                    </li>
                    <li className='items'>
                         <a href='#'>
                              <MdAdminPanelSettings className='icon' />
                              <span className='link-name'>Manage Admin</span>
                         </a>
                    </li>
               </ul>
          </Navigations>
          <NavFooter>
               <div className='admin-shortcuts'>
                    <img src='/images/admin.jpg' className={userContext.isOpened? 'show': 'hide'} />
                    <p className={userContext.isOpened? 'admin-details': 'hide'}> 
                         <span className='name'>Michael Chinye</span>
                         <span className='office'>Web Developer</span>
                    </p>
                    <a href=''>
                         <BiLogOut className ='logout-icon' />
                    </a>
               </div>
               <p className={userContext.isOpened? '': 'hide'}>Christ Embasssy Lagos Zone 4 <span><BiCopyright/></span> 2022</p>
          </NavFooter>
     </Nav>
  )
}

export default SideNav
const Nav = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     bottom: 0;
     width: ${props => props.show ? '300px':'78px'};
     height: 100vh;
     background-color: #ffffff; 
     transition: width 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s; 
`
const LogoDiv = styled.div`
     height: 70px;
     padding: 5px 10px;
     color: white;
     display: flex;
     justify-content: center;
     align-items: center;
     border-bottom: 1px solid #c4c4c4;
     background-color: #003366 !important;

     .logoCont{
          flex: 60%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          img{
               width: 100%;
               height: 100%;
               object-fit: cover;
          }
     }
     .logoText{
          flex: 40%;
          color: #ffffff;
          font-size: 20px;
          font-weight: 800;
          font-style: italic;
          display: flex;
          align-items: center;
          
     }
`
const Navigations = styled.nav`
     height: 70vh;
     overflow: auto;
     &::-webkit-scrollbar{
          display: none;
     }
     .menu{
          height: 100%;
          padding-top: 20px;
     }
     .items{
          list-style-type: none;
          position: relative;
          margin: 15px 0px;
          padding: 5px;
          transition: height 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s; 
          .icon-link{
               display: flex;
               align-items: center;
               justify-content: space-between;
          }
          .icon-toggle-down{
               color: #003366;
               cursor: pointer;
          }
          .icon-toggle-right{
               cursor: pointer;
          }
          a{
               display: flex;
               align-items: center;
               text-decoration: none;
               .icon{
                    min-width: 78px;
                    height: 40px;
                    line-height: 40px;
                    border-radius: 4px;
                    color: #003366;
                    cursor: pointer;
                    transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s; 
               }
               .icon:hover{
                    color: gold;

               }
               .link-name{
                    color: #003366;
                    font-size: 18px;
                    font-weight: 600;
                    padding-left: 15px;
               }
          }
          a:hover{
               text-decoration: none;
          }
          .sub-menu{
               padding: 6px 6px 14px 80px;
               background-color: #fafbfd;
               li{
                    list-style-type: none;
                    cursor: pointer;
                    padding: 10px ;
                    a{
                         color: #003366;
                         font-size: 14px;
                         font-weight: 600;
                         transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s; 
                    }
                    a:hover{
                         color: gold;
                    }
               }
          }
          &:hover{
               .icon, .link-name, .icon-toggle-right, .icon-toggle-down{
                    color: gold;
               }
          }
     }
     .iconContainer{
          width: 40px;
          height: 40px;
          
          display: flex;
          padding: 5px;
          justify-content: center;
          align-items: center;
          background-color: #003366 !important;
          
     }

`
const NavFooter = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     height: calc(100vh - (70vh + 70px));
     background-color: #003366;
     .admin-shortcuts{
          display: flex;
          justify-content: space-between;
          padding: 5px;
          width: 100%;
          position: relative;
          img{
               width: 40px;
               height: 40px;
               object-fit: cover;
               border-radius: 50px;
               cursor: pointer;

          }
          .admin-details{
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: center;
               padding: 2px;
               .name{
                    color: #ffffff;
                    font-size: 14px;
                    font-weight: 500;
                    padding: 5px 0px;
               }
               .office{
                    color: #ffffff;
                    font-size: 10px;
                    font-weight: 600;
                     

               }
               
          }
          a{
               .logout-icon{
                    color: white;
                    width: 35px;
                    height: 35px;
                    transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s;
               }
               .logout-icon:hover{
                    color: gold;
               }
          }

     }
     p{
          color: #ffffff;
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          line-height: 14px;
          transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s; 
          cursor: pointer;
     }
     p:hover{
          color: gold;
          font-weight: 700;
     }
`