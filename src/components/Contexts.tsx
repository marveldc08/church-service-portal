import React, { createContext, useState, useEffect, useMemo }from "react";
import axios from 'axios'
import jwt_decode from "jwt-decode";
import { decode } from "punycode";
const BASE_URL: string  = 'https://celz4-api.herokuapp.com';
const Context = createContext({
     openSideNav: () => {},
     collapseSideNav: () => {},
     isOpened: true,
     adminFirstName: '',
     adminLastName: '',
     adminRole: '',
     adminChurch: '',
     adminTableData: [],
     serviceTableData: [],
     churchTableData: [],
     signIn: () => {},
     signOut: () => {},
     result: true,

});
interface IContext{
     children: JSX.Element;
}
interface IToken{
     data: {
          church: string,
          email?: string,
          firstName: string,
          lastName: string,
          id?: number,
          groupChurch?: string,
          password?: string,
          role: string,
          __v?: number,
          _id?: string,
     },
     iat: number
}
export function AccessContexts(props: IContext){
     const [isOpenSideNav, setIsOpenSideNav] = useState(true);
     const [tableData, setTableData] = useState([])
     const [serviceTable, setServiceTable] = useState([])
     const [churchTable, setChurchTable] = useState([])
     const [adminFirstName, setAdminFirstName] = useState('')
     const [adminLastName, setAdminLastName] = useState('')
     const [adminRole, setAdminRole] = useState('')
     const [adminChurch, setAdminChurch] = useState('')
     const [userActiveStatus, setUserActiveStatus] = useState(false);
     const token = localStorage.getItem('token')
     useEffect(() => {
          let ignore = false;
          if(token){
               const decoded: IToken = jwt_decode(token);
               setAdminFirstName(decoded.data.firstName)
               setAdminLastName(decoded.data.lastName)
               setAdminChurch(decoded.data.church);
               setAdminRole(decoded.data.role);
               console.log(decoded)
          }else{
               setAdminFirstName('')
               setAdminLastName('')
               setAdminChurch('');
               setAdminRole('');
          }
          fetch(`${BASE_URL}/v2/admin`).then(response =>{return response.json()}).then((data) => {
               setTableData(data)
          })
          fetch(`${BASE_URL}/v2/service`).then(response =>{return response.json()}).then((data) => {
               setServiceTable(data)
          })

          fetch(`${BASE_URL}/v2/church`).then(response =>{return response.json()}).then((data) => {
               setChurchTable(data)
          })
          console.log('I just mounted')
     }, [token])
     
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
          adminFirstName: adminFirstName,
          adminLastName: adminLastName,
          adminRole: adminRole,
          adminChurch: adminChurch,
          adminTableData: tableData,
          serviceTableData: serviceTable,
          churchTableData: churchTable,
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