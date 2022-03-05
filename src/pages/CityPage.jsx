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
import 'moment/locale/es-mx'

const CityPage = () => {

  const { city, chartData, forecastItemList} = useCityPage()
  //const city = "Guadalajara"
  //const countryCode = "MX"

  const country = "México"
  const state = "clear"
  const temperature = 19
  const humidity =  43
  const wind = 12

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
              <WeatherDetails humidity={humidity} wind={wind}/>
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
