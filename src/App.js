// import { Component } from 'react/cjs/react.production.min';
import './App.css';
import React from 'react';
import Main from './components/Main';

const API_KEY = "d683360339220a6f99f853df5f452fc0";

class App extends React.Component {
  state = {
    city: undefined,
    temp: undefined,
    location: undefined,
    windSpeed: undefined,
    pressure:undefined,
    humirity: undefined,
    chanceOfRain: undefined,
    error: undefined
    
  }
getWeather = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value
const api_urlCels = await 
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`)
const api_urlFarh = await 
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)
const dataCels = await api_urlCels.json()
const dataFarh = await api_urlFarh.json()
this.setState({
  city: dataCels.name,
    temp: dataCels.main.temp,
    location: "undefined",
    windSpeed: dataCels.wind.speed,
    pressure: dataCels.main.pressure,
    humirity: dataCels.main.humirity,
    chanceOfRain: "undefined",
    error: "undefined"
})



console.log(dataCels)
}

  render() {
    return (
<Main getWeather={this.getWeather}
city={this.state.city} 
temp={this.state.temp}
location={this.state.location}
windSpeed={this.state.windSpeed}
pressure={this.state.pressure}
humirity={this.state.humirity}
chanceOfRain={this.state.chanceOfRain}
error={this.state.error}
/>
    );
  }
}






export default App;
