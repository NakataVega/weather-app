import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import { useParams } from 'react-router-dom'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import AppFrame from './../components/AppFrame'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'

const dataExample = [
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

const CityPage = () => {

  const [data, setData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);

  const { city, countryCode } = useParams()
  console.log("Ciudad ", city)
  console.log("Pais ", countryCode)

  useEffect(() => {

    const getForecast = async() => {
      const apikey = "989b01fae952aa5ac734a6bbf1cfbf6b"
      const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apikey}`

      try {
        const { data } = await axios.get(url)
        console.log(data)
      } catch (error) {
        console.log("Error", error)
      }

      setData(dataExample)
      setForecastItemList(forecastItemList)
    }
    
    getForecast()
  }, [city, countryCode]);

  //const city = "Guadalajara"
  //const countryCode = "MX"

  const country = "México"
  const state = "clear"
  const temperature = 19
  const humidity =  43
  const wind = 12

  // const data = dataExample
  /*const forecastItemList = [
    {hour: 18, state:"clear", temperature: 17, weekDay:"Jueves"},
    {hour: 6, state:"clouds", temperature: 12, weekDay:"Viernes"},
    {hour: 15, state:"rain", temperature: 15, weekDay:"Sabado"},
    {hour: 11, state:"fog", temperature: 21, weekDay:"Domingo"},
    {hour: 11, state:"thunderstorm", temperature: 23, weekDay:"Lunes"},
  ]*/

  return (
    <AppFrame>
      <Paper elevation={5}>
        <Grid
          container
          justifyContent='center'
          direction='column'
        >
          <Grid item container
            xs={12}
            justifyContent='center'
            alignItems='flex-end'
          >
            <CityInfo city={city} country={country}/>
          </Grid>
          <Grid container item xs={12} alignItems='center'>
            <Grid item xs={8}>
              <Weather state={state} temperature={temperature}/>
            </Grid>
            <Grid item xs={4}>
              <WeatherDetails humidity={humidity} wind={wind}/>
            </Grid>
            <Grid item xs={12}>
              {
                data && <ForecastChart data={data}/>
              }
            </Grid>
            <Grid item xs={12}>
              {
                forecastItemList && <Forecast forecastItemList={forecastItemList}/>
              }
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </AppFrame>
  )
}

export default CityPage
