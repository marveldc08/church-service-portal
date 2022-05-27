import React, { useContext, useMemo, useState } from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav';
import  Styled  from 'styled-components';
import Context from '../components/Contexts';
import Tables from '../components/Tables';
import { SelectColumnFilter } from '../components/Filter';
import { useNavigate } from 'react-router';
import { BiPlusMedical } from "react-icons/bi";
import './FinancialReport.css';

function FinancialReport() {
    const userContext = useContext(Context);
    const useApiCall = useContext(Context)
    const navigate = useNavigate();

    useApiCall.ApiCall("http://api.tvmaze.com/search/shows?q=girls")

   const columns = useMemo(() => [
    {
      Header: "All Admin",
      columns: [
        {
          Header: "ID",
          accessor: "show.id",
        },
        {
          Header: "Service Type",
          accessor: "show.type",
        },
        {
          Header: "Service Date",
          accessor: "show.language",
          Filter: SelectColumnFilter,
         filter: "includes",
        },
        {
          Header: "Cumulative Amount",
          accessor: "",
          Cell: "20,000"
          
        },
        {
          Header: "Cumulative Amount $",
          accessor: "show.rating.average",
          //Cell:({ cell: { value } }) => value || "-",
        },
        // {
        //   Header: "Church",
        //   accessor: "show.status",
        // },
        // {
        //   Header: "Group",
        //   accessor: "show.premiered",
          //Cell: ({ cell: { value } }) => value || "-",
        // },
        {
          Header: "Status",
          accessor: "show.schedule.time",
          //Cell: ({ cell: { value } }) => value || "-",
        },
        // {
        //  Header: "Action",
        //  accessor: "",
        //  Cell: () => (<>
        //  {/* <div>
    //      <button className='table__button' onClick={()=> {toggle();  openUpdateModal()} }>Update</button>
    //      {" "}
    //      <button className='table__button' onClick={()=> {toggle();  openViewModal()}}>View</button>
    //      </div> */}
    //      </> ),
    //    },
      ],
    },
  ], []);
//// impliment the table
  return (
    <Container>
        <SideNav />
      <Contain show={userContext.isOpened}>
        <Header />
        <Content>
            <h4>Manage Report</h4>
          <Actions>
            <button className='report__button' onClick={() => {navigate("/submit-report")}}> <span ><BiPlusMedical /></span>Submit Report</button>
          </Actions>
        <Tables columns={columns} data={useApiCall.data} />
        </Content>
      </Contain>
    </Container>
  )
}



export default FinancialReport
interface Iprops{
    show: boolean;
  }
  
  const Container = Styled.div` 
  position: relative;
  `
  const Contain =Styled.div<Iprops >`
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
  
  const Content = Styled.div`
    background: #f1f2f3;
    height: calc(100vh - 70px);
    padding: 1rem;
  `
const Actions = Styled.div`
display: flex;
justify-content: flex-end;
/* border: 1px solid red; */
 padding: 10px;
button{
  span{
    padding: 0px 8px;
  }
}
` 
// const Buttons =Styled.div`
// display: flex;
// justify-content: flex-end;
// padding: 10px;
// `