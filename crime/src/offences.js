import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function OffencesApp(props) {
    return (
        <div className="OffencesApp">
        <table>
            <thead><tr><th>Offences</th></tr></thead>
            <tbody>
            {props.offences.map((offence) =>(
                <tr key={offence}><td>{offence}</td></tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

