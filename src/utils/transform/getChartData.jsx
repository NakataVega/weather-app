import { toCelcius } from './../utils'
import moment from 'moment'

const getChartData = (data) => {
  const daysAhead = [0, 1, 2, 3, 4, 5]

  const days = daysAhead.map(d => moment().add(d, 'd'))

  const dataAux = days.map(day => {
    const tempObjArray = data.list.filter(item => {
      const dayOfYear = moment.unix(item.dt).dayOfYear()
      return dayOfYear === day.dayOfYear()
    })

    const temps = tempObjArray.map(item => item.main.temp)

    //console.log("day.dayOfYear()", day.dayOfYear())
    //console.log("tempObjArray ",tempObjArray)
    
    return( {
      dayHour: day.format('ddd'),
      min: toCelcius(Math.min(...temps)),
      max: toCelcius(Math.max(...temps)),
      hasTemps: (temps.length > 0 ? true : false)
    })
  }).filter(item => item.hasTemps)

  return dataAux
}

export default getChartData 