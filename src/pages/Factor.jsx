import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import Droplist from "../components/Droplist";
import {useFactor} from "../components/api";

//===========================================
export default function Ranking(){ 
  const [innerChoose, setInnerChoose] = useState("2015");
  const {loading, rowData, error} = useFactor(innerChoose);
  const history = useHistory();

  const columns = [
    {headerName: "Rank", field: "rank", width: 80},
    {headerName: "Country", field: "country"},
    {headerName: "Score", field: "score",width: 120},
    {headerName: "Economy", field: "economy",width: 120},
    {headerName: "Family", field: "family",width: 120},
    {headerName: "Health", field: "health",width: 120},
    {headerName: "Freedom", field: "freedom",width: 120},
    {headerName: "Generosity", field: "generosity",width: 120},
    {headerName: "Trust", field: "trust",width: 120}
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
          <Droplist onChange={setInnerChoose}/>
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
          </div>
        </div> 
      )
    } 
  }


  




