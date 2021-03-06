import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
/* import { AiFillCaretDown, AiFillCaretRight, AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown, AiFillCaretRight, AiOutlineBars } from "react-icons/ai";
import { BiGridAlt, BiGridSmall, BiCollection, BiChurch, BiCopyright,BiLogOut } from "react-icons/bi";

import { MdAdminPanelSettings, MdOutlineAdminPanelSettings, MdHomeRepairService } from "react-icons/md";
import { useContext } from 'react'; */
import { AiFillCaretDown, AiFillCaretRight, AiOutlineFileText, AiOutlineLineChart} from "react-icons/ai";
import { BsFillCollectionFill , BsBroadcast } from "react-icons/bs";
import { BiGridAlt, BiCollection, BiChurch, BiCopyright,BiLogOut } from "react-icons/bi";
import { MdAdminPanelSettings, MdHomeRepairService } from "react-icons/md";
import { FaHandHoldingUsd, FaRegListAlt } from "react-icons/fa";
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
                              <BsBroadcast className='icon' />
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
                              <li><span><AiOutlineFileText className = 'small-icon' /></span><a href='#'>Service Report</a></li>
                              <li><span><AiOutlineLineChart className = 'small-icon' /></span><a href='#'>Finacial Report</a></li>
                              <li><span><FaHandHoldingUsd className = 'small-icon' /></span><a href='#'>Partnership Report</a></li>
                              <li><span><FaRegListAlt className = 'small-icon' /></span><a href='#'>Attendance Report</a></li>
                              <li><span><AiOutlineFileText className = 'small-icon' /></span><a href='#'>Cell Report</a></li>
                              
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
                    {/* <img src='/images/admin.jpg' className={userContext.isOpened? 'show': 'hide'} /> */}
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
     background-color: #003366; 
     transition: all 0.35s ease; 
`
const LogoDiv = styled.div`
     height: 70px;
     padding: 5px 10px;
     color: white;
     display: flex;
     justify-content: center;
     align-items: center;
     border-bottom: 1px solid #c4c4c4;
     background-color: #002D62 !important;

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
     padding: 0px 15px;
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
          transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s; 
          .icon-link{
               display: flex;
               align-items: center;
               
          }
          .icon-toggle-down{
               color: #ffffff;
               cursor: pointer;
               margin-left: 12px;
          }
          .icon-toggle-right{
               cursor: pointer;
               color: #ffffff;
                margin-left: 12px;
          }
          a{
               display: flex;
               align-items: center;
               text-decoration: none;
               .icon{
                    min-width: 50px;
                    height: 40px;
                    line-height: 40px;
                    border-radius: 4px;
                    color: #ffffff;
                    cursor: pointer;
                    transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s; 
               }
               .icon:hover{
                    color: gold;

               }
               .link-name{
                    color: #ffffff;
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
               background-color: #003366;
               li{
                    list-style-type: none;
                    cursor: pointer;
                    padding: 10px 5px;
                    display: flex;
                    align-items:center;
                    a{
                         color: #ffffff;
                         font-size: 14px;
                         font-weight: 600;
                         transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s; 
                         padding: 5px;
                    }
                    a:hover{
                         color: gold;
                         
                    }
                    a:hover ~ span{
                         .small-icon{
                              color: gold;
                         }
                    }
                    
                    span{
                         .small-icon{
                              color: #ffffff;
                              width: 20px;
                              height: 20px;
                              transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s; 
                         }
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
     background-color: #002D62;
     border-top: 1px solid #f1f2f3;
     .admin-shortcuts{
          display: flex;
          justify-content: space-around;
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

const SideMenuList = styled.span`
     position: absolute;
     display: inline-block;
     left: 100%;
     top: -20px;
     background: black !important;
     z-index: 100;
     color: white;
`