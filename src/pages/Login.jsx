import React, {useState} from "react";
import {useHistory} from "react-router-dom";

import { Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

const API_URL = "http://131.181.190.87:3000";

// login

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
        }
      });
  }

  return(
    <div className="loginForm">
      
      <Form > 
        <FormGroup row>
          <Label for="email" sm={1}>Username</Label>
          <Col sm={10}>
            <Input type="email" name="email" id="email" placeholder="Email address" 
            onChange={(e) => {setUsername(e.target.value)}} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={1}>Password</Label>
          <Col sm={10}>
            <Input type="password" name="password" id="password" placeholder="password"
            onChange={(e) => {setPassword(e.target.value  )}} />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{size: 10, offset: 1}}>
            <Button 
            color="primary"
            type="submit"
            onClick={(e) => {e.preventDefault();
            Login(username, password);
            history.push("/")}}>Login</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
    
  )
}


//function App() {
  // function login() {
  //   const url = `${API_URL}/user/login`;
  //   let token = localStorage.getItem("token");
  //   const headers = {
  //     accept: "application/json",
  //     "Content-Type": "application/json",
  //     Authoriazation: `Bearer ${token}`
  //   }

  //   return fetch(url, {
  //     method: "POST",
  //     headers: {
  //       accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ email: "test01@gmail.com", password: "test01" })
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       localStorage.setItem("token", res.token);
  //     });
      
  // }

//   function authenticate(){
//     let year = 2020;
//     const url = `${API_URL}/factors/${year}`;
//     let token = localStorage.getItem("token");
//     const headers = {
//       accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`
//     }

//     return fetch(url, {headers})
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//       })
//   }

//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// }



// import React, {useState} from "react";
// import LoginForm from "../components/LoginForm";

// export default function Login(){
//   const admin = {
//     email: "admin@admin.com",
//     password: "123"
//   }

//   const [user, setUser] = useState({name: "", email: ""});
//   const [error, seterror] = useState("");

//   const Login = info => {
//     console.log(info);

//     if(info.email == admin.email && info.password == admin.password){
//       setUser({
//         name: info.name,
//         email: info.email
//       });
//     }else{
//       console.log("Info do not match.");
//     }
      
//   }

//   const Logout = () => {
//     setUser({name: "", email: ""});
//   }



//   return(
//     <div className="login">
//       {(user.email != "") ? (
//         <div className="welcome">
//           <h2>Welcome, <span>{user.name}</span></h2>
//           <button onClick={Logout}>Logout</button>
//         </div>
//       ) : (
//         <LoginForm Login={Login}/>
//       )

//       }
//     </div>
//   )
// }