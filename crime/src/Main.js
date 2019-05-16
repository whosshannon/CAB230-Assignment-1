import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Home } from "./Home";
import { Search } from "./Search";
import { Offences } from "./Offences";
import { Login } from "./Login";
import { Register } from "./Register";

export function Main() {
  return (
    <HashRouter>
      <div>
        <h1>CrimeWatch</h1>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/offences">Offences</NavLink></li>
          <li><NavLink to="/search">Search</NavLink></li>
          <div className="header-right">
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
          </div>
        </ul>
        <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/offences" component={Offences}/>
            <Route path="/search" component={Search}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </div>
      </div>
    </HashRouter>
  );
}