import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
  title: "CityList",
  component: CityList
}

const cities = [
  {city:"Guadalajara", country:"Mexico", countryCode:"MX"},
  {city:"New York City", country:"United States", countryCode:"US"},
  {city:"Amsterdam", country:"Nederlands", countryCode:"NL"},
  {city:"Madrid", country:"Spain", countryCode:"ES"},
  {city:"Praga", country:"The Czech Republic", countryCode:"CZ"}
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")} />