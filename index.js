let im = document.querySelector('#min');
let temp = document.querySelector('#temperature');
let namea = document.querySelector('#name');
let humidity = document.querySelector('#humidity');
let wind_speed = document.querySelector('#wind_speed');
let feels_like = document.querySelector('#feels_like');
let wind_degrees = document.querySelector('#wind_degrees');
let min_temp = document.querySelector('#min_temp');
let max_temp = document.querySelector('#max_temp');
let sunrise = document.querySelector('#sunrise');
let sunset = document.querySelector('#sunset');
function fetchWeather(city) {
  //   let sarc = document.querySelector('#i');
  //   sarc.addEventListener('click', (e) => {
  // let inp = document.querySelector('input').value;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3ca45cd138msh0f1626b0b69d2a9p17e52bjsn260c4f7ae56a',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    },
  };
  fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data);
      let t = parseInt(data.temp);
      console.log(t);
      if (t <= 0) {
        im.src = 'snow.png';
      } else if (0 < t && t <= 15) {
        im.src = 'clouds.png';
      } else if (16 < t && t <= 24) {
        im.src = 'clear.png';
      } else if (25 <= t && t < 40) {
        im.src = 'mist.png';
      } else if (40 <= t && t < 50) {
        im.src = 'mist.png';
      } else {
        im.src = 'rain.png';
      }
      temp.innerHTML = data.temp;
      namea.innerHTML = city;
      humidity.innerHTML = data.humidity;
      wind_speed.innerHTML = data.wind_speed;
      feels_like.innerHTML = data.feels_like;
      wind_degrees.innerHTML = data.wind_degrees;
      min_temp.innerHTML = data.min_temp;
      max_temp.innerHTML = data.max_temp;
      let sr = parseInt(data.sunrise) * 1000;
      let sr1 = new Date(sr);
      sr1.setHours(sr1.getHours() - 2);

      sunrise.innerHTML = sr1.toLocaleTimeString();
      let ss = parseInt(data.sunset) * 1000;
      let ss1 = new Date(ss);
      ss1.setHours(ss1.getHours() - 2);
      sunset.innerHTML = ss1.toLocaleTimeString();
    })
    .catch((e) => {
      console.log(e);
    });
}

document.querySelector('#i').addEventListener('click', () => {
  let v = document.querySelector('input').value;
  fetchWeather(v);
});
