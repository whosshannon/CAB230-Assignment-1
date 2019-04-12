
let JWT = null;

const regButton = document.getElementById("regBtn");
regButton.addEventListener("click", () => {
  fetch("http://hackhouse.sh:3000/register", {
    method: "POST",
    body: 'email=xxxxx%40xxxx.xxx&password=xxxxxxx',
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    }
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok");
    })
    .then(function(result) {
      let appDiv = document.getElementById("app");
      appDiv.innerHTML = JSON.stringify(result);
      regButton.disabled = true;
    })
    .catch(function(error) {
      console.log("There has been a problem with your fetch operation: ",error.message);
    });
});

const logButton = document.getElementById("logBtn");
logButton.addEventListener("click", () => {
    fetch("http://hackhouse.sh:3000/login", {
        method: "POST",
        body: 'email=xxxxx%40xxxx.xxx&password=xxxxxxx',
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
});

const offButton = document.getElementById("offBtn");
offButton.addEventListener("click", () => {
    fetch("http://hackhouse.sh:3000/offences")
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(function(result) {
            let appDiv = document.getElementById("app");
            appDiv.innerHTML = JSON.stringify(result);
        })
        .catch(function(error) {
            console.log("There has been a problem with your fetch operation: ",error.message);
        });
});

const searchButton = document.getElementById("serBtn");
searchButton.addEventListener("click", () => {

    //The parameters of the call
    let getParam = { method: "GET" };
    let head = { Authorization: `Bearer ${JWT}` };
    getParam.headers = head;

    //The URL
    const baseUrl = "http://hackhouse.sh:3000/search?";
    const query = 'offence=Homicide (Murder)';
    const url = baseUrl + query;

    fetch(encodeURI(url),getParam)
        .then(function(response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(function(result) {
            let appDiv = document.getElementById("app");
            appDiv.innerHTML = JSON.stringify(result);
        })
        .catch(function(error) {
                console.log("There has been a problem with your fetch operation: ",error.message);
            });
});

