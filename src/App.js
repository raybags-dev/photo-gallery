import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthProvider } from "./firebase/Auth";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/"  component={Login} />
          <Route path="/" to="login"  component={Home} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
