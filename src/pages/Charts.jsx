import React, {useState} from "react";
import {useLocation, useHistory} from "react-router-dom";
import {Button} from "reactstrap";
import {Bar} from "react-chartjs-2";

import {useAllData} from "../components/api";

export default function Charts(){
  const history = useHistory();
  const params = new URLSearchParams(useLocation().search);
  const country = params.get("country");

  const {loading, rowData, error} = useAllData(country);

  // // ============== bar chart =============================
  let barData = rowData.map((e) => parseFloat(e.economy));
  
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
  // const options = {
  //   scales: {
      
  //     // yAxes: [
  //     //   { 
  //     //     ticks: {
  //     //       beginAtZero: false,
  //     //       min: 6,
  //     //       max: 9
  //     //     },
  //     //   },
  //     // ],
  //   },
  // };
  //-------------------------------------------------------------

  if(loading){
    return <p>Loading</p>
  }
  if(error){
    return <p>Something went wrong: {error.message}</p>
  }

  return (
    <div className="container">
      <h3>The country that you seleced was : {country}</h3>

      <Bar data={data} />

      <Button
      color="info"
      size="sm"
      className="mt-3"
      onClick={() => history.goBack()}>Back</Button>
    </div>
    
  )
}