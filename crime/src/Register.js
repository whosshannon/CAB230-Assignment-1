import React, { useState } from "react";

export function Register() {
    //TODO: only login once
    //TODO: actual error messages
    //TODO: prepopulate login screen 
    const [data, setData] = useState(null);
    let email, password = null;

    const handleRegisterFetch = function(email, password) {

        let validEmail = email.replace("@", "%40");
        let fetchBody = "email="+validEmail+"&password="+password;
        fetch("https://cab230.hackhouse.sh/register", {
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
                setData(JSON.stringify(result.message));
            })
            .catch(function(error) {
                setData("There has been a problem with your fetch operation");
            });
    }

    const handleRegisterInfo = event => {
        email = event.target.elements.email.value;
        password = event.target.elements.password.value;
        handleRegisterFetch(email, password);
    }

    return (
        <div>
            <RegisterForm handleRegisterInfo={handleRegisterInfo}/>
            <p>{data}</p>
        </div>
    );
}

const RegisterForm = props => {
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            props.handleRegisterInfo(event);
        }}>
            <label htmlFor="email">Email: </label>
            <input id="email" type="text" ></input>
            <label htmlFor="password">Password: </label>
            <input id="password" type="password"></input>
            <button type="submit">Login</button>
        </form>
    )
}