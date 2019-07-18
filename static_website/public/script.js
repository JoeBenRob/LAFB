function addAccount() {

    // set input boxes on html to generate correct format json for account
    let accountDetails = {
        "accountnumber": "",
        "firstName": document.getElementById("firstNameBox").value,
        "lastName": document.getElementById("lastNameBox").value,
        "prize": ""
    }

    let req = new XMLHttpRequest();

    req.onload = function () {
        let response = JSON.parse(req.response);
        console.log(response);

    }
    // need to set IP
    req.open("POST", "/server/addAccount");
    req.send(JSON.stringify(accountDetails));
}
