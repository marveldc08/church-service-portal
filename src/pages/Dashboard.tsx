import React, {useContext, useState, useEffect, useMemo} from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav';
import Stats from '../components/Stats';
import Charts from '../components/Charts';
import styled from "styled-components";
import Context from '../components/Contexts';
import Modal from '../components/Modal';
import USEMODAL from '../components/USEMODAL';
import { useGet, usePost } from '../utilities/HttpConnection';
import requests from '../utilities/requests';
import './Dashboard.css';
import Tables from '../components/Tables';
import axios from 'axios';



function Dashboard() {
  const userContext = useContext(Context);
        //MODAL
  // const {isShown, toggle } = USEMODAL();
  // const content = <React.Fragment><h3>Hey, I'm a model.</h3></React.Fragment>;
        //MODAL END
  //const results = useGet(requests.fetchActionMovies);
  // const { isLoading, serverError, apiData } = useGet(requests.fetchActionMovies);
  const {isLoading, serverError, responsMessage } = usePost({email: 'mikecodes@gmail.com', password:'mikecodes12344'})
   if (isLoading == true){
      console.log('loading.....')
   }else if(isLoading == false && !serverError){
      console.log(responsMessage)
   }

   const [data , setData] = useState([]);

   useEffect(() => {
     axios("http://api.tvmaze.com/search/shows?q=girls")
       .then((res) => {
         setData(res.data);
       })
       .catch((err) => console.log(err));
   }, []);
   let value:string;
   const columns = useMemo(() => [
     {
       Header: "TV Show",
       columns: [
         {
           Header: "Name",
           accessor: "show.name",
         },
         {
           Header: "Type",
           accessor: "show.type",
         },
         {
           Header: "Language",
           accessor: "show.language",
         },
         {
           Header: "Official Site",
           accessor: "show.officialSite",
           Cell: ({ cell: { value } }) => (value ? { value } : "-"),
         },
         {
           Header: "Rating",
           accessor: "show.rating.average",
           Cell:({ cell: { value } }) => value || "-",
         },
         {
           Header: "Status",
           accessor: "show.status",
         },
         {
           Header: "Premiered",
           accessor: "show.premiered",
           Cell: ({ cell: { value } }) => value || "-",
         },
         {
           Header: "Time",
           accessor: "show.schedule.time",
           Cell: ({ cell: { value } }) => value || "-",
         },
       ],
     },
   ], []);
   
  return (
    <Container>
      <SideNav />
      <Contain show={userContext.isOpened}>
        <Header />
        <Content>

          {/* <button onClick={toggle}>Open modal</button> 
           <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={''} />
          <Loader /> */}

          <Stats />
          <Charts />
         
        </Content>
        <Tables columns={columns} data={data} />
      </Contain>
    </Container>
  );
}

export default Dashboard
interface Iprops{
  show: boolean;
}
const Container = styled.div` 
  position: relative;
`
const Contain =styled.div<Iprops>`
    position: relative;
    margin-left: ${props => props.show ? '300px':'78px'};
    height: 100vh;
    overflow: auto;
    background-color: #f1f2f3;
    transition: all 0.35s ease; 
    &::-webkit-scrollbar{
          display: none;
    }
`
const Content = styled.div`
  background: #f1f2f3;
  height: calc(100vh - 70px);
  padding: 1rem;

  h3{
    margin-bottom: 1em;
    color: rgba(24, 35, 89, 0.85) !important;
  }
`

function useModal(): { isShown: any; toggle: any; } {
  throw new Error('Function not implemented.');
}

