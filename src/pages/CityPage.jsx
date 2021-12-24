import React from 'react'
//import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'

const CityPage = () => {

  const city = "Guadalajara"
  const country = "México"
  const state = "cloudy"
  const temperature = 19
  const humidity = 43
  const wind = 12

  const data = [
    {
        "dayHour": "Jue 18",
        "min": 14,
        "max": 22,
    },
    {
        "dayHour": "Vie 06",
        "min": 18,
        "max": 27,
    },
    {
        "dayHour": "Vie 12",
        "min": 18,
        "max": 28,
    },
    {
        "dayHour": "Vie 18",
        "min": 18,
        "max": 25,
    },
    {
        "dayHour": "Sab 06",
        "min": 15,
        "max": 22,
    },
    {
        "dayHour": "Sab 12",
        "min": 12,
        "max": 19,
    }
  ]

  const forecastItemList = [
    {hour: 18, state:"sunny", temperature: 17, weekDay:"Jueves"},
    {hour: 6, state:"cloud", temperature: 12, weekDay:"Viernes"},
    {hour: 15, state:"rain", temperature: 15, weekDay:"Sabado"},
    {hour: 11, state:"fog", temperature: 21, weekDay:"Domingo"},
    {hour: 11, state:"cloudy", temperature: 23, weekDay:"Lunes"},
  ]

  return (
    <Grid
      container
      justifyContent='center'
      direction='column'
    >
      <Grid item xs={12}>
        <CityInfo city={city} country={country}/>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={8}>
          <Weather state={state} temperature={temperature}/>
        </Grid>
        <Grid item xs={4}>
          <WeatherDetails humidity={humidity} wind={wind}/>
        </Grid>
        <Grid item xs={12}>
          <ForecastChart data={data}/>
        </Grid>
        <Grid item xs={12}>
          <Forecast forecastItemList={forecastItemList}/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default CityPage
