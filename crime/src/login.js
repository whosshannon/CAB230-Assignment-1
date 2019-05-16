import React, { useState } from "react";

export let JWT=null;

export function Login() {
    const [data, setData] = useState(null);
    let email, password = null;

    const handleLoginFetch = function(email, password) {

        let validEmail = email.replace("@", "%40");
        let fetchBody = "email="+validEmail+"&password="+password;
        fetch("https://cab230.hackhouse.sh/login", {
        method: "POST",
        body: fetchBody,
        headers: {
            "Content-type": "application/x-www-form-urlencoded"}
        })
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(function(result) {
                setData(JSON.stringify(result));
            })
            .catch(function(error) {
                setData("There has been a problem with your fetch operation");
            });
    }

    const handleLoginInfo = event => {
        email = event.target.elements.email.value;
        password = event.target.elements.password.value;
        handleLoginFetch(email, password);
    }

    JWT=data;

    return (
        <div>
            <LoginForm handleLoginInfo={handleLoginInfo}/>
            <p>{data}</p>
        </div>
    );
}

const LoginForm = props => {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();

            props.handleLoginInfo(event);
        }}>
            <label htmlFor="email">Email: </label>
            <input id="email" type="text" defaultValue="N10205144@qut.edu.au"></input> {/* DEBUG:prefilled */}
            <label htmlFor="password">Password: </label>
            <input id="password" type="password" defaultValue="bubblewrap"></input> {/* DEBUG:prefilled */}
            <button type="submit">Login</button>
        </form>
    )
}
