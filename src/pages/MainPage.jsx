import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'

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
    <div>
      <h2>Lista de ciudades</h2>
      <CityList 
        cities={cities}
        onClickCity={onClickHandler}
      />
    </div>
  )
}

export default MainPage
