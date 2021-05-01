import React from "react";
import {useLocation, useHistory} from "react-router-dom";
import {Button} from "reactstrap";

export default function Charts(){
  const history = useHistory();
  const params = new URLSearchParams(useLocation().search);
  const country = params.get("country");

  return (
    <div className="container">
      <h1>This is chart page.</h1>
      <h3>The country that you seleced was : {country}</h3>

      <Button
      color="info"
      size="sm"
      className="mt-3"
      onClick={() => history.goBack()}>Back</Button>
    </div>
    
  )
}