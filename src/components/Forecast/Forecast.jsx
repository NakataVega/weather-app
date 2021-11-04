import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForecastItem from '../../ForecastItem'
import {validValues} from './../IconState'

const renderForecastItem = forecast => {
  const { weekDay, hour, state, temperature } = forecast
  return (
    <Grid item key = {`${weekDay}${hour}`}>
      <ForecastItem 
        hour = {hour}
        weekDay = {weekDay}
        state = {state}
        temperature = {temperature}
      ></ForecastItem>
    </Grid>
  )
}

const Forecast = ({forecastItemList}) => {
  return (
    <Grid justifyContent="flex-start" alignItems="center">
      {
        forecastItemList.map(forecast => renderForecastItem(forecast))
      }
    </Grid>
  )
}

//forecastItemList es un array de elementos
//los elementos deben tener una 'forma' en particular
/*
  weekDay: PropTypes.string.isRequired, //ptsr
  hour: PropTypes.number.isRequired, //ptnr
  state: PropTypes.oneOf(validValues).isRequired, //ptsr
  temperature: PropTypes.number.isRequired, //ptnr
*/
Forecast.propTypes = {
  //forecastItemList: PropTypes.array.isRequired
  forecastItemList: PropTypes.arrayOf(PropTypes.shape({
    weekDay: PropTypes.string.isRequired, //ptsr
    hour: PropTypes.number.isRequired, //ptnr
    state: PropTypes.oneOf(validValues).isRequired, //ptsr
    temperature: PropTypes.number.isRequired, //ptnr
  })).isRequired,
}

export default Forecast
