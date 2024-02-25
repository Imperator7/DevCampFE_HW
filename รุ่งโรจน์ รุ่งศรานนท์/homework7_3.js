"use strict"

function readLocalJSON() {
    const filePath = "homework1-4.json"

    axios.get(filePath)
        .then(response => {
            /// Get Data
            const jsonData = response.data

            /// Filter with conditions
            const filterd = jsonData.filter((obj) => obj["gender"] === "male" && obj["friends"].length >= 2)

            /// Filter others than ["name", "gender", "company", "email", "friends", "balance"]
            const cleanFilterd = filterd.map((obj) => obj = {
                                                            "name": obj["name"], 
                                                            "gender": obj["gender"],
                                                            "company": obj["company"],
                                                            "email": obj["email"],
                                                            "friends": obj["friends"].reduce((start, obj) => start+"<li>" + obj["name"] + "</li>","<ol>") + "</ol>", // Convert array of obj(friend) to be string
                                                            "balance": "$" + parseFloat(obj["balance"].substring(1).replace(",", "")/10).toFixed(2)
                                                            })
            
            // Convert objects to Html for row of the table                                        
            const arrOfRow = cleanFilterd.map((obj) => Object.entries(obj).reduce((start, key) => start + "<td>" + key[1] + "</td>", "<tr>")).map((arr)=> arr+"</tr>")

            // push every row into the table
            arrOfRow.map((arr) => document.getElementById("body-table").innerHTML += arr)
            
        })
        .catch(error => {
            console.error("Error fetching file:", error)
        })
}

readLocalJSON()

