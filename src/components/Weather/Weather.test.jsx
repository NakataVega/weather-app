import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test("Weather render sunny", async () => {
  //AAA Arrange Act Assert

  const { findByRole } = render(<Weather temperature={22} state="sunny"/>)

  const temp = await findByRole("heading")
  
  expect(temp).toHaveTextContent("22")
})