import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let JWT = null;

const registerBtn = document.getElementById("regBtn");
registerBtn.addEventListener("click", () => {
    //TODO: add fetch, not here for simplicity
    //TODO: note, this is where we would use react router
})
const loginBtn = document.getElementById("logBtn");
loginBtn.addEventListener("click", () => {
   //TODO: note, this is where we would use react router
   fetch("https://cab230.hackhouse.sh/login", {
        method: "POST",
        body: 'email=N10205144%40qut.edu.au&password=bubblewrap',
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    })
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(function(result) {
            let appDiv = document.getElementById("app");
            appDiv.innerHTML = JSON.stringify(result);
            JWT = result.token;
        })
        .catch(function(error) {
            console.log("There has been a problem with your fetch operation: ",error.message);
        });
})

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

const offencesBtn = document.getElementById("offBtn");
offencesBtn.addEventListener("click", () => {
    //TODO: we would also use react router here
    //TODO: render to that DOM boi

    fetch("https://cab230.hackhouse.sh/offences")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error("Network response was not ok.");
    })
    .then((result) => {
        return (result.offences)
    })
    .then((offences) => {
        let appDiv = document.getElementById("app");
        //appDiv.innerHTML = JSON.stringify(offences);
        ReactDOM.render(<OffencesApp offences={offences}/>, appDiv);
    })
    .catch((error) => {
        console.log("there has been a problem with your fetch operation", error.message);
    })
})

const searchBtn = document.getElementById("serBtn");
searchBtn.addEventListener("click", () => {
    //
})

function SearchBar (props) { //TODO: make into search/filter dropdown https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
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

function Input() {
    const [name, setName] = useState("");
    const [error, setError] = useState(null)

    return(
        <div>
            <label htmlFor="name">Your name:</label>
            <input type="text"
            name="name"
            id="name"
            value={name}
            onChange={(event) => {
                const {value} = event.target;
                if (/[0-9]/.test(value)) {
                    setError("Names shouldn't have numbers :/");
                } else {
                    setError(null);
                }
                setName(value);
            }}/>
            {
                error != null ? <p>Error: {error}</p> : null
            }
        </div>
    )
}

function FilterApp() {
    const [search, setSearch] = useState("");

    return (
        <div>
            <SearchBar onSubmit={setSearch} key="offencesSearch" labelText="offences"/>
            <SearchBar onSubmit={setSearch} key="areaSearch" labelText="areas"/>
            <SearchBar onSubmit={setSearch} key="ageSearch" labelText="ages"/>
            <button>Clear search criteria</button>
            <p>{search}</p>
        </div>
    )
}

ReactDOM.render(<FilterApp />, document.getElementById('filter'));