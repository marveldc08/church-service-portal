import React, { createContext, useState, useEffect }from "react";
import axios from 'axios'


const Context = createContext({
     openSideNav: () => {},
     collapseSideNav: () => {},
     isOpened: true,

     postsPerPage: 10,
     offset: 1,
     pageCount: 0,
     data: [],
     ApiCall : (endpointURL: string) => {},
     handlePageClick: (event: any) => {}


});
interface IContext{
     children: JSX.Element;
}
export function AccessContexts(props: IContext){
     const [isOpenSideNav, setIsOpenSideNav] = useState(true);

     const [postsPerPage] = useState(10);
     const [offset, setOffset] = useState(5);
     const [pageCount, setPageCount] = useState(0)
     const [data , setData] = useState([]);

     function closeSideNav(){
          setIsOpenSideNav(false)
     }
     function openSideNav(){
          setIsOpenSideNav(true);
     }

     function ApiCall (endpointURL: string) {
  
          useEffect(() => {
            axios(endpointURL)
              .then((res) => {
                setData(res.data.slice(offset - 1 , offset - 1 + postsPerPage));
                 
                setPageCount(Math.ceil(data.length / postsPerPage))
                console.log(data.length)
              })
              .catch((err) => console.log(err));
          }, []);
     }
     function handlePageClick (event: { selected: any; }) {
          const selectedPage = event.selected;
          setOffset(selectedPage + 1)
     }

     const value = {
          openSideNav: openSideNav,
          collapseSideNav: closeSideNav,
          isOpened: isOpenSideNav,
 
          postsPerPage: postsPerPage,
          offset: offset,
          pageCount: pageCount,
          data: data,
          ApiCall: ApiCall,
          handlePageClick: handlePageClick
     }

     return <Context.Provider value={value}>
          {props.children}
     </Context.Provider>
}
export default Context;
//https://github.com/marveldc08/church-service-portal.git
