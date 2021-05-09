import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

const API_URL = "http://131.181.190.87:3000";

export default function LoginForm(){
    const URL = `${API_URL}/user/login`;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    
  function Login(username, password) {
    return fetch(URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: username, password: password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.message);
        } else {
          localStorage.setItem("token", res.token);
          //props.setLoggedIn(true)
        }
      });
  }

  return(
    <div className="form">
      <h2 className="loginTitle">Login</h2><br />
      <Form > 
        <FormGroup row>
          <Label for="email" >Username</Label>
          <Col >
            <Input type="email" name="email" id="email" placeholder="Email address" 
            onChange={(e) => {setUsername(e.target.value)}} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password">Password</Label>
          <Col >
            <Input type="password" name="password" id="password" placeholder="password"
            onChange={(e) => {setPassword(e.target.value  )}} />
          </Col>
        </FormGroup>
        <br />
        <FormGroup>
          <Col >
            <Button 
            color="info"
            type="submit"
            block
            onClick={(e) => {e.preventDefault();
            Login(username, password);
            history.push("/")}}>Login</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
    
  )
}