import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import CityList from './../components/CityList'
import AppFrame from './../components/AppFrame'

const cities = [
  {city:"Guadalajara", country:"Mexico"},
  {city:"New York City", country:"United States"},
  {city:"Amsterdam", country:"Nederlands"},
  {city:"Madrid", country:"Spain"}
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
