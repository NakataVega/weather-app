import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' //SUT: System under test

test("CityInfo render", async () => {
  //AAA
  //Arrange
  //Act
  const city = "Guadalajara"
  const country = "Mexico"

  /*
  Render: renderiza el componente y retorna una serie de funciones de utilidad
  Vamos a utilizar findAllByRole para 'consultar' a nuestro componente
  Vamos a analizar su estado en el Assert
  */
  const { findAllByRole } = render(<CityInfo city={city} country={country}></CityInfo>)
  //Assert

  //Buscar todos los componentes que sean heading -> h1, h2, ... en un array de componentes
  const cityAndCountryComponents = await findAllByRole("heading")

  //Si estas condiciones se cumplen, va a ser PASS
  expect(cityAndCountryComponents[0]).toHaveTextContent("Guada")
  expect(cityAndCountryComponents[1]).toHaveTextContent("Mexico")
})