import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthProvider, AuthenticatedRoute, UnauthenticatedRoute } from "./firebase/Auth";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <UnauthenticatedRoute exact path="/login" component={Login} />
          <AuthenticatedRoute path="/" component={Home} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
