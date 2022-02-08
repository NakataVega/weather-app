import React from 'react'
import PropTypes from 'prop-types'
import { 
  WiDayCloudy, 
  WiDayFog, 
  WiDaySunny, 
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiRaindrops,
  WiSmog
} from 'react-icons/wi'

export const validValues = [
  "clouds",
  "fog",
  "clear",
  "rain",
  "snow",
  "drizzle",
  "thunderstorm",
  "mist"
]

const stateByName = {
  clouds: WiDayCloudy,
  fog: WiDayFog,
  clear: WiDaySunny,
  rain: WiRain,
  snow: WiSnow,
  thunderstorm: WiThunderstorm,
  drizzle: WiRaindrops,
  mist: WiSmog
}
const IconState = ({state}) => {
  const StateByName = stateByName[state]
  return (
    <StateByName />
  )
}

IconState.propTypes = {
  state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState
