import React from "react";
import { createContext, useState, useEffect } from "react";

const Context = createContext({
     openSideNav: () => {},
     collapseSideNav: () => {},
     isOpened: true,
});

export function AccessContexts(props){
     const [isOpenSideNav, setIsOpenSideNav] = useState(true);
     function closeSideNav(){
          setIsOpenSideNav(false)
     }
     function openSideNav(){
          setIsOpenSideNav(true);
     }

     const value = {
          openSideNav: openSideNav,
          collapseSideNav: closeSideNav,
          isOpened: isOpenSideNav
     }
     return <Context.Provider value = {value}>
          {props.children}
     </Context.Provider>
}
export default Context;
//https://github.com/marveldc08/church-service-portal.git
