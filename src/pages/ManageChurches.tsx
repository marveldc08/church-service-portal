import React, { useContext, useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Context from "../components/Contexts";
import Modal from "../components/Modal";
import USEMODAL from "../components/USEMODAL";
import DataTable from "../components/DataTable";
import { SelectColumnFilter } from "../components/Filter";
import { useNavigate } from "react-router";
import { BiPlusMedical } from "react-icons/bi";
import {FiRefreshCw} from 'react-icons/fi';
import styled from "styled-components";

let churchesDetails = 
     [
          {
              "ChurchName":"CE Central Church",
              "PastorName":"Pastor Joe Agbaje",
              "PhoneNumber":"",
              "Group":"Central Church"
          },
          {
              "ChurchName":"CE Ota",
              "PastorName":"Pastor Olumide Ashiru David-King",
              "PhoneNumber":"+2348096812189",
              "Group":"Ota Group"
          },
          {
              "ChurchName":"CE Owode",
              "PastorName":" Brother Barnabas Ushilo",
              "PhoneNumber":"+2349058464741",
              "Group":"Ota Group"
          },
          {
              "ChurchName":"CE Alasia",
              "PastorName":" Pastor Jane Okpalanwan",
              "PhoneNumber":"+2348035044988",
              "Group":"Ota Group"
          },
          {
              "ChurchName":"CE Ifo 2",
              "PastorName":" Brother Shayi Olatunji",
              "PhoneNumber":"+2348035644796",
              "Group":"Ota Group"
          },
          {
              "ChurchName":"CE Ifo",
              "PastorName":" Brother Norbert Obogai",
              "PhoneNumber":"+2348073336800",
              "Group":"Ota Group"
          },
          {
              "ChurchName":"CE Ojuore",
              "PastorName":" Brother Fortune Peters",
              "PhoneNumber":" +2349093654210",
              "Group":"Ota Group"
          },
          {
              "ChurchName":"CE Ilogbo",
              "PastorName":" Brother Stephen Ben",
              "PhoneNumber":"+2347033589781",
              "Group":"Ota Group"
          },
          {
              "ChurchName":"CE The Bells",
              "PastorName":" Brother Ekeh Uchenna David",
              "PhoneNumber":"+2348121905677",
              "Group":"Ota Group"
          },
          {
              "ChurchName":"CE Ijoko",
              "PastorName":" Pastor Kasim Jimoh",
              "PhoneNumber":"+2348107258612",
              "Group": "Ijoko Group"
          },
          {
              "ChurchName":"CE Iyana Iyesi",
              "PastorName":" Broher Dare Taiwo",
              "PhoneNumber":"+2348101829343",
              "Group":"Ijoko Group"
          },
          {
              "ChurchName":"CE Atan ",
              "PastorName":" Pastor Felix Okonji",
              "PhoneNumber":"+2348058276409",
              "Group":"Ijoko Group"
          },
          {
              "ChurchName":"CE IJu",
              "PastorName":"Brother Ifeanyi Chukwdi",
              "PhoneNumber":"+2348064280577",
              "Group":"Ijoko Group"
          },
          {
              "ChurchName":"CE Lisa",
              "PastorName":" Brother Afolabi Tunde",
              "PhoneNumber":"+2348059860342",
              "Group":"Ijoko Group"
          },
          {
              "ChurchName":"CE Iyana 2",
              "PastorName":" Brother Moredayo Richard",
              "PhoneNumber":"+2348035270045",
              "Group":"Ijoko Group"
          },
          {
              "ChurchName":"CE Abule 1",
              "PastorName":" Brother Adeyemo Victor",
              "PhoneNumber":"+2348066777205",
              "Group":"Ijoko Group"
          },
          {
              "ChurchName":"CE Ntabo 1",
              "PastorName":" Brother OLumide Olamakinde",
              "PhoneNumber":"+2348180053565",
              "Group":"Ijoko Group"
          },
          {
              "ChurchName":"CE Sharp Corner",
              "PastorName":" Brother Onome Omoyibo",
              "PhoneNumber":"+2347035208321",
              "Group":"Ijoko Group"
          },
          {
              "ChurchName":"CE Alakuko",
              "PastorName":" Pastor Richard Ododo ",
              "PhoneNumber":"+2348096812189",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Abebi",
              "PastorName":" Brother Charles Iberi ",
              "PhoneNumber":"+2348029510709",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE New Estate",
              "PastorName":" Sister Ebele Kennedy ",
              "PhoneNumber":"+2348095362643",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Worship Center",
              "PastorName":" Sister Lydia oparaji ",
              "PhoneNumber":"+2348064631787",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Temidire",
              "PastorName":" Brother Dennis Henry ",
              "PhoneNumber":"+2347033003657",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Ajegunle",
              "PastorName":" Brother Akpoya Anas ",
              "PhoneNumber":"+2349032885417",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Ilo",
              "PastorName":" Brother Samuel Ovajimoh ",
              "PhoneNumber":"+2349031939647",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Adura",
              "PastorName":" Brother Ebhodghe Charles ",
              "PhoneNumber":"+2348033746917",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Iloye",
              "PastorName":" Brother Zedek Okolie ",
              "PhoneNumber":"+2348164585044",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Adalemo 2",
              "PastorName":" Brother Emmanuel Ose ",
              "PhoneNumber":"+2349012262925",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Adalemo",
              "PastorName":" Brother Obanor Ikponmwosa",
              "PhoneNumber":"+2348106425302",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE 5th Avenue",
              "PastorName":" Pastor Anthony Osula",
              "PhoneNumber":"+2347038574242",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE Aboru",
              "PastorName":" Pastor Odion Oyarero",
              "PhoneNumber":"+2348132575467",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE Aboru 2",
              "PastorName":" Pastor Christine Osula",
              "PhoneNumber":"+2348038265584",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE Ayobo",
              "PastorName":" Pastor Gbemisola Orekoya",
              "PhoneNumber":"+2347082206978",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE Akinola",
              "PastorName":" Brother Omorodion Frank",
              "PhoneNumber":"+2348033925020",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE Baruwa",
              "PastorName":" Sister Laura Nnebedim",
              "PhoneNumber":"+2347081957799",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE Abesan",
              "PastorName":" Brother Simeon Eigbedion ",
              "PhoneNumber":"+2349094630227",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE 22 Road",
              "PastorName":" Brother Sebastian Ezeh ",
              "PhoneNumber":"+2348035318630",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE Ayobo 2",
              "PastorName":" Brother Joshua Onyejiaka",
              "PhoneNumber":"+2347030613517",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE Casso",
              "PastorName":" Pastor Chris Adeke ",
              "PhoneNumber":"+2348055177624",
              "Group":"Central Group"
          },
          {
              "ChurchName":"CE Ijaye",
              "PastorName":" Pastor Osas Dickson ",
              "PhoneNumber":"+2348023610300",
              "Group":"Central Group"
          },
          {
              "ChurchName":"CE AIT Road",
              "PastorName":" Brother Ade Adetimilehin ",
              "PhoneNumber":"+2348060452857",
              "Group":"Central Group"
          },
          {
              "ChurchName":"CE Aminkonle",
              "PastorName":" Brother Michael Olugbayimu ",
              "PhoneNumber":"+2348024156705",
              "Group":"Central Group"
          },
          {
              "ChurchName":"CE Ajasa",
              "PastorName":" Brother Sybil Adeke ",
              "PhoneNumber":"+2347010689098",
              "Group":"Central Group"
          },
          {
              "ChurchName":"CE Agbele",
              "PastorName":" Brother Paul Gbassa ",
              "PhoneNumber":"+2348069458115",
              "Group":"Central Group"
          },
          {
              "ChurchName":"CE Merit",
              "PastorName":" Brother Afolabi Hezekiah",
              "PhoneNumber":"+2348163391143",
              "Group":"Central Group"
          } 
    ]

function ManageChurches() {
  const userContext = useContext(Context)
  const navigate = useNavigate();

  const [content, setContent] = useState(<></>);
  const [headerText, setHeaderText] = useState("");

  const [id, setId] = useState('')
  const [updateChurchName, setUpdateChurchName] = useState('')
  const [updatePastorName, setUpdatePastorName] = useState('')
  const [updateContact, setUpdateContact] = useState('')
  const [updateAddress, setUpdateAddress] = useState('')
  const [updateGroup, setUpdateGroup] = useState('')
  const [updateMembership, setUpdateMembership] = useState('')

  const churchNameRef = useRef<HTMLInputElement>();
  const pastorNameRef = useRef<HTMLInputElement >();
  const contactRef = useRef<HTMLInputElement >();
  const addressRef = useRef<HTMLInputElement >();
  const groupRef = useRef<HTMLInputElement >();
  const membershipRef = useRef<HTMLInputElement >();
   const { isShown, toggle } = USEMODAL();

  

    function openAddModal() {
          setHeaderText("Add Church")
       
        setContent(
          <React.Fragment>
          
          <form>
          <div className='input__wrapper'>
                  <label className='flabel'>Church Name</label>
                  <select className='finput' placeholder='Select Church' id='church'>
                    <option  className='finput' value="">Select Church</option>
                    {churchesDetails.map(element => (
                      <option  className='finput' value={element.ChurchName}>{element.ChurchName}</option>
                    ))}
                </select>
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Group</label>
                  <input type="text" className='finput' ref={groupRef} />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Address</label>
                  <input type="text" className='finput' ref={addressRef} />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Pastor's Name</label>
                  <input type="text" className='finput' ref={pastorNameRef} />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Contact</label>
                  <input type="text" className='finput' ref={contactRef} />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Membership Strength</label>
                  <input type="text" className='finput' ref={membershipRef} />
                </div>
          
          </form>
          <Buttons>
              <button className='invite__button' onClick={() => {createChurch();}}>Submit</button>
              <button className='invite__button' onClick={() => {navigate("")}}>Close</button>
          </Buttons>
        </React.Fragment>
        )
    }
    
    function openUpdateModal() {
          setHeaderText("Update Church")
       
        setContent(
          <React.Fragment>
          
          <form>
          <div className='input__wrapper'>
                  <label className='flabel'>Church Name</label>
                  <select className='finput' placeholder='Select Church' id='church' defaultValue={updateChurchName}>
                    <option  className='finput' value="">Select Church</option>
                    {churchesDetails.map(element => (
                      <option  className='finput' value={element.ChurchName}>{element.ChurchName}</option>
                    ))}
                </select>
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Group</label>
                  <input type="text" className='finput' defaultValue={updateGroup} ref = {groupRef} />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Address</label>
                  <input type="text" className='finput' defaultValue={updateAddress} ref ={addressRef} />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Pastor's Name</label>
                  <input type="text" className='finput' defaultValue={updatePastorName} ref = {pastorNameRef} />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Contact</label>
                  <input type="text" className='finput'  defaultValue={updateContact} ref = {contactRef} />
                </div>
                <div className='input__wrapper'>
                  <label className='flabel'>Membership Strength</label>
                  <input type="text" className='finput' defaultValue={updateMembership} ref = {membershipRef} />
                </div>
          
          </form>
          <Buttons>
              <button className='invite__button' onClick={() => { updateChurch()}}>Submit</button>
              <button className='invite__button' onClick={() => {navigate("")}}>Close</button>
          </Buttons>
        </React.Fragment>
        )
    }
    function createChurch(e?: { preventDefault: () => void;}){
      e?.preventDefault();
      let churchName = document.getElementById('church') as HTMLSelectElement;
      const church = {
        churchName: churchName.value,
        groupName: groupRef.current?.value,
        address: addressRef.current?.value,
        pastorName: pastorNameRef.current?.value,
        contact: contactRef.current?.value,
        membershipStrength: membershipRef.current?.value,
      }
      fetch(`https://celz4-api.herokuapp.com/v2/churc/create`,{
          method : 'POST',
          body : JSON.stringify(church),
          headers: {
              'content-Type': 'application/json'
          }
        }).then(response =>{return response.json()}).then((data) => {
          alert('Church created successfully');
        })
  }

    function updateChurch(e?: { preventDefault: () => void; }){
      let churchName = document.getElementById('church') as HTMLSelectElement;
      const church = {
        churchName: churchName.value,
        groupName: groupRef.current?.value,
        address: addressRef.current?.value,
        pastorName: pastorNameRef.current?.value,
        contact: contactRef.current?.value,
        membershipStrength: membershipRef.current?.value,
      }
        e?.preventDefault()
        fetch(`https://celz4-api.herokuapp.com/v2/church/update/${id}`,{
          method : 'PUT',
          body : JSON.stringify(church),
          headers: {
              'content-Type': 'application/json'
          }
        }).then(response =>{return response.json()}).then((data) => {
          alert('church updated successfully');
          console.log(data);
        })
    }

    const headers = ['ID','Church Name', "Pastor's Name", 'Contact', 'Address', 'Group', 'Memebership Strenght', 'Actions']
    const churchesArray = userContext.churchTableData.map(({id, churchName, pastorName, groupName, address, contact, membershipStrength}) => {
        return {id, churchName, pastorName, contact, address, groupName, membershipStrength}
    })
    document.querySelectorAll(".table__update__button")!.forEach(element => {
      element.addEventListener("click", handleUpdateAdmin);
    });
    function handleUpdateAdmin(this: any) {
      let tableRow = this.parentNode.parentNode;
      setId(tableRow.cells[0].innerHTML);
      setUpdateChurchName(tableRow.cells[1].innerHTML);
      setUpdatePastorName(tableRow.cells[2].innerHTML);
      setUpdateContact(tableRow.cells[3].innerHTML);
      setUpdateAddress(tableRow.cells[4].innerHTML);
      setUpdateGroup(tableRow.cells[5].innerHTML);
      setUpdateMembership(tableRow.cells[6].innerHTML);

    }

  const actions = <React.Fragment >
      <button className='table__button table__update__button' onClick={() => { toggle(); openUpdateModal();}}>
        <span><FiRefreshCw className='table-button-icon' /></span> Update
      </button>
      
  </React.Fragment>


  return (
    <Container>
      <SideNav />
      <Contain show={userContext.isOpened}>
        <Header />
        <Content>
          <Wrap>
            <button className='invite__button' onClick={()=> {toggle(); openAddModal();}}> <span ><BiPlusMedical /></span> Add Church</button>
          </Wrap>
          <DataTable data={churchesArray} headers = {headers} actions = {actions}  tableTitle = 'All Churches' />
          <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={headerText} />
        </Content>
      </Contain>
    </Container>
  );
   
}


export default ManageChurches;

interface Iprops{
  show: boolean;
}
const Container = styled.div`
  position: relative;
`;

const Contain = styled.div<Iprops>`
  position: relative;
  margin-left: ${(props) => (props.show ? "300px" : "78px")};
  height: 100vh;
  overflow: auto;
  background-color: #f1f2f3;
  transition: all 0.35s ease;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Content = styled.div`
  background: #f1f2f3;
  height: calc(100vh - 70px);
  padding: 1rem;

  h3 {
    margin-bottom: 1em;
    color: rgba(24, 35, 89, 0.85) !important;
  }
`
const Wrap = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  padding-left: 12rem;

  button {
    span {
      padding: 0px 8px;
    }
  }
`;
const Buttons = styled.div`
   display: flex;
   justify-content: flex-end;
   padding: 10px;
`;

function setheaderText() {
  throw new Error("Function not implemented.");
}

function setheader(arg0: JSX.Element) {
  throw new Error("Function not implemented.");
}