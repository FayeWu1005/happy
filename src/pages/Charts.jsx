import React, {useState} from "react";
import {useLocation, useHistory} from "react-router-dom";
import {Button} from "reactstrap";
import {Bar} from "react-chartjs-2";

import {useFactorByCountry} from "../components/api";

export default function Charts(){
  const history = useHistory();
  const params = new URLSearchParams(useLocation().search);
  const country = params.get("country");
  const year = params.get("year");

  const {loading, rowData, error} = useFactorByCountry(year, country);

  // // ============== bar chart =============================
  let economyData = rowData.map((e) => e.economy);
  let familyData = rowData.map((e) => e.family);
  let healthData = rowData.map((e) => e.health);
  let freedomData = rowData.map((e) => e.freedom);
  let generosityData = rowData.map((e) => e.generosity);
  let trustData = rowData.map((e) => e.trust);

  let barData = [...economyData, ...familyData, ...healthData, ...freedomData, ...generosityData, ...trustData]
  
  console.log(barData)

  const data = {
    labels: ["Economy", "Family", "Health", "Freedom", "Generosity", "Trust"],
    datasets: [
      {
        label: 'score',
        data: barData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: false,
          min: 5,
          max: 9
        }
      }
    }
  }
//-------------------------------------------------------------

  if(loading){
    return <p>Loading</p>
  }
  if(error){
    return <p>Something went wrong: {error.message}</p>
  }

  return (
    <div className="container">
      <h3>Factors display for {country}</h3>

      <Bar data={data} />

      <Button
      color="info"
      size="sm"
      className="mt-3"
      onClick={() => history.goBack()}>Back</Button>
    </div>
    
  )
}