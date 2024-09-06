const apikey = "05162bf3d5fe34dc0412e38f71709069";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox =document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const recenticon =document.querySelector(".icon");
async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    if(data.weather[0].main == "Clouds")
        recenticon.src = "images/clouds.png"
    else if(data.weather[0].main == "Clear")
        recenticon.src = "images/clear.png"
    else if(data.weather[0].main == "Rain")
        recenticon.src = "images/rain.png"
    else if(data.weather[0].main == "Drizzle")
        recenticon.src = "images/drizzle.png"
    else if(data.weather[0].main == "Mist")
        recenticon.src = "images/mist.png"
    else if(data.weather[0].main == "Snow")
       recenticon.src = "images/snow.png"

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}
searchbtn.addEventListener("click",()=>{
     checkweather(searchbox.value);
})
