function addAccount() {

    // set input boxes on html to generate correct format json for account
    let accountDetails = {
        "accountnumber": "",
        "firstName": document.getElementById("FirstNameBox").value,
        "lastName": document.getElementById("LastNameBox").value,
        "prize": ""
    }

    let req = new XMLHttpRequest();

    req.onload = function () {
        let response = JSON.parse(req.response);
        console.log(response);

    }
    // need to set IP
    req.open("POST", 40.68.162.72 + "/Server/addAccount");
    req.send(JSON.stringify(accountDetails));
}
