import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'

const cities = [
  {city:"Guadalajara", country:"Mexico", countryCode:"MX"},
  {city:"New York City", country:"United States", countryCode:"US"},
  {city:"Amsterdam", country:"Nederlands", countryCode:"NL"},
  {city:"Madrid", country:"Spain", countryCode:"ES"},
  {city:"Prague", country:"The Czech Republic", countryCode:"CZ"}
]

const MainPage = props => {
  const history = useHistory()
  const onClickHandler = (city, countryCode) => {
    //history.push permite alterar la URL por programacion
    //console.log(city, countryCode)
    history.push(`/City/${countryCode}/${city}`)
  }

  return (
    <AppFrame>
      <Paper elevation={3}>
        <CityList 
          cities={cities}
          onClickCity={onClickHandler}
        />
      </Paper>
    </AppFrame>
  )
}

export default MainPage
