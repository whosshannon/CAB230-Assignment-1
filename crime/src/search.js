import React, { useState } from "react";
import { JWT } from "./Login";
//import Select from "react-select";
 
export function Search() {
    //TODO: pop in some graphs, maps, ect - may need to use graph.js version two because it's react
    let offenceTarget, areasTarget, agesTarget, gendersTarget, yearsTarget, monthsTarget=null;
    const [data, setData] = useState([]);

    const handleSearchData = function() {
        let query = "";

        if (offenceTarget!==null && offenceTarget!=="") {
            offenceTarget = encodeURI(offenceTarget);
            query+="offence="+offenceTarget;
        }
        if (areasTarget!==null && areasTarget!=="") {
            areasTarget = encodeURI(areasTarget);
            query+="&area="+areasTarget;
        }
        if (agesTarget!==null && agesTarget!=="") {
            agesTarget = encodeURI(agesTarget);
            query+="&age="+agesTarget;
        }
        if (gendersTarget!==null && gendersTarget!=="") {
            gendersTarget = encodeURI(gendersTarget);
            query+="&gender="+gendersTarget;
        }
        if (yearsTarget!==null && yearsTarget!=="") {
            yearsTarget = encodeURI(yearsTarget);
            query+="&year="+yearsTarget;
        }
        if (monthsTarget!==null && monthsTarget!=="") {
            monthsTarget = encodeURI(monthsTarget);
            query+="&month="+monthsTarget;
        }


        let url = "https://cab230.hackhouse.sh/search?"+query; 
        console.log(url);

        let getParam = { method: "GET" };
        let head = { Authorization: `Bearer ${JWT}` };
        getParam.headers = head;

        fetch(encodeURI(url), getParam)
            .then(function(response) {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(function(result) {
                setData(result.result);
            })
            .catch(function(error) {
                setData("There has been a problem with your fetch operation");
            });
        
    }

    let loginText;
    if (JWT == null) {
        loginText="Please login to use search functionality!"
    } else {
        loginText=null;
    }

    return (
      <div>
        <h2>Search</h2>
        <p style={{color: 'red'}}>{loginText}</p>
        <form onSubmit={(event) =>{
            event.preventDefault();
            offenceTarget=event.target.elements.Offence.value;
            areasTarget=event.target.elements.Areas.value;
            agesTarget=event.target.elements.Ages.value;
            gendersTarget=event.target.elements.Genders.value;
            yearsTarget=event.target.elements.Years.value;
            monthsTarget=event.target.elements.Months.value;

            handleSearchData()
        }}>
            {/* TODO: be able to see all the offences, areas, ages, ect. when searching */}
        <Input label="Offence"/> {/* TODO: offence cannot be null */}
        <Input label="Areas"/>
        <Input label="Ages"/>
        <Input label="Genders"/>
        <Input label="Years"/>
        <Input label="Months" />
        <button type="submit">Search!</button>
        <p>Note that an offence is required</p>
        <hr></hr>
        <DisplayData data={data}/> {/*TODO: make readily sortable from column heads*/}
        </form>

      </div>
    );
}

const Input = props => {
    const [name, setName] = useState("");

    return(
        <div>
            <label htmlFor={props.label}>{props.label}</label>
            <input
            type="text"
            name={props.label}
            id={props.label}
            value={name}
            onChange={(event) => {
                const {value} = event.target;
                    setName(value);
            }}
            />            
        </div>
    )
}

const DisplayData = props => {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Area</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
            {props.data.map((item) => (
                <tr key={item.LGA}>
                <td>{item.LGA}</td>
                <td>{item.total}</td>
                </tr>
            ))}
            </tbody>
            </table>
            {/* <p>{JSON.stringify(props.data)}</p> */}
        </div>
    )
}