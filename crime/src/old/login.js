import /*React,*/ { useState/*, useEffect */} from "react";
// import ReactDOM from "react-dom";
import './index.css';

export default function LoginPage(email, password) { //email, password
    let [token, setToken] = useState(null);

    // let email = "N10205144@qut.edu.au";
    // let password = "bubblewrap";
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
            // let appDiv = document.getElementById("app");
            // appDiv.innerHTML = JSON.stringify(result);
            setToken(JSON.stringify(result));
        })
        .catch(function(error) {
            setToken("There has been a problem with your fetch operation");
        });
    return token;
}