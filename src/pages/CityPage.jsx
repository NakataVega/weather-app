import React from 'react'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import CityInfo from './../components/CityInfo'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import AppFrame from './../components/AppFrame'
//import Paper from '@material-ui/core/Paper'
import useCityPage from './../hooks/useCityPage'
import useCityList from './../hooks/useCityList'
import { getCityCode } from './../utils/utils'
import { getCountryNameByCountryCode } from './../utils/serviceCities'

import 'moment/locale/es-mx'

const CityPage = () => {

  const { city, countryCode, chartData, forecastItemList} = useCityPage()
  
  const { allWeather } = useCityList([{city, countryCode }])

  const weather = allWeather[getCityCode(city, countryCode)]

  const country = getCountryNameByCountryCode(countryCode)
  const state = weather && weather.state
  const temperature = weather && weather.temperature
  const humidity =  weather && weather.humidity
  const wind = weather && weather.wind

  // const data = dataExample
  

  return (
    <AppFrame>
      
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
              {
                humidity && wind &&
                <WeatherDetails humidity={humidity} wind={wind}/>
              }
            </Grid>
          </Grid>
          <Grid item>
            {
              !chartData && !forecastItemList && <LinearProgress />
            }
          </Grid>
          <Grid item xs={12}>
            {
              chartData && <ForecastChart data={chartData}/>
            }
          </Grid>
          <Grid item xs={12}>
            {
              forecastItemList && <Forecast forecastItemList={forecastItemList}/>
            }
          </Grid>
        </Grid>
    
    </AppFrame>
  )
}

export default CityPage
