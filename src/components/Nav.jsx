//import { Button } from "bootstrap";
import React from "react";
//import {Link} from "react-router-dom";
import {
  Navbar, Nav, NavItem, NavLink, NavbarBrand, Button
} from "reactstrap";

// navigation links
export default function NavBar(){
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
              <NavLink href="/register">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" onClick={() => {logoutBt()}}>Logout</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>

   
    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/ranking">Rankings</Link>
    //     </li>
    //     <li>
    //       <Link to="/search">Search</Link>
    //     </li>
    //     <li>
    //       <Link to="/factor">Factors</Link>
    //     </li>
    //     <li>
    //       <Link to="/register">Register</Link>
    //     </li>
    //     <li>
    //       <Link to="/login">Login</Link>
    //     </li>
    //   </ul>
    // </nav>
  )
  function logoutBt() {
    localStorage.clear();
    console.log("Logout");
  }
}