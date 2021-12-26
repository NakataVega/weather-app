import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList' //SUT: System under test

const cities = [
  {city:"Guadalajara", country:"Mexico"},
  {city:"New York City", country:"United States"},
  {city:"Amsterdam", country:"Nederlands"},
  {city:"Madrid", country:"Spain"}
]

test("CityList render", async () => {
  const fnClickOnItem = jest.fn()
  //AAA Arrange Act Assert
  const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem}/>)

  const items = await findAllByRole("button") //Es el rol asignado a <li>

  expect(items).toHaveLength(4)
})

test("CityList click on item", async () => {
  //Simular una accion de usuario haciendo uso de una funcion mock

  const fnClickOnItem = jest.fn()

  const {findAllByRole} = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

  const items = await findAllByRole("button")


  //fireEvent para simular la accion (es parte de testing library)
  
  fireEvent.click(items[0])
  //Lo que debio suceder es que se debio llamar a la funcion fnClickOnItem UNA vez

  expect(fnClickOnItem).toHaveBeenCalledTimes(1)
});