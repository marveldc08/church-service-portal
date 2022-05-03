import React, { useMemo, useState, useEffect, useContext } from 'react';

import { Column, useTable } from 'react-table';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components'
import './Tables.css';
import Context from './Contexts'



interface tableProps { 
  columns: readonly Column<{}>[] ; 
  data: readonly {}[];
}








function Tables ({columns, data}:tableProps) { 
  const{
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow
  } = useTable({columns,data})

  const use = useContext(Context)
 
  return (
    <Container>
      <table className='table' {...getTableProps()} >
        <thead >
                {headerGroups.map(headerGroup => (
                  <tr  {...headerGroup.getHeaderGroupProps()} >
                    {headerGroup.headers.map(column => (
                      <th  {...column.getHeaderProps()}> {column.render('Header')} </th>
                    ))}
                  </tr>
                ))}
        </thead>
        <tbody {...getTableBodyProps()} >
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr  {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td >{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
        </tbody>

      </table>
      <ReactPaginate

       previousLabel={"< previous"}
       nextLabel={"next >"}
       breakLabel={"..."}
       breakClassName={"break-me"}
       pageCount={use.pageCount}
       onPageChange={use.handlePageClick}
       containerClassName={"pagination"}
       //subContainerClassName={ "pages pagination" }
       activeClassName={"active"}
        pageRangeDisplayed={5}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"navigationDisabled"}

        //  renderOnZeroPageCount={()=>{} }
      />
    </Container>
  );
}

export default Tables

const Container = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #ffffff;
  margin: 2em 0;
  padding: 2em;
`; 
const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  
    ul{
        display: flex;
        justify-content: space-between;
       
    }
`