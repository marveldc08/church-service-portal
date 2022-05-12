import React, { useMemo, useState } from "react";
import { useAsyncDebounce } from "react-table";

interface globalFilterProp {
     globalFilter : any, 
     setGlobalFilter : (prop : any) => void
}
// Component for Global Filter
export function GlobalFilter({ 
     globalFilter, 
     setGlobalFilter 
  }: globalFilterProp) {
   const [value, setValue] = useState(globalFilter);
   
   const onChange = useAsyncDebounce((value) => {
     setGlobalFilter(value || undefined);
   }, 200);
   
   return (
     <div>
       <label>Search Table: </label>
       <input
         value={value || ""}
         onChange={(e) => {
           setValue(e.target.value);
           onChange(e.target.value);
         }}
         placeholder=" Enter value "
         className="w-25"
         style={{
           fontSize: "1.1rem",
           margin: "15px",
           display: "inline",
         }}
       />
     </div>
   );
  }

  interface defaultFilterProp {
       column : {
            filterValue: any;
            preFilteredRows: {length: number};
            setFilter : (prop: string | undefined  ) => void
       }
  }
  // Component for Default Column Filter
export function DefaultFilterForColumn({
     column: {
       filterValue,
       preFilteredRows: { length },
       setFilter,
     },
    }: defaultFilterProp) {
     return (
       <input
         value={filterValue || ""}
         onChange={(e) => {
           // Set undefined to remove the filter entirely
           setFilter(e.target.value || undefined );
         }}
         placeholder={`Search ${length} records..`}
         style={{ marginTop: "10px" }}
       />
     );
    }


    interface selectColumnProp {
          column: {
               filterValue: string;
               setFilter: (prop : string | undefined ) => void;
               preFilteredRows: [];
               id: number;
          }
    }
    // Component for Custom Select Filter
export function SelectColumnFilter({
     column: { filterValue, setFilter, preFilteredRows, id },
    }: selectColumnProp) {
     
     // Use preFilteredRows to calculate the options
     const options = useMemo(() => {
       const options = new Set([]);
       preFilteredRows.forEach((row: { values: []; }) => {
         options.add(row.values[id]);
       });
       return [...options.values()];
     }, [id, preFilteredRows]);
     
     // UI for Multi-Select box
     return (
       <select
         value={filterValue}
         onChange={(e) => {
           setFilter(e.target.value || undefined );
         }}
       >
         <option value="">All</option>
         {options.map((option, i) => (
           <option key={i} value={option}>
             {option}
           </option>
         ))}
       </select>
     );
    }
    