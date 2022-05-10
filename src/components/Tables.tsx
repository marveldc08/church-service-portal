import React, { useMemo, useState, useEffect, useContext } from 'react';

import { Column, useTable } from 'react-table';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components'
import './Tables.css';
import Context from './Contexts'

import DataTable, { TableProps } from 'react-data-table-component';

const selectProps = { indeterminate: (isIndeterminate: boolean) => isIndeterminate };




interface tableProps { 
  columns: readonly Column<{}>[] ; 
  data: readonly {}[];
}








function Tables <T>(props: TableProps<T>): JSX.Element { 
  
  const use = useContext(Context)
 
  return (
    <Container>
         <DataTable
            className='table'
            //direction="auto"
            fixedHeaderScrollHeight="300px"
            pagination
            responsive
            //subHeaderAlign="right"
            subHeaderWrap
            selectableRowsComponentProps={selectProps}
            dense
            {...props}
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