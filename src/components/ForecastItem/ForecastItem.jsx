import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { 
  WiCloud, WiDayCloudy, WiDayFog, WiDaySunny, WiRain 
} from 'react-icons/wi'
import { IconContext } from 'react-icons'


const validValues = ["cloud","cloudy","fog","sunny","rain",]

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

const ForecastItem = ({weekDay, hour, state, temperature}) => {
  return (
    <Grid container direction="column" justifyContent="flex-start" alignItems="center">
      <Grid item>
        <Typography>{weekDay}</Typography>
      </Grid>
      <Grid item>
        <Typography>{hour}</Typography>
      </Grid>
      <Grid item>
        <IconContext.Provider value={{size:"5em"}}>
          { renderState(state) }
        </IconContext.Provider>
      </Grid>
      <Grid item>
        <Typography>{temperature} °</Typography>
      </Grid>
    </Grid>
  )
}

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired, //ptsr
  hour: PropTypes.number.isRequired, //ptnr
  state: PropTypes.oneOf(validValues).isRequired, //ptsr
  temperature: PropTypes.number.isRequired, //ptnr
}

export default ForecastItem
