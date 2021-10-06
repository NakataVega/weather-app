import React from 'react'
import WeatherDetails from './WeatherDetails'

export default {
  title: "WeatherDetails",
  component: WeatherDetails
}

export const WeatherDetailsExample = () => {
  return <WeatherDetails humidity={43} wind={12}/>
}