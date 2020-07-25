fetch('https://api.covid19api.com/summary')
.then(res => res.json())
.then(data => {

    
    //  if(info.Country == 'South Africa'){
    // console.log(info.TotalConfirmed)
    //  }
    console.log(data)

})