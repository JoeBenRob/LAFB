function addAccount() {

    // set input boxes on html as inputs
    let accountDetails = {
        "firstName": document.getElementById("FirstNameBox").value;
        "lastName": document.getElementById("LastNameBox").value;
    }

    let req = new XMLHttpRequest();

    req.onload = function () {
        let response = JSON.parse(req.response);
        console.log(response);

    }
    // need to set IP
    req.open("POST", IP + "/Server");
    req.send(JSON.stringify(accountDetails));
}
