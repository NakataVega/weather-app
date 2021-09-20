import React from 'react'
import CityList from './CityList'

export default {
  title: "CityList",
  component: CityList
}

const cities = [
  {city:"Guadalajara", country:"Mexico"},
  {city:"New York City", country:"United States"},
  {city:"Amsterdam", country:"Nederlands"},
  {city:"Madrid", country:"Spain"}
]

export const CityListExample = () => <CityList cities={cities} />