import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import './index.css';

export default function OffencesPage() {
        //TODO: we would also use react router here
        //TODO: render to that DOM boi

    const [OffencesData, setOffencesData] = useState([]);

    useEffect(
        () => {
            getem()
                .then((OffencesData)=> {
                    setOffencesData(OffencesData);
                })
        }, [],
    );

    function getem() {
        return fetch("https://cab230.hackhouse.sh/offences")
        .then((res)=>res.json()) //TODO: check response is okay??? like this works fine i think but i probably should check it just for proffessionalism i guess
        .then((res)=>res.offences)
        .catch((error) => {
            console.log("there has been a problem with your fetch operation", error.message);
            return (<p>There was an error :/</p>)
        })
    }

    return OffencesData;
}