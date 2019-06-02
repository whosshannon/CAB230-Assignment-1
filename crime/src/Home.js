import React from "react";
import { JWT } from "./Login";
 
export function Home() {

    let loginText;
    if (JWT == null) {
        loginText="Please login to use search functionality!"
    } else {
        loginText=null;
    }
    
    return (
        <div>
        <h2>Welcome to CrimeWatch</h2>
        <p>Look up crime data specific to what you care about!</p>

        <p style={{color: 'red'}}><br></br>{loginText}</p>

        </div>
        );
}