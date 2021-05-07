import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import Droplist from "../components/Droplist";
import {useFactor} from "../components/api";

//===========================================
export default function Ranking(props){ 
  const [innerChoose, setInnerChoose] = useState("2015");
  const {loading, rowData, error} = useFactor(innerChoose);
  const history = useHistory();

  const columns = [
    {headerName: "Rank", field: "rank"},
    {headerName: "Country", field: "country"},
    {headerName: "Score", field: "score"},
    {headerName: "Economy", field: "economy"},
    {headerName: "Family", field: "family"},
    {headerName: "Health", field: "health"},
    {headerName: "Freedom", field: "freedom"},
    {headerName: "Generosity", field: "generosity"},
    {headerName: "Trust", field: "trust"}
  ];

  if(loading){
    return <p>Loading</p>
  }
  else if(error){
    return <p>Something went wrong: {error.message}</p>
  }
  else{
    return(

      <div className="container">
        {props.isLoggedIn? <><Droplist onChange={setInnerChoose}/>
        <div
        className="ag-theme-balham"
        style={{
          height: "500px",
          width: "800",
          margin: "auto"
        }}>
          <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          pagination={true}
          paginationPageSize={15}
          onRowClicked={(row) => history.push(`/charts?country=${row.data.country}&year=${innerChoose}`)}
          /> 
        </div></> : <><h2 className="errorPage">Oops!! Please login.</h2></>}    
      </div>  
    )
  }

  
}



