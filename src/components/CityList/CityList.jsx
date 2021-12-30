import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo'
import Weather from './../Weather'



//renderCityAndCountry se va a convertir en una funcion que retorna otra funcion
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
  const {city, country} = cityAndCountry
  //const {temperature, state} = weather
  return (
    <ListItem 
      key={city} onClick={eventOnClickCity}
      button
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={9} xs={12}>
          <CityInfo city={city} country={country}/>
        </Grid>
        <Grid item md={3} xs={12}>
          {
            weather ? (<Weather temperature={weather.temperature} state={weather.state}/>) : ("No hay datos")
          }
        </Grid>
      </Grid>
    </ListItem>
  )
}

const CityList = ({cities, onClickCity}) => {
  const [allWeather, setAllWeather] = useState({})

  useEffect(() => {
    const setWeather = (city, country) => { 
      const apikey = "989b01fae952aa5ac734a6bbf1cfbf6b"
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}` 
      axios.get(url).then(response => {
        const {data} = response
        const temperature = data.main.temp
        const state = "sunny"
        const propName = `${city}-${country}` // Ej: [Guadalajara-Mexico]
        const propValue = { temperature, state} //Ej: {temperature: 10, state:"sunny"}
        


        setAllWeather(allWeather => {
          const result = {...allWeather, [propName]: propValue }
          console.log("allWeather [result]", result)
          return result
        })

      })
      
    }

    cities.forEach( ({city, country})  => {
      setWeather(city)
    })

  }, [cities])

  //const weather = { temperature: 12, state:"sunny"}
  return (
    <List>
      {
        cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]))
      }
    </List>
  )
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
}

export default CityList
