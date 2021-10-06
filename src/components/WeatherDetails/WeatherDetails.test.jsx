import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetails from './WeatherDetails' //SUT: System under test

//finByText: permite encontrar un componente por el texto que muestra
test("WeatherDetails render",  async () => {

  const { findByText } = render(<WeatherDetails humidity={43} wind={12}/>)

  const wind = await findByText(/12/)
  const humidity = await findByText(/43/)

  expect(humidity).toHaveTextContent("Humedad: 43 %")
  expect(wind).toHaveTextContent("Viento: 12 km/h")
})