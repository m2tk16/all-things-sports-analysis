import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import NavBar from './Navbar';
import Home from "./Home"
import Jarvis from "./Jarvis"
import Settings from "./Settings"
import ReleaseNotes from "./ReleaseNotes"
import { withAuthenticator } from "@aws-amplify/ui-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Auth from '@aws-amplify/auth';



const App = ({ signOut }) => {
  const [user, setUser] = useState("")
  Auth.currentAuthenticatedUser().then((user) => {
    setUser(user.attributes.email)
  });
  const userName = user.split("@")[0];

  return (
    <div className="app-body">
        <Router>
          <NavBar user={userName}/>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/jarvis' element={<Jarvis />} />
            <Route path='/settings' element={<Settings user={user} />} />
            <Route path='/release-notes' element={<ReleaseNotes user={user} />} /> 
          </Routes>
        </Router>
    </div>
  )
};


export default withAuthenticator(App);