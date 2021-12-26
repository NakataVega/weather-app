import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { IconContext } from 'react-icons'
import IconState, {validValues} from './../IconState'

const Weather = ( {temperature, state} ) => {
  return (
    <Grid 
      container item
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={1}
    >
      <IconContext.Provider value={{size:"5em"}}>
        <IconState state={state} />
      </IconContext.Provider>
      <Typography display="inline" variant="h2">{temperature}°C</Typography>
    </Grid>
  )
}

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  state: PropTypes.oneOf(validValues).isRequired,
}

export default Weather