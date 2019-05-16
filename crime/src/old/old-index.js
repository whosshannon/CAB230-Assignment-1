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

class AppRouter extends React.Component {
    render () {
        // function Test() {
        //     return <p>hello</p>;
        // }

        function Home() {
            function HomeApp() {
                return (
                    <div className="Home">
                        <h3>Welcome to Crime Watch!</h3>
                        <p>Here you can check out some crime data from all over Queensland! 
                            You can choose which Local Government Area to display as well as which crimes, 
                            the ages and sexes of the offenders, and the year that the offences occurred in. 
                            Have fun sleeping at night now, i guess ¯\_(ツ)_/¯ </p>
                    </div>
                )
            }

            //ReactDOM.render(<HomeApp />, document.getElementById("app"));

            return <HomeApp />;
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

            //ReactDOM.render(<OffencesApp />, document.getElementById("app"));

            return <OffencesApp />;
        }
        
        function Search() {
        
            function SearchApp() {
                const SearchData = SearchPage();
                    
                const [search, setSearch] = useState("");

                return (
                    <div  className="Search">
                        <SearchBar onSubmit={setSearch} key="offencesSearch" labelText="offences"/>
                        <SearchBar onSubmit={setSearch} key="areaSearch" labelText="areas"/>
                        <SearchBar onSubmit={setSearch} key="ageSearch" labelText="ages"/>
                        <button>Clear search criteria</button>
                        <p>{search}</p>
                    </div>
                )
            }

            //ReactDOM.render(<SearchApp />, document.getElementById("app"));

            return <SearchApp />;
        }
        
        function Login() {
            //const [email, setEmail] = useState("");
            //const [password, setPassword] = useState("");
            //const [loginData, setLoginData] = useState(null);
            // setEmail("N10205144@qut.edu.au");
            // setPassword("bubblewrap")

            let email, password, loginData=null;

            function setEmail(userEmail) {
                email=userEmail;
            }

            function setPassword(userPassword) {
                password=userPassword;
            }
            
            function setLoginData(userLoginData) {
                loginData=userLoginData;
            }
            
            function LoginApp() {
                return (
                    <div className="Login">
                        <p id="log">log?</p>
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            setEmail(event.target.elements.email.value);
                            setPassword(event.target.elements.password.value);
                            setLoginData(email);
                            console.log("email: "+email);
                            console.log("password: "+password);

                            JWT = LoginPage(email, password);


                            document.getElementById("loginResult").innerHTML=JWT;
                        }}>
                        <label htmlFor="email">Email: </label>
                        <input id="email" type="text" name="email"></input>
                        <label htmlFor="password">Password: </label>
                        <input id="password" type="text" name="password"></input>
                        <button type="submit">Login</button>
                        </form>
                        <p id="loginResult"></p>
                    </div>
                )
            }

            //ReactDOM.render(<LoginApp />, document.getElementById("app"));
            
            return <LoginApp />;
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

            <Route exact path="/" component={Home}/>
            <Route path="/offences" component={Offences} />
            <Route path="/search/" component={Search} />
            <Route path="/login/" component={Login} />
            <Route path="/register/" component={Register} />
        </div>
        </Router>
    );
        }
}

ReactDOM.render(<AppRouter />, document.getElementById('navbar'));