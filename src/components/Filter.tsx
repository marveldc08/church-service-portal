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