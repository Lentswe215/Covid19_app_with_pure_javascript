let newConfirmed = document.getElementById("new-confirmed");
let totalConfirmed = document.getElementById("total-confirmed");
let newDeaths = document.getElementById("new-deaths");
let totalDeaths = document.getElementById("total-deaths");
let recoveries = document.getElementById("recoveries");

// console.log(location.href.split('/'))

fetch("https://api.covid19api.com/summary")
  .then((res) => res.json())
  .then((data) => {
    data = data.Global;
    newConfirmed.innerHTML = data.NewConfirmed;
    totalConfirmed.innerHTML = data.TotalConfirmed;
    newDeaths.innerHTML = data.NewDeaths;
    totalDeaths.innerHTML = data.TotalDeaths;
    recoveries.innerHTML = data.TotalRecovered;
  });

  
  $('.searchbtn').on('click', (e)=> {
    e.preventDefault()

    let search_bar = document.getElementById('searchbar').value
    search_bar = search_bar.replace(/\ /g, "_")
    // console.log(search_bar)

   window.location.href = `./searchpage.html?country=${search_bar}`
    
  })