import React, {useState} from "react";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import Droplist from "../components/Droplist";
import {useData} from "../components/api";

//===========================================
export default function Ranking(){ 
  
  const [innerChoose, setInnerChoose] = useState("2015");
  const {loading, rowData, error} = useData(innerChoose);
  
  const columns = [
    {headerName: "Rank", field: "rank"},
    {headerName: "Country", field: "country"},
    {headerName: "Score", field: "score"},
  ];

  if(loading){
    return <p>Loading</p>
  }
  if(error){
    return <p>Something went wrong: {error.message}</p>
  }

  return(
    <div className="container">
      <Droplist onChange={setInnerChoose} />
      

      <div
      className="ag-theme-balham"
      style={{
        height: "500px",
        width: "100%",
        margin: "auto"
      }}>
        <AgGridReact
        columnDefs={columns}
        rowData={rowData}
        pagination={true}
        paginationPageSize={10}
        /> 
      </div>
      
    </div>
    
  )
}




