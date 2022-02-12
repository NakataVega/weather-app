import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import convertUnits from 'convert-units'
import axios from 'axios'
import moment from 'moment'


const useCityPage = () => {
  const [chartData, setChartData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);

  const { city, countryCode } = useParams()
  //console.log("Ciudad ", city)
  //console.log("Pais ", countryCode)

  useEffect(() => {

    const getForecast = async() => {
      const apikey = "989b01fae952aa5ac734a6bbf1cfbf6b"
      const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apikey}`

      try {
        const { data } = await axios.get(url)
        //console.log(data)

        const toCelcius = (temp) => parseInt(convertUnits(temp).from("K").to("C"))

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

        setChartData(dataAux)


        const interval = [4, 8, 12, 16, 20, 24]

        const forecastItemListAux = data.list.filter((item, index) => interval.includes(index)).map(item => {
          return ({
            hour: moment.unix(item.dt).hour(),
            weekDay: moment.unix(item.dt).format("dddd"),
            state: item.weather[0].main.toLowerCase(),
            temperature: toCelcius(item.main.temp)
          })
        })

        setForecastItemList(forecastItemListAux)

      } catch (error) {
        console.log("Error", error)
      }
    }
    
    getForecast()
  }, [city, countryCode]);

  return { city, chartData, forecastItemList}
}

export default useCityPage