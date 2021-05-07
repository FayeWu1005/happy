import React from "react";
import {
  Navbar, Nav, NavItem, NavLink, NavbarBrand
} from "reactstrap";

// navigation links
export default function NavBar(props){
 
  return (
      <div className="navContainer">
        <Navbar color="dark" dark expand="lg">
            <NavbarBrand href="/">World Happiness Ranking</NavbarBrand>
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
           {!props.isLoggedIn ? <NavItem>
              <NavLink href="/register">Register</NavLink>
             </NavItem>: null}
               
             {!props.isLoggedIn ?  <NavItem>
               <NavLink href="/login">Login</NavLink>
             </NavItem> : null}
            
             {props.isLoggedIn ?  <NavItem>
                <NavLink href="/" onClick={() => {logoutBt()}}>Logout</NavLink>
              </NavItem> : null}
              
            </Nav>     
          </Navbar>
      </div>)

  function logoutBt() {
    localStorage.clear();
    props.setLoggedIn(false);
  }
}