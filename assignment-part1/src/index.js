import React from "react";
import ReactDOM from "react-dom";
import "./styles.css"

let JWT = null;

function RegisterButton() {
    function Register() {
        console.log("Register me, Seymour!");
        fetch("https://cab230.hackhouse.sh/register", {
            method: "POST",
            body: 'email=N10205144%40qut.edu.au&password=bubblewrap', //TODO: enter from form, not manually
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        })
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok");
        })
        .then(function(result) {
            let appDiv = document.getElementById("app");
            appDiv.innerHTML = JSON.stringify(result);
            this.disabled = true;
        })
        .catch(function(error) {
            console.log("There has been a problem with your fetch operation: ",error.message);
        });
    }

    return (
        //<div>
            <button id="registerBtn" onClick={Register} disabled>Register</button>
        //</div>
    )
}

function SignInButton() {
    function SignIn() {
        console.log("Sign me up, Scotty.");
        fetch("https://cab230.hackhouse.sh/login", {
        method: "POST",
        body: 'email=N10205144%40qut.edu.au&password=bubblewrap',
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    })
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(function(result) {
            let appDiv = document.getElementById("app");
            appDiv.innerHTML = JSON.stringify(result);
            JWT = result.token;
        })
        .catch(function(error) {
            console.log("There has been a problem with your fetch operation: ",error.message);
        });
    }

    return (
        //<div>
            <button id="signBtn" onClick={SignIn}>Sign In</button>
        //</div>
    )
}

function OffencesButton() {
    function getOffences() {
        console.log("That is an offence, son!");
        fetch("https://cab230.hackhouse.sh/offences")
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(function(result) {
            let appDiv = document.getElementById("app");
            appDiv.innerHTML = JSON.stringify(result);
        })
        .catch(function(error) {
            console.log("There has been a problem with your fetch operation: ",error.message);
        });
    }

    return (
        //<div>
            <button id="offencesBtn" onClick={getOffences}>Offences</button>
        //</div>
    )
}

function SearchButton() {
    function getSearch() {
        console.log("Searching??");
    }

    return (
        //<div>
            <button id="searchBtn" onClick={getSearch}>Search</button>
        //</div>
    )
}

function Menu() {
    return (
        <div className="menu">
            <div id="user-details">
                <RegisterButton />
                <SignInButton />
            </div>
            <div id="simple-nav">
                <OffencesButton />
                <SearchButton />
            </div>
        </div>
    );
}

function Those() {
    function getem(filter) {
        let getParam = { method: "GET" };
        let head = { Authorization: `Bearer ${JWT}` };
        getParam.headers = head;

        //The URL
        const baseUrl = "https://cab230.hackhouse.sh/search?";
        const query = 'offence=Armed Robbery';

        const url = baseUrl + query + "&" + filter;

        // fetch(encodeURI(url),getParam) DEBUG:
        //     .then(function(response) {
        //         if (response.ok) {
        //             return response.json();
        //         }
        //         throw new Error("Network response was not ok.");
        //     })
        //     .then(function(result) {
        //         let appDiv = document.getElementById("app");
        //         appDiv.innerHTML = JSON.stringify(result);
        //     })
        //     .catch(function(error) {
        //             console.log("There has been a problem with your fetch operation: ",error.message);
        //     }); 
        console.log(url);
        }

    return (
        <div className="filter">
            <button id="area" onClick={getem("area=Moreton Bay Regional Council")}>Area</button>
            <button id="age" onClick={getem("age=Juvenile")}>Age</button>
            <button id="year" onClick={getem("year=2006,2007,2008")}>Year</button>
        </div>
    )
}
    
const menuElement = document.getElementById("menu");
ReactDOM.render(<Menu />, menuElement);
const filterElement = document.getElementById("filter");
ReactDOM.render(<Those />, filterElement);