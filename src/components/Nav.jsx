//import { Button } from "bootstrap";
import React, {useState} from "react";
//import {Link} from "react-router-dom";
import {
  Navbar, Nav, NavItem, NavLink, NavbarBrand
} from "reactstrap";

// navigation links
export default function NavBar(){
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("token"));

  if({loggedIn}){
  return (
    <div className="navContainer">
      <Navbar color="dark" dark expand="lg">
          <NavbarBrand href="/">Happiness Home</NavbarBrand>
          <Nav className="mr-auto" navbar>
            
            <NavItem>
              <NavLink href="/ranking">Rankings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/search">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/factor">Factors</NavLink>
            </NavItem>
          </Nav>
        
          <Nav className="ml-auto" navbar> 
            <NavItem>
              <NavLink href="/" onClick={() => {logoutBt()}}>Logout</NavLink>
            </NavItem>
          </Nav>     
      </Navbar>
    </div>
  )}else if(!{loggedIn}){
    <div className="navContainer">
      <Navbar color="dark" dark expand="lg">
          <NavbarBrand href="/">Happiness Home</NavbarBrand>
          <Nav className="mr-auto" navbar>
            
            <NavItem>
              <NavLink href="/ranking">Rankings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/search">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/factor">Factors</NavLink>
            </NavItem>
          </Nav>

          {/* For user accounts */}
          <Nav className="ml-auto" navbar> 
            <NavItem>
              <NavLink href="/register">Register</NavLink>
            </NavItem>  
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
          </Nav>

      </Navbar>
    </div>
  }

  function logoutBt() {
    localStorage.clear();
    console.log("Logout");
  }
}