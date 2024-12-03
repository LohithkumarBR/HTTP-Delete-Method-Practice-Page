let sendDeleteRequestBtnEl = document.getElementById("sendDeleteRequestBtn");
let loadingEl = document.getElementById("loading");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let userInputEl = document.getElementById("userInput");

function sendDeleteHTTPRequest() {
    let userId = userInputEl.value;
    let url = "https://gorest.co.in/public-api/users/" + userId;
    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0"
        },
    };

    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            loadingEl.classList.add("d-none");
            requestStatusEl.classList.remove("d-none");

            let requestStatus = data.code;
            let httpResponse = JSON.stringify(data);
            requestStatusEl.textContent = requestStatus;
            httpResponseEl.textContent = httpResponse;
        });
}

sendDeleteRequestBtnEl.addEventListener("click", sendDeleteHTTPRequest);