import React from 'react'
import ForecastItem from './ForecastItem'

export default {
  title:"ForecastItem",
  component: ForecastItem
}

export const LunesSoleado = () => (
  <ForecastItem hour={14} state="sunny" temperature={23} weekDay="Lunes"/>
)