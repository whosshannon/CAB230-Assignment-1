import React, { useState } from "react";

export function Register() {
    //TODO: only login once
    //TODO: actual error messages
    //TODO: prepopulate login screen 
    const [data, setData] = useState(null);
    const [successful, setSuccessful] = useState(null);
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
                setSuccessful(true);
            })
            .catch(function(error) {
                setData("There has been a problem with your fetch operation");
                setSuccessful(false);
            });
    }

    const handleRegisterInfo = event => {
        email = event.target.elements.email.value;
        password = event.target.elements.password.value;
        handleRegisterFetch(email, password);
    }

    let loginText;
    if (successful===true) {
        loginText="Successfully registered! Make sure you log in as well"
    } else if (successful===false) {
        loginText="Looks like there was a problem registering";
    } else {
        loginText=null;
    }

    return (
        <div>
            <p></p>
            <RegisterForm handleRegisterInfo={handleRegisterInfo}/>
            <p>{loginText}</p>
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