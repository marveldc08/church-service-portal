import React, { useMemo } from 'react';
import { Column, useTable } from 'react-table';
import styled from 'styled-components'
import './Tables.css';



//export const columns = useMemo : <React.DependencyList | undefined>(undefined);

interface allServices {
  id: string;
  serviceType: string;
  serviceDate: string;
  startTime: string;
  endTime: string;
  action: JSX.Element
}

interface serviceReport {
  id: string;
  serviceType: string;
  serviceDate: string;
  serviceDuration: string;
  sessions: string;
  status: string;
  action: string;
}

interface financialReport {
  id: string;
  serviceType: string;
  cummulativeAmountInNaira: string;
  cummulativeAmountInDollars: string;
  status: string;
}

interface allChurches {
  id: string;
  churchName: string;
  pastorName: string;
  contact: string;
  address: string;
  group: string;
  membershipStrength: string;
  action: JSX.Element
}

interface allAdmin {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  church: string;
  group: string;
  status: string;
  action: JSX.Element
}
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