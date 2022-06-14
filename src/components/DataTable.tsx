import { title } from 'process';
import React, {useState, useEffect, HTMLFactory} from 'react';
import { actions } from 'react-table';
import { Slice } from 'victory';
import './DataTable.css';
interface IProps{
     data: {}[];
     headers: string[];
     actions?: JSX.Element, 
     tableTitle: string,
}
function DataTable({data, headers, actions, tableTitle}: IProps) {
     const [postPerPage, setPostPerPage] = useState(10)
     const [numberOfPage, setNumberOfPage] = useState(0)
     const [currentTableData, setCurrentTableData] = useState<{}[]>([])

     
     function sortTableByColumn(table: HTMLTableElement, column: number, asc = true){
          const dirModifier = asc ? 1 : -1;
          const tBody = table.tBodies[0];
          const rows = Array.from(tBody.querySelectorAll('tr'));

          //Sort each row
          const sortedRows = rows.sort((a, b): number => {
               const aColText = a.querySelector(`td:nth-child(${column + 1})`)?.textContent!;

                    const bColText = b.querySelector(`td:nth-child(${column + 1})`)?.textContent!;

                    return  aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier)
               
          });
          // remove existing Trs from the table
          while(tBody.firstChild){
               tBody.removeChild(tBody.firstChild)
          }

          tBody.append(...sortedRows)

          table.querySelectorAll('th').forEach(th => th.classList.remove('th-sort-asc', 'th-sort-desc'));
          table.querySelector(`th:nth-child(${column + 1})`)?.classList.toggle('th-sort-asc', asc)
          table.querySelector(`th:nth-child(${column + 1})`)?.classList.toggle('th-sort-desc', !asc)
     }

     useEffect(() => {

          const script = document.createElement("script");
          script.src = "/js/custom.js";
          script.async = true;
          document.body.appendChild(script);


          // sortTableByColumn(document.querySelector('table')! , 1);
          document.querySelectorAll('.sortable__table th').forEach(headerCell => {
               headerCell.addEventListener('click' , () => {
                    // const tableElement = headerCell.parentElement!.parentElement!.parentElement!;
                    const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement!.children, headerCell);

                    const currentIsAscending = headerCell.classList.contains('th-sort-asc');

                    sortTableByColumn(document.querySelector('table')!, headerIndex, !currentIsAscending)
               })
          })

     }, [])
     
     function paginate(){
         let arrayLength = data.length;
         if(arrayLength % 2 == 0){
               setCurrentTableData(data.slice(0, postPerPage));
               setNumberOfPage(arrayLength / postPerPage)
         }
     }
     
     


  return (
    <div className='table__container'>
         <h2 className='table__titile'>{tableTitle}</h2>
         <table className='table sortable__table stripe' id='myTable' >
               <thead className='table__thead'>
                    <tr className='table__row'>
                         {headers.map((element, index) => (
                              <th className='table__header' key = {index}>{element}</th>
                         ))}
                    </tr>  
               </thead>
               <tbody>
                    {data.map((element, index) =>(
                         <tr className='table__row' key={index}>
                              {Object.entries(element).map(([key, value]) =>(
                                   <td className='table__column' key = {key}>{value}</td>
                              ))}
                              <td className='table__column button__group'>
                                   {actions}
                              </td>
                         </tr>
                    ) )}
               </tbody>
         </table>
         
    </div>
  )
}

export default DataTable;  