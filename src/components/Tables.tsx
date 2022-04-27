import React, { useMemo } from 'react';
import { Column, useTable } from 'react-table';
import styled from 'styled-components'
import './Tables.css';




interface tableProps {
  columns: readonly Column<{}>[] ; 
  data: readonly {}[];
}

function renderCell () {
  
}


function Tables ({columns, data}:tableProps) { 
  const{
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow
  } = useTable({columns,data})

  return (
    <Container>
      <table {...getTableProps()} >
        <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()} >
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()}> {column.render('Header')} </th>
                    ))}
                  </tr>
                ))}
        </thead>
        <tbody {...getTableBodyProps()} >
            {rows.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
        </tbody>

      </table>
    </Container>
  );
}

export default Tables

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
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