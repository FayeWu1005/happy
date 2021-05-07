import React from "react";
import Nav from "./Nav";

// the header
export default function Header(props){
  return(
    <header>
      <Nav isLoggedIn={props.isLoggedIn} setLoggedIn={props.setLoggedIn}/>
    </header>
  )
}