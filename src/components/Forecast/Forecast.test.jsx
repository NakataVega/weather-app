import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
  {hour: 18, state:"clear", temperature: 17, weekDay:"Jueves"},
  {hour: 6, state:"thunderstorm", temperature: 12, weekDay:"Viernes"},
  {hour: 15, state:"rain", temperature: 15, weekDay:"Sabado"},
  {hour: 11, state:"fog", temperature: 21, weekDay:"Domingo"},
  {hour: 11, state:"clouds", temperature: 23, weekDay:"Lunes"},
]


test('Forecast render', async () => {
  
  //findAllByTestId nos va a permitir encontrar cada item con esa marca
  const { findAllByTestId } = render(
    <Forecast
      forecastItemList={forecastItemList}
    />
  )


  const forecastItems = await findAllByTestId("forecast-item-container")

  expect(forecastItems).toHaveLength(5) 

})
