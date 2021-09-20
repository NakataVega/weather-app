import React from 'react'
import { render } from '@testing-library/react'
import CityList from './CityList' //SUT: System under test

const cities = [
  {city:"Guadalajara", country:"Mexico"},
  {city:"New York City", country:"United States"},
  {city:"Amsterdam", country:"Nederlands"},
  {city:"Madrid", country:"Spain"}
]

test("CityList render", async () => {
  //AAA Arrange Act Assert
  const { findAllByRole } = render(<CityList cities={cities} />)

  const items = await findAllByRole("listitem") //Es el rol asignado a <li>

  expect(items).toHaveLength(4)
})