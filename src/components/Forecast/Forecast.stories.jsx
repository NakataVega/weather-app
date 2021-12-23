import React from 'react'
import Forecast from './Forecast'

export default {
  title: "Forecast",
  component: Forecast
}

//"cloud","cloudy","fog","sunny","rain",
const forecastItemList = [
  {hour: 18, state:"sunny", temperature: 17, weekDay:"Jueves"},
  {hour: 6, state:"cloud", temperature: 12, weekDay:"Viernes"},
  {hour: 15, state:"rain", temperature: 15, weekDay:"Sabado"},
  {hour: 11, state:"fog", temperature: 21, weekDay:"Domingo"},
  {hour: 11, state:"cloudy", temperature: 23, weekDay:"Lunes"},
]

export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList}/>)