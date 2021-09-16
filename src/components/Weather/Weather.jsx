import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { 
  WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain 
} from 'react-icons/wi'
import { IconContext } from 'react-icons'


const stateByName = {
  cloud: WiCloud,
  cloudy: WiDayCloudy,
  fog: WiDayFog,
  sunny: WiDaySunny,
  rain: WiRain
}

const renderState = state => {
  //let Icon = stateByName[state] !== undefined ? stateByName[state] : stateByName["sunny"]
  //State validado con PropTypes
  const IconState = stateByName[state]
  return <IconState />
}

const Weather = ( {temperature, state} ) => {
  return (
    <div>
      <IconContext.Provider value={{size:"5em"}}>
        { renderState(state) }
      </IconContext.Provider>
      <Typography display="inline" variant="h2">{temperature}°C</Typography>
    </div>
  )
}

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
}

export default Weather