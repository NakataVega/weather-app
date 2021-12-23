import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { IconContext } from 'react-icons'
import IconState, {validValues} from './../IconState'

const ForecastItem = ({weekDay, hour, state, temperature}) => {
  return (
    <Grid container direction="column" justifyContent="flex-start" alignItems="center">
      <Grid item>
        <Typography>{weekDay}</Typography>
      </Grid>
      <Grid item>
        <Typography>{hour} hrs</Typography>
      </Grid>
      <Grid item>
        <IconContext.Provider value={{size:"5em"}}>
          <IconState state={state} />
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
