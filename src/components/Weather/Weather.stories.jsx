import React from 'react'
import Weather from './Weather'

export default {
  title: "Weather",
  component: Weather
}

//export const WeatherExample = () => <Weather temperature={22} state="sunny"/>
//Storybook nos permite crear diferentes ejemplos de historias para poder visualizarlas
export const WeatherSunny = () => <Weather temperature={27} state="sunny"/>
export const WeatherCloud = () => <Weather temperature={21} state="cloud"/>
export const WeatherRain = () => <Weather temperature={17} state="rain"/>
