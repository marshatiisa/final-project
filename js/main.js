document.querySelector('#testButton').addEventListener('click', getWeather)

function getWeather() {
    const city = document.querySelector('#city').value
    console.log(city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=685566c4107e1b2040632ad8b5c8385b&units=imperial`)
    .then(res => res.json())
    .then(data => {
    console.log(data)
      document.querySelector('h2').innerText = data.main.temp

})
.catch(err => { 
    console.log(`error ${err}`)
})
}

// /admin/oauth/access_scopes.json - for shopify
// access token (for figma) - next line
//figd_OZLzGDnkzAKgVMzH-eSfyM-Rhdpa3x8xaiR5wF7V