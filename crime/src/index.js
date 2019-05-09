import React, {useState} from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import OffencesPage from './offences';
import SearchPage from './search';
import {SearchBar} from './components';
import {Input} from './components';
import LoginPage from './login';

let JWT = null;

export function AppRouter() {
    function Home() {
        function HomeApp() {
            return (
                <div>
                    <h3>Welcome to Crime Watch!</h3>
                    <p>Here you can check out some crime data from all over Queensland! 
                        You can choose which Local Government Area to display as well as which crimes, 
                        the ages and sexes of the offenders, and the year that the offences occurred in. 
                        Have fun sleeping at night now, i guess ¯\_(ツ)_/¯ </p>
                </div>
            )
        }

        ReactDOM.render(<HomeApp />, document.getElementById("app"));

        return null;
    }

    function Offences() {
        
        function OffencesApp() {
            const OffencesData = OffencesPage();
            
            return (
                <div className="Offences">
                <h2>List of offences:</h2>
                <table>
                    {/* <thead><tr><th>Offences</th></tr></thead>  */} {/* DEBUG: do i want this? how should offences be set out? */}
                    <tbody>
                    {OffencesData.map((offence) =>(
                        <tr key={offence}><td>{offence}</td></tr>
                    ))}
                    </tbody>
                </table>
                </div>
            );
        }

        ReactDOM.render(<OffencesApp />, document.getElementById("app"));

        return null;
    }
    
    function Search() {
      
        function SearchApp() {
            const SearchData = SearchPage();
                
            const [search, setSearch] = useState("");

            return (
                <div>
                    <SearchBar onSubmit={setSearch} key="offencesSearch" labelText="offences"/>
                    <SearchBar onSubmit={setSearch} key="areaSearch" labelText="areas"/>
                    <SearchBar onSubmit={setSearch} key="ageSearch" labelText="ages"/>
                    <button>Clear search criteria</button>
                    <p>{search}</p>
                </div>
            )
        }

        ReactDOM.render(<SearchApp />, document.getElementById("app"));

        return null;
    }
    
    function Login() {
        // const [email, setEmail] = useState("");
        // const [password, setPassword] = useState("");
        // setEmail("N10205144@qut.edu.au");
        // setPassword("bubblewrap")
        
        let tester = LoginPage("N10205144@qut.edu.au", "bubblewrap");

        // function LoginApp() {
        //     return (
        //         <div className="Login">
        //             <Input label="Email: " onSubmit={setEmail} key="email"/>
        //             <Input label="Password: " onSubmit={setPassword} key="password"/>
        //             <p>Email: {email}</p>
        //             <p>Sneaky password peak: {password}</p>
        //         </div>
        //     )
        // }
        function LoginApp() {
            return (
                <div className="Login">
                    <p>{tester}</p>
                </div>
            )
        }

        ReactDOM.render(<LoginApp />, document.getElementById("app"));
        
        return null;
    }

    function Register() {
        return <h2>Register go here</h2>;
    }

    return (
    <Router>
      <div>
        <nav>
          <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>
            <li>
                <Link to="/offences">Offences</Link>
            </li>
            <li>
                <Link to="/search/">Search</Link>
            </li>
            <li>
                <Link to="/login/">Login</Link>
            </li>
            <li>
                <Link to="/register/">Register</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/offences" component={Offences} />
        <Route path="/search/" component={Search} />
        <Route path="/login/" component={Login} />
        <Route path="/register/" component={Register} />
      </div>
    </Router>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById('navbar'));