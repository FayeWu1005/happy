import React, {useState} from "react";
import {AgGridReact} from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import {Line} from 'react-chartjs-2';



import {useAllData} from "../components/api";
import SearchBar from "../components/SearchBar";

//===========================================
export default function Search(){ 
  const [search, setSearch] = useState("Finland");
  const {loading, rowData, error} = useAllData(search);

  let chartData = rowData.map((e) => e.score);
  console.log(chartData);
  
  const columns = [
    {headerName: "Year", field: "year"},
    {headerName: "Rank", field: "rank"},
    {headerName: "Score", field: "score"}
  ];

  //============= line chart ===============================

  const data = {
    labels: [2015,2016,2017,2018,2019,2020],
    datasets: [
      {
        label: 'The change of rank from 2015 to 2020',
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        //data:{chartData}
        data: ["7.2", "6.3", "7.8", "6.4", "7,3", "7.6"]
      }
    ]
  };
  

  if(loading){
    return <p>Loading</p>
  }
  if(error){
    return <p>Something went wrong: {error.message}</p>
  }

  return(
    <div className="container">
      <SearchBar onSubmit={setSearch} />
      <br />
      <div
      className="ag-theme-balham"
      style={{
        height: "250px",
        width: "100%",
        margin: "auto"
      }}>
        <AgGridReact
        columnDefs={columns}
        rowData={rowData}
        pagination={true}
        paginationPageSize={15}
        /> 
      </div>
      <br />
      <div className="lineChart">
        <Line data={data} />
      </div>
    </div>
    
  )
}



