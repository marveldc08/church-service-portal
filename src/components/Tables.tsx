import React, { useMemo, useState, useEffect, useContext } from 'react';

import { Column, usePagination, useTable, useFilters, useGlobalFilter } from 'react-table';
import { GlobalFilter, DefaultFilterForColumn} from "./Filter";
import ReactPaginate from 'react-paginate';
import styled from 'styled-components'
import './Tables.css';
import Context from './Contexts'


const selectProps = { indeterminate: (isIndeterminate: boolean) => isIndeterminate };




interface TableProps<T extends object> { 
  columns: readonly Column<T>[] ; 
  data: readonly T[];
}

declare module 'react-table' {
  // take this file as-is, or comment out the sections that don't apply to your plugin configuration

  interface TableOptions<D extends object>
      extends UseExpandedOptions<D>,
          UseFiltersOptions<D>,
          UseGlobalFiltersOptions<D>,
          UseGroupByOptions<D>,
          UsePaginationOptions<D>,
          UseResizeColumnsOptions<D>,
          UseRowSelectOptions<D>,
          UseRowStateOptions<D>,
          UseSortByOptions<D> {
      updateMyData: (rowIndex: number, columnId: string, value: any) => void;
  }

  interface TableInstance<D extends object = {}>
      extends UseColumnOrderInstanceProps<D>,
          UseExpandedInstanceProps<D>,
          UseFiltersInstanceProps<D>,
          UseGlobalFiltersInstanceProps<D>,
          UseGroupByInstanceProps<D>,
          UsePaginationInstanceProps<D>,
          UseRowSelectInstanceProps<D>,
          UseRowStateInstanceProps<D>,
          UseSortByInstanceProps<D> {
      editable: boolean;
  }

  interface TableState<D extends object = {}>
      extends UseColumnOrderState<D>,
          UseExpandedState<D>,
          UseFiltersState<D>,
          UseGlobalFiltersState<D>,
          UseGroupByState<D>,
          UsePaginationState<D>,
          UseResizeColumnsState<D>,
          UseRowSelectState<D>,
          UseRowStateState<D>,
          UseSortByState<D> {}

  interface ColumnInterface<D extends object = {}>
      extends UseFiltersColumnOptions<D>,
          UseGlobalFiltersColumnOptions<D>,
          UseGroupByColumnOptions<D>,
          UseResizeColumnsColumnOptions<D>,
          UseSortByColumnOptions<D> {}

  interface ColumnInstance<D extends object = {}>
      extends UseFiltersColumnProps<D>,
          UseGroupByColumnProps<D>,
          UseResizeColumnsColumnProps<D>,
          UseSortByColumnProps<D> {}

  interface Cell<D extends object = {}> extends UseGroupByCellProps<D>, UseRowStateCellProps<D> {}

  interface Row<D extends object = {}>
      extends UseExpandedRowProps<D>,
          UseGroupByRowProps<D>,
          UseRowSelectRowProps<D>,
          UseRowStateRowProps<D> {}
}


function Tables<T extends {id: string}> ({columns, data}: TableProps<T>): React.ReactElement { 
  
  const use = useContext(Context)
  const {
    
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    visibleColumns,
    prepareRow,
    setGlobalFilter,
   preGlobalFilteredRows,

   canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },

  }  = useTable<T>({
  columns,
  data,
  defaultColumn: { Filter: DefaultFilterForColumn },
  initialState: { pageIndex: 2, pageSize: 5 },
  updateMyData: function (rowIndex: number, columnId: string, value: any): void {
    throw new Error('Function not implemented.');
    
  }
},
 
  useFilters,
  useGlobalFilter,
  usePagination,
  )
  
  return (
    <Container>
       
        <table className='table' {...getTableProps()} >
        <thead >
            <tr>
            <th
              colSpan={visibleColumns.length}
              style={{
                textAlign: "center",
              }}
            >
              {/* Rendering Global Filter */}
              <GlobalFilter
                //preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            </th>
          </tr>
            {headerGroups.map(headerGroup => (
              <tr  {...headerGroup.getHeaderGroupProps()} >
                {headerGroup.headers.map(column => (
                  <th  {...column.getHeaderProps()}> 
                    {column.render('Header')} 
                     {/* Rendering Default Column Filter */}
                      {/* <div>
                        {column.canFilter ? column.render("Filter") :null}
                      </div> */}
                  </th>
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
      {/* <ReactPaginate
        className='pagination'
       previousLabel={"< previous"}
       nextLabel={"next >"}
       breakLabel={"..."}
       breakClassName={"break-me"}
       pageCount={use.pageCount}
       onPageChange={use.handlePageClick}
       onClick={use.handlePageClick}
        /> */}

    <ul className="pagination">
        <li className="page-item" onClick={() => previousPage()} >
            <a className="page-link"> {'< Previous'}</a>
        </li>
        
        <li className="page-item" onClick={() => nextPage()} >
            <a className="page-link">{'Next >'} </a>
        </li>
        <li>
            <a className="page-link">
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </a>
        </li>
       {' '}
        <select
            className="form-control paginate_select"
            value={pageSize}
            onChange={e => {
                setPageSize(Number(e.target.value))
            }}
            style={{ width: '120px', height: '38px' }}
        >
            {[5, 10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                </option>
            ))}
        </select>
     </ul>

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