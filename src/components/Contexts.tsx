import React, { createContext, useState, useEffect, useMemo }from "react";
import axios from 'axios'
import { response } from "express";
import { useGet } from "../utilities/HttpConnection";
const BASE_URL: string  = 'https://celz4-api.herokuapp.com';
const Context = createContext({
     openSideNav: () => {},
     collapseSideNav: () => {},
     isOpened: true,

     adminTableData: [],
    

     signIn: () => {},
     signOut: () => {},
     result: true,

});
interface IContext{
     children: JSX.Element;
}
export function AccessContexts(props: IContext){
     const [isOpenSideNav, setIsOpenSideNav] = useState(true);
     const [tableData, setTableData] = useState([])
     const [userActiveStatus, setUserActiveStatus] = useState(false);
     // const admins = useGet("/v2/admin");
     useEffect(() => {
          fetch(`${BASE_URL}/v2/admin`).then(response =>{return response.json()}).then((data) => {
               setTableData(data)
          })
     }, [])
     
     function closeSideNav(){
          setIsOpenSideNav(false)
     }
     function openSideNav(){
          setIsOpenSideNav(true);
     }

     function signedIn(){
          setUserActiveStatus(true);
     } 
     function signedOut(){
          setUserActiveStatus(false);
     }



     const value = {
          openSideNav: openSideNav,
          collapseSideNav: closeSideNav,
          isOpened: isOpenSideNav,

          adminTableData: tableData,
     

          result : userActiveStatus,
          signIn: signedIn,
          signOut: signedOut,
     }


     return <Context.Provider value={value}>
          {props.children}
     </Context.Provider>
}
export default Context;
//https://github.com/marveldc08/church-service-portal.git
