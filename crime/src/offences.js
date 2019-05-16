import React, { useState } from "react";
 
export function Offences () {
    const [data, setData] = useState([]);

    const handleOffencesData = event => {
        return fetch("https://cab230.hackhouse.sh/offences")
        .then((res)=>res.json()) //TODO: check response is okay??? like this works fine i think but i probably should check it just for proffessionalism i guess
        .then((res)=>{
            setData(res.offences)
        })
        .catch((error) => {
            console.log("there has been a problem with your fetch operation", error.message);
            return (<p>There was an error :/</p>)
        });
    }

    handleOffencesData();

    return (
        <div>
        <h2>Offences</h2>
        <DisplayOffences data={data}/>
        </div>
    );
}

const DisplayOffences = props => {
    return (
        <table>
            <tbody>
                {props.data.map((offence) => (
                    <tr key={offence}><td>{offence}</td></tr>
                ))}
            </tbody>
        </table>
    )
}