 import React, { useState } from "react";
import { CSVLink } from "react-csv";
import styled from "styled-components";
import './FileCSV.css';
import { BiDownload } from "react-icons/bi";
import Papa from "papaparse";
import Modal from '../components/Modal';
import USEMODAL from '../components/USEMODAL';
import { BsDownload, BsCloudUpload } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from 'react-router'
interface ICsv {
  type?: string;
}
function FileCSV({type}: ICsv) {
  const csvData = [
    ['id', 'serviceType', "serviceDate", `${type == 'finance' ? 'financeType' : 'partnershipType'}` , "cummulativeAmountNaira", "cummulativeAmountDollar"],
    ["01", "Thankgiving", "06-09-2022", "Tithe", "200,000", "400,000"],
    ["02", "Communion Service", "06-09-2022", "Offering", "200,000", "40,000"],
    ["03", "Mid-week Service", "06-09-2022", "Thanksgiving seed", "40,000", "50,000"]
  ];

  const {isShown, toggle } = USEMODAL();
  const [content, setContent] = useState(<></>)
   const [headerText, setHeaderText] = useState("")
   const navigate = useNavigate();

   function importCsv() {
    setHeaderText("Import CSV")
    setContent(
      <React.Fragment>
        <div>
          {/* File Uploader */}
          <input
            type="file"
            name="file"
            accept=".csv"
            onChange={changeHandler}
            style={{ display: "block", margin: "10px auto" }}
          />
       </div>
    </React.Fragment>
    )
}

  

  const changeHandler = (event:any) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray: any[] = [];
        const valuesArray: any[] = [];


        // Iterating data to get column name and their values
        results.data.forEach((element, index) => {
          fetch(`${type == 'finance' ? "https://celz4-api.herokuapp.com/v2/finance/submit" : "https://celz4-api.herokuapp.com/v2/partnership/submit"}`,{
            method: "POST",
            body: JSON.stringify(element),
            headers: { "content-Type": "application/json" },
          }).then(response => {return response.json()}).then(data =>{
             console.log('posted element with id ' + index)
             console.log(element);
          })
        });
      },
    
    });
    alert("successful");
  };

  return(
    <React.Fragment>
        <Div>
          <button className="csv" onClick={() => { navigate(`${type == 'finance' ? "/financial-reports" : "/partnership-reports"}`); }}>
              <span> <FaRegEye /> </span>{" "}View Reports
          </button>
            <CSVLink data={csvData} className="csv csvButton" ><span><BiDownload/></span> Download CSV</CSVLink>
            <button className='csv' onClick={() => { toggle(); importCsv();}}> <span><BsCloudUpload /></span> Import CSV</button>
        </Div>
        <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={headerText} />
          
    </React.Fragment>
  );
}



export default FileCSV;


const Div = styled.div`
  display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom: 30px;

    button {
      span {
        padding: 0px 8px;
      }
    }

    CSVLink {
      span {
        padding: 0px 8px;
      }
    }
`


const Table = styled.table`
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`
function d(d: any): never {
  throw new Error("Function not implemented.");
}

