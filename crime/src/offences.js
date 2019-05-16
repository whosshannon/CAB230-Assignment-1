import React, { useState } from "react";
 
export function Offences () {
    const [data, setData] = useState([]);

    const handleOffencesData = event => {
        return fetch("https://cab230.hackhouse.sh/offences")
        .then((res)=>res.json()) //TODO: check response is okay??? like this works fine i think but i probably should check it just for proffessionalism i guess
        .then((res)=>res.offences)
        .catch((error) => {
            console.log("there has been a problem with your fetch operation", error.message);
            return (<p>There was an error :/</p>)
        });
    }
    const setOffencesData = event => {
        setData(handleOffencesData);
    }

    return (
        <div>
        <h2>Offences</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
        </div>
    );
}
 
export default Offences;