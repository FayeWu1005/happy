import React from "react";
import {
  Navbar, Nav, NavItem, NavLink, NavbarBrand
} from "reactstrap";

// navigation links
export default function NavBar(){
  return (
      <div className="navContainer">
        <Navbar color="dark" dark expand="lg">
            <NavbarBrand href="/">Happiness</NavbarBrand>
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
              <NavLink href="/register" style={{backgroundColor: '#cf1322', color:'#ffffff'}}>Register</NavLink>
             </NavItem>           
            <NavItem>
               <NavLink href="/login">Login</NavLink>
             </NavItem>
             <NavItem>
                <NavLink href="/" onClick={() => {logoutBt()}}>Logout</NavLink>
              </NavItem>

            </Nav>     
          </Navbar>
      </div>)

  function logoutBt() {
    localStorage.clear();
  }
}