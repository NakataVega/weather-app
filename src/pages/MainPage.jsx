import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'

const cities = [
  {city:"Guadalajara", country:"Mexico", conutryCode:"MX"},
  {city:"New York City", country:"United States", conutryCode:"US"},
  {city:"Amsterdam", country:"Nederlands", conutryCode:"NL"},
  {city:"Madrid", country:"Spain", conutryCode:"ES"}
]

const MainPage = props => {
  const history = useHistory()
  const onClickHandler = () => {
    //history.push permite alterar la URL por programacion
    history.push("/City")
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
