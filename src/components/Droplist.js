import React, { useState } from "react";


export default function Droplist(props){
  const [choose, setChoose] = useState();
  const years = [
    {
      label: "2015",
      value: "2015",
    },
    {
      label: "2016",
      value: "2016",
    },
    {
      label: "2017",
      value: "2017",
    },
    {
      label: "2018",
      value: "2018",
    },
    {
      label: "2019",
      value: "2019",
    },
    {
      label: "2020",
      value: "2020",
    },
  ];

  return(
    <div>
    <label htmlFor="year" className="year_choose">Choose a year: </label>
      <select
      className="droplist" 
      id="year"
      value={choose}
      onChange={e => {
        setChoose(e.target.value)
        props.onChange(e.target.value)
      }
      }>
        {years.map(item => (
          <option 
            key={item.label} 
            value={item.value}
            >
            {item.label}
          </option>
        ))}
        
      </select>
    </div>
  )
}