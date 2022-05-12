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
//import { TableColumn } from 'react-data-table-component';
import { SelectColumnFilter } from '../components/Filter';




function Dashboard() {
  const userContext = useContext(Context);
  const useApiCall = useContext(Context);
        //MODAL
  // const {isShown, toggle } = USEMODAL();
  // const content = <React.Fragment><h3>Hey, I'm a model.</h3></React.Fragment>;
        //MODAL END
  const { isLoading, serverError, apiData } = useGet(requests.fetchActionMovies);
  // const {isLoading, serverError, responsMessage } = usePost({email: 'mikecodes@gmail.com', password:'mikecodes12344'})
   if (isLoading == true){
      console.log('loading.....')
   }else if(isLoading == false && !serverError){
      console.log(apiData)
   }

   
    useApiCall.ApiCall("http://api.tvmaze.com/search/shows?q=girls")
   
    
  
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
           Filter: SelectColumnFilter,
          filter: "includes",
         },
         {
           Header: "Official Site",
           accessor: "show.officialSite",
           
         },
         {
           Header: "Rating",
           accessor: "show.rating.average",
           //Cell:({ cell: { value } }) => value || "-",
         },
         {
           Header: "Status",
           accessor: "show.status",
         },
         {
           Header: "Premiered",
           accessor: "show.premiered",
           //Cell: ({ cell: { value } }) => value || "-",
         },
         {
           Header: "Time",
           accessor: "show.schedule.time",
           //Cell: ({ cell: { value } }) => value || "-",
         },
         {
          Header: "Action",
          accessor: "",
          Cell: () => (<>
          <button className='table__button'>Update</button>
          </> ),
        },
       ],
     },
   ], []); 
   
   /* interface DataRow {
    show: {
      name:string,
      type: string,
      language: string,
      officialSite: string,
      rating: {
        average: number
      },
      status: string,
      premiered: string,
      schedule: {
        time: string
      }
    };
    title: string;
    director: string;
    year: string;
}
  
   const columns:  TableColumn<DataRow>[] = [
    {
      name: "Name",
      selector: row => row.show.name,
      sortable: true,
    },
    {
      name: "Type",
      selector: row => row.show.type,
    },
    {
      name: "Language",
      selector: row => row.show.language,
    },
    {
      name: "Official Site",
      selector: row => row.show.officialSite,
      
    },
    {
      name: "Rating",
      selector: row => row.show.rating.average,
      //Cell:({ cell: { value } }) => value || "-",
    },
    {
      name: "Status",
      selector: row => row.show.status,
    },
    {
      name: "Premiered",
      selector: row => row.show.premiered,
      //Cell: ({ cell: { value } }) => value || "-",
    },
    {
      name: "Time",
      selector: row => row.show.schedule.time,
      //Cell: ({ cell: { value } }) => value || "-",
    },
    {
     name: "Action",
    
     cell: () => (<>
     <button className='table__button'>Update</button>
     </> ),
   },
]; */
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
          <Tables columns={columns} data={useApiCall.data} />
        </Content>
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

