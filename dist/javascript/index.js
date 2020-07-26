let newConfirmed = document.getElementById("new-confirmed");
let totalConfirmed = document.getElementById("total-confirmed");
let newDeaths = document.getElementById("new-deaths");
let totalDeaths = document.getElementById("total-deaths");
let recoveries = document.getElementById("recoveries");

fetch("https://api.covid19api.com/summary")
  .then((res) => res.json())
  .then((data) => {
    data = data.Global;
    newConfirmed.innerHTML = data.NewConfirmed;
    totalConfirmed.innerHTML = data.TotalConfirmed;
    newDeaths.innerHTML = data.NewDeaths;
    totalDeaths.innerHTML = data.TotalDeaths;
    recoveries.innerHTML = data.TotalRecovered;

    //  if(info.Country == 'South Africa'){
    // console.log(info.TotalConfirmed)
    //  }
    console.log(data);
  });
