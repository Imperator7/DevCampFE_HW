"use strict"

axios.get("covid19.json")
    .then(function (response) {
        const allCovidData = response.data

        // print world's total todayRecovered
        console.log(allCovidData.reduce((sum, obj) => sum + obj["todayRecovered"], 0))

        // all country that has population more than 100 millions and has less than 10 people dies today.
        console.log(allCovidData.filter((country) => country["population"] > 100000000 && country["todayDeaths"] < 10)
                                .map((country) => country["country"]))

        })
    .catch(function (error) {
        // Handle error
        console.error(error);
      });
