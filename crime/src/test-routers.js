import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import {TestDiv} from './test-div';
import OffencesPage from './offences';

export function AppRouter() {
    function Offences() {
        const OffencesData = OffencesPage();

        return (
            <div className="Offences">
            <table>
                <thead><tr><th>Offences</th></tr></thead>
                <tbody>
                {OffencesData.map((offence) =>(
                    <tr key={offence}><td>{offence}</td></tr>
                ))}
                <tr><td>Hello!</td></tr>
                </tbody>
            </table>
            </div>
        );
    }
    
    function Search() {
      return <h2>Search is meant to go here</h2>;
    }
    
    function Login() {
      return <h2>Login is meant to go here</h2>;
    }

    return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/offences">Offences</Link>
            </li>
            <li>
              <Link to="/search/">Search</Link>
            </li>
            <li>
              <Link to="/login/">Login</Link>
            </li>
          </ul>
        </nav>

        <Route path="/offences" component={Offences} />
        <Route path="/search/" component={Search} />
        <Route path="/login/" component={Login} />
      </div>
    </Router>
  );
}