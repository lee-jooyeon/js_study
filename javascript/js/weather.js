const API_KEY = 'ecb383f32f8286c5a42d10b31d34cfbc';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(Response => Response.json().then(data => {
    //fetch 함수로 원격 API 호출하기
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }));
    //js calling url
}
function onGeoError(){
    alert("Can't find you, No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
                                        //allow     block
//위치 확인 함수