import React from "react";
import { JWT } from "./Login";
 
export function Home() {
    
    return (
        <div>
        <h2>Welcome to CrimeWatch</h2>
        <p>Look up crime data specific to what you care about!</p>

        <p>Have fun sleeping at night tho :/</p>
        
        <p id="shouldLogin"></p>

        </div>
        );
}

const plz = props => {
    return (
        <div>
            <hr></hr>
            <p id="shouldLogin" style={{color:'red'}}> {/*TODO: don't show when actually logged in, duh*/}
                Please note; you are not logged in. Please login to access the search functionality
            </p>

        </div>
    )
}