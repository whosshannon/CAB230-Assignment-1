import React, { useState } from "react";
import { JWT } from "./Login";
//import Select from "react-select";
import { Input } from "./old/components";
 
export function Search() {
    let offenceTarget, areasTarget, agesTarget, gendersTarget, yearsTarget, monthsTarget=null;
    const [data, setData] = useState([]);

    const handleSearchData = function() {
        let query = "";

        if (offenceTarget!==null && offenceTarget!=="") {
            offenceTarget=offenceTarget.replace(/,/g, '%2C').replace(/ /g, '%20');
            query+="offence="+offenceTarget;
        }
        if (areasTarget!==null && areasTarget!=="") {
            areasTarget=areasTarget.replace(/,/g, '%2C').replace(/ /g, '%20');
            query+="&LGA="+areasTarget;
        }
        if (agesTarget!==null && agesTarget!=="") {
            agesTarget=agesTarget.replace(/,/g, '%2C').replace(/ /g, '%20');
            query+="&age="+agesTarget;
        }
        if (gendersTarget!==null && gendersTarget!=="") {
            gendersTarget=gendersTarget.replace(/,/g, '%2C').replace(/ /g, '%20');
            query+="&gender="+gendersTarget;
        }
        if (yearsTarget!==null && yearsTarget!=="") {
            yearsTarget=yearsTarget.replace(/,/g, '%2C').replace(/ /g, '%20');
            query+="&year="+yearsTarget;
        }
        if (monthsTarget!==null && monthsTarget!=="") {
            monthsTarget=monthsTarget.replace(/,/g, '%2C').replace(/ /g, '%20');
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

    return (
      <div>
        <h2>Search</h2>
        <p>{JWT}</p>
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
        <Input label="Offence"/>
        <Input label="Areas"/>
        <Input label="Ages"/>
        <Input label="Genders"/>
        <Input label="Years"/>
        <Input label="Months" />
        <button type="submit">Search!</button>
        <DisplayData data={data}/>
        </form>

      </div>
    );
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
            <p>{JSON.stringify(props.data)}</p>
        </div>
    )
}