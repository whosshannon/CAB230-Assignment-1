import React, {useState} from "react";
import { JWT } from "./Login";
//import Select from "react-select";
import { Input } from "./old/components";
 
export function Search() {
    let offenceTarget, areasTarget, agesTarget, gendersTarget, yearsTarget=null;

    const handleSearchData = events => {
        
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
        }}>
        <Input label="Offence"/>
        <Input label="Areas"/>
        <Input label="Ages"/>
        <Input label="Genders"/>
        <Input label="Years"/>
        <button type="submit">Search!</button>
        </form>
      </div>
    );
}

// const Input = props => {
//     const [name, setName] = useState("");

//     return(
//         <div>
//             <label htmlFor="name">{props.label}</label>
//             <input
//             type="text"
//             name="name"
//             id="name"
//             value={name}
//             onChange={(event) => {
//                 const {value} = event.target;
//                 //if (!/[\s]/.test(value)) { //DEBUG: does not let user enter any whitespace at all
//                     setName(value);
//                 //}
//             }}
//             onBlur={() => {
//                 props.onSubmit(name);
//             }}
//             />            
//         </div>
//     )
// }
 

// const notsomuch = (name) => {
//     let data=null;

//     const handleOffencesData = event => {
//         return fetch("https://cab230.hackhouse.sh/offences")
//         .then((res)=>res.json()) //TODO: check response is okay??? like this works fine i think but i probably should check it just for proffessionalism i guess
//         .then((res)=>{
//             data = res.offences;
//         })
//         .catch((error) => {
//             console.log("there has been a problem with your fetch operation", error.message);
//             return (<p>There was an error :/</p>)
//         });
//     }
    
//     const options = [
//         // handleOffencesData().map((item) => (
//         //     {value: item, label: item}
//         // ))
//         {value: 'Stanford University', label: 'Stanford'},
//     ]
//     console.log(handleOffencesData());

//     return (
//         <Select
//         name={name}
//         value="one"
//         options={options}
//         onChange={val => console.log(val)}
//     />
//     )
// }