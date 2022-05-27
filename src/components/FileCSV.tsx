import { CSVLink, CSVDownload } from "react-csv";
// import styled from "styled-components";
import './FileCSV.css';
import { BiDownload } from "react-icons/bi";

function FileCSV() {
  const csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  ];

  return(
    <>
    <CSVLink data={csvData} className="csv" ><BiDownload/> Download CSV</CSVLink>
      
      <CSVDownload data={csvData} target="_blank" />
      </>
  )
}

export default FileCSV;

