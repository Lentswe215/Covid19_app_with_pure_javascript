let searchTitle = document.getElementById("search-title");
let newConfirmed = document.getElementById("new-confirmed");
let totalConfirmed = document.getElementById("total-confirmed");
let newDeaths = document.getElementById("new-deaths");
let totalDeaths = document.getElementById("total-deaths");
let recoveries = document.getElementById("recoveries");

$(document).ready(() => {
  let url = location.href.split("country=")[1];
  let country = url.replace(/_/g, "-");
  let slugString = " ";
  country = country.toLowerCase();
  fetch("https://api.covid19api.com/summary")
    .then((res) => res.json())
    .then((data) => {
      data = data.Countries;
      data.forEach((element) => {
        if (country == element.Slug) {
          newConfirmed.innerHTML = element.NewConfirmed;
          totalConfirmed.innerHTML = element.TotalConfirmed;
          newDeaths.innerHTML = element.NewDeaths;
          totalDeaths.innerHTML = element.TotalDeaths;
          recoveries.innerHTML = element.TotalRecovered;
          slugString = element.Slug;
          if (slugString == country) {
            country = country.replace(/\-/g, ' ').toLocaleUpperCase();
            searchTitle.innerHTML = country;
            return
          }    
        }
      });
    });
searchTitle.innerHTML = "No Match!!";

});

$(".searchbtn").on("click", (e) => {
  e.preventDefault();

  let search_bar = document.getElementById("searchbar").value;
  search_bar = search_bar.replace(/\ /g, "_");

  window.location.href = `./searchpage.html?country=${search_bar}`;
});
