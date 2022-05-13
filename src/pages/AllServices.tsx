import React, {useContext, useMemo, useState} from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import { BiPlusMedical } from 'react-icons/bi';
import Context from '../components/Contexts';
import Tables from '../components/Tables';
import { useNavigate } from 'react-router';
import USEMODAL from '../components/USEMODAL';
import { SelectColumnFilter } from '../components/Filter';
import styled from 'styled-components';
import Modal from '../components/Modal';
import "./AllServices.css";



function AllServices() {

    const {isShown, toggle } = USEMODAL();
    const navigate = useNavigate();

    const [content, setContent] = useState(<></>);
    const [headerText, setHeaderText] = useState("");

        function openCreateModal() {
            setHeaderText("Create Modal")
                setContent(
                    <React.Fragment>
                        <form>
                            <div className='input-wrapper'>
                                <label className='flabel'>Service Type</label>
                                <input type="text" className="finput" />
                            </div>
                            <div className='input-wrapper'>
                                <label className='flabel'>Service Date</label>
                                <input type="text" className="finput" />
                            </div>
                            <div className='input-wrapper'>
                                <label className='flabel'>Start Time</label>
                                <input type="text" className="finput" />
                            </div>
                            <div className='input-wrapper'>
                                <label className='flabel'>End Time</label>
                                <input type="text" className="finput" />
                            </div>
                        </form>
                    </React.Fragment>
                )
        };

    const userContext  = useContext(Context)
    const useApiCall  = useContext(Context)

    useApiCall.ApiCall("http://api.tvmaze.com/search/shows?q=girls")

    const columns = useMemo(() => [
        {
          Header: "All Services",
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
              Header: "Start Time",
              accessor: "show.officialSite",
              
            },
            {
              Header: "End Time",
              accessor: "show.rating.average",
              //Cell:({ cell: { value } }) => value || "-",
            },
            {
             Header: "Action",
             accessor: "",
             Cell: () => (<>
             <button className='table__button' onClick={() => {toggle(), openCreateModal()}}>Update</button>
             </> ),
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
                <button onClick={() => {toggle(), openCreateModal()}}><span><BiPlusMedical /></span>Create</button>
                <Tables columns={columns} data={useApiCall.data} /> 
                <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={headerText} />
            </Content>
          </Contain>
      </Container>
  )
}






interface Iprops{
    show: boolean;
  }
  const Container = styled.div` 
    position: relative;
  `;

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
      button {
        width: 8rem;
        height: 3rem;
        outline: none;
        display: flex;
        text-decoration: none;
        background-color: #003366;
        border: none;
        border-radius: 4px;
        color: white;
        font-size: 20px;
        padding: 5px 15px;
        justify-content: center;
        align-items: center;
        margin: 10px;
        cursor: pointer;
        span{
            padding: 0px 8px;
        }
      }

      &:hover {
            background: white;
            color: rgba(24, 35, 89, 0.85);
        }
    `;
   
 
export default AllServices;