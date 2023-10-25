import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import NavBar from './Navbar';
import Home from "./Home"
import Jarvis from "./Jarvis"
import Settings from "./Settings"
import {
  Button,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Auth from '@aws-amplify/auth';



const App = ({ signOut }) => {
  const [user, setUser] = useState("")
  Auth.currentAuthenticatedUser().then((user) => {
    setUser(user.attributes.email)
  });


  return (
    <div className="app-body">
        <Button onClick={signOut}>Sign Out</Button>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/jarvis' element={<Jarvis />} />
            <Route path='/settings' element={<Settings user={user} />} /> 
          </Routes>
        </Router>
    </div>
  )
};


export default withAuthenticator(App);