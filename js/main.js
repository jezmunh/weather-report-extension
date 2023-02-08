let apiKey = "YOUR_TOKEN_HERE"
let city = ""
let lang = 'en'

if(localStorage.getItem("city") == '') {
    let input_city = prompt('Enter the city:')
    city = input_city
    localStorage.setItem("city", city)
} 
city = localStorage.getItem("city");
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&units=metric&appid=${apiKey}`;
axios.get(url).then(res => {
    console.log(res.data)        
    document.querySelector('.city').innerHTML = res.data.name        
    document.querySelector('.temp').innerHTML = res.data.main.temp        
    document.querySelector('.humidity').innerHTML = res.data.main.humidity        
    document.querySelector('.wind').innerHTML = res.data.wind.speed
    document.querySelector('.description').innerHTML = res.data.weather[0].description
    
        
     })

let change_link = document.getElementById("select_city")

change_link.onclick = function () {
    let input_city = prompt('Enter city:')
    city = input_city
    localStorage.setItem("city", city)
    city = localStorage.getItem("city")
    
    axios.get(url).then(res => {
    console.log(res.data)       
    document.querySelector('.city').innerHTML = res.data.name        
    document.querySelector('.temp').innerHTML = res.data.main.temp       
    document.querySelector('.humidity').innerHTML = res.data.main.humidity        
    document.querySelector('.wind').innerHTML = res.data.wind.speed
    document.querySelector('.description').innerHTML = res.data.weather[0].description    
    location.href = location
        
     })
}






