import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import convertUnits from 'convert-units'
import Alert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

const getCityCode = (city, countryCode) => `${city}-${countryCode}`

//renderCityAndCountry se va a convertir en una funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
  const {city, countryCode, country} = cityAndCountry
  //const {temperature, state} = weather
  return (
    <ListItem 
      key={getCityCode(city, countryCode)} 
      onClick={() => eventOnClickCity(city, countryCode) }
      button
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={9} xs={12}>
          <CityInfo city={city} country={country}/>
        </Grid>
        <Grid item md={3} xs={12}>
          <Weather temperature={weather && weather.temperature} state={weather && weather.state}/>
        </Grid>
      </Grid>
    </ListItem>
  )
}

const CityList = ({cities, onClickCity}) => {
  const [allWeather, setAllWeather] = useState({})

  const [error, setError] = useState(null)

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const apikey = "989b01fae952aa5ac734a6bbf1cfbf6b"
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apikey}` 
      
      try {
        const response = await axios.get(url)
        const {data} = response
        const temperature = parseInt(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
        const state = data.weather[0].main.toLowerCase()
        const propName = getCityCode(city, countryCode) // Ej: [Guadalajara-MX]
        const propValue = { temperature, state} //Ej: {temperature: 10, state:"sunny"}
        
        setAllWeather(allWeather => ({...allWeather, [propName]: propValue}))
      } catch (error) {
        if(error.response){ //El server no responde
          //const {data, status} = error.response
          setError("Error con el servidor")
        } else if (error.request) { //No llegar al server
          setError("Verifique la conexión a Internet")
        } else { //Razones imprevistas
          setError("Error imprevisto")
        }
      }
    }

    cities.forEach( ({city, countryCode})  => {
      setWeather(city, countryCode)
    })

  }, [cities])

  return (
    <div>
      {
        error && <Alert severity='error' onClose={() => setError(null)}>{error}</Alert>
      }
      <List>
        {
          cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
        }
      </List>
    </div>
  )
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
}

export default CityList
