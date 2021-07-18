import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider } from "./firebase/Auth";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/" to="/login" component={Signup} />
          <Route exact path="/home" to="/home" component={Home} />
          <Route exact path="/login" to="/login" component={Login} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
