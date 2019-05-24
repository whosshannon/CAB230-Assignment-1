import React , {useState} from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import {AppRouter} from '.';

export function SearchBar (props) { //TODO: make into search/filter dropdown https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
    const [innerSearch, setInnerSearch] = useState("");

    return(
        <div>
            <label htmlFor="search">Search {props.labelText}: </label>
            <input
                aria-labelledby="search-button"
                name="search"
                id="search"
                type="search"
                value={innerSearch}
                onChange={(event) => {
                    const {value} = event.target;
                    //TODO: data handling/checking
                    setInnerSearch(value);
                }}
            />
            <button
                id="search-button"
                type="search"
                onClick={() => {
                    props.onSubmit(innerSearch);
                }}
            >Search</button>
        </div>
    )
}

export function Input(props) {
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

// function FilterApp() {
//     const [search, setSearch] = useState("");

//     return (
//         <div>
//             <SearchBar onSubmit={setSearch} key="offencesSearch" labelText="offences"/>
//             <SearchBar onSubmit={setSearch} key="areaSearch" labelText="areas"/>
//             <SearchBar onSubmit={setSearch} key="ageSearch" labelText="ages"/>
//             <button>Clear search criteria</button>
//             <p>{search}</p>
//         </div>
//     )
// }

//ReactDOM.render(<AppRouter />, document.getElementById('navbar'));
//ReactDOM.render(<FilterApp />, document.getElementById('filter'));