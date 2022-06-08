 import React, { useState } from "react";
import { CSVLink } from "react-csv";
import styled from "styled-components";
import './FileCSV.css';
import { BiDownload } from "react-icons/bi";
import Papa from "papaparse";
import Modal from '../components/Modal';
import USEMODAL from '../components/USEMODAL';

function FileCSV() {
  const csvData = [
    ['ID', 'Service Type', "Cummulative Amount Naira", "Cummulative Amount  $Dollar"],
    ["01", "Thankgiving", "200,000", "400,000"],
    ["02", "Communion Service", "200,000", "40,000"],
    ["03", "Mid-week Service", "40,000", "50,000"]
  ];

  const {isShown, toggle } = USEMODAL();
  const [content, setContent] = useState(<></>)
   const [headerText, setHeaderText] = useState("")

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

    // State to store parsed data
    const [parsedData, setParsedData] = useState([]);

    //State to store table Column name
    const [tableRows, setTableRows] = useState([]);
  
    //State to store the values
    const [values, setValues] = useState([]);
  

  const changeHandler = (event:any) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    
    });
    alert("successful");
  };

  return(
    <React.Fragment>
        <Div>
          <CSVLink data={csvData} className="csv" ><BiDownload/> Download CSV</CSVLink>
          <button className='csv' onClick={() => { toggle(); importCsv();}}>Import CSV</button>
        </Div>
        <Modal isShown={isShown} hide={toggle} modalContent={content} headerText={headerText} />

          {/* Table */}
          <Table>
            <thead >
              <tr className="tr">
                {tableRows.map((rows, index) => {
                  return <th key={index} className="th">{rows}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {values.map((value, index) => {
                return (
                  <tr key={index}>
                    {value.map((val, i) => {
                      return <td key={i} className="tr">{val}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          
    </React.Fragment>
  );
}



export default FileCSV;

const Form = styled.div`
  display: flex;
  align-items: center;
`

const Div = styled.div`
  display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`

const Table = styled.table`
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`
