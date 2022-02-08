import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import { useParams } from 'react-router-dom'
import CityInfo from './../components/CityInfo'
import convertUnits from 'convert-units'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import AppFrame from './../components/AppFrame'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/es-mx'

/*const dataExample = [
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

const forecastItemListExample = [
  {hour: 18, state:"clear", temperature: 17, weekDay:"Jueves"},
  {hour: 6, state:"clouds", temperature: 12, weekDay:"Viernes"},
  {hour: 15, state:"rain", temperature: 15, weekDay:"Sabado"},
  {hour: 11, state:"fog", temperature: 21, weekDay:"Domingo"},
  {hour: 11, state:"thunderstorm", temperature: 23, weekDay:"Lunes"},
]*/


const CityPage = () => {

  const [data, setData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);

  const { city, countryCode } = useParams()
  //console.log("Ciudad ", city)
  //console.log("Pais ", countryCode)

  useEffect(() => {

    const getForecast = async() => {
      const apikey = "989b01fae952aa5ac734a6bbf1cfbf6b"
      const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apikey}`

      try {
        const { data } = await axios.get(url)
        //console.log(data)

        const toCelcius = (temp) => parseInt(convertUnits(temp).from("K").to("C"))

        const daysAhead = [0, 1, 2, 3, 4, 5]

        const days = daysAhead.map(d => moment().add(d, 'd'))

        const dataAux = days.map(day => {
          const tempObjArray = data.list.filter(item => {
            const dayOfYear = moment.unix(item.dt).dayOfYear()
            return dayOfYear === day.dayOfYear()
          })

          const temps = tempObjArray.map(item => item.main.temp)

          //console.log("day.dayOfYear()", day.dayOfYear())
          //console.log("tempObjArray ",tempObjArray)
          
          return( {
            dayHour: day.format('ddd'),
            min: toCelcius(Math.min(...temps)),
            max: toCelcius(Math.max(...temps)),
          })
        })

        setData(dataAux)


        const interval = [4, 8, 12, 16, 20, 24]

        const forecastItemListAux = data.list.filter((item, index) => interval.includes(index)).map(item => {
          return ({
            hour: moment.unix(item.dt).hour(),
            weekDay: moment.unix(item.dt).format("dddd"),
            state: item.weather[0].main.toLowerCase(),
            temperature: toCelcius(item.main.temp)
          })
        })

        setForecastItemList(forecastItemListAux)

      } catch (error) {
        console.log("Error", error)
      }
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
