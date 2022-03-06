import {useState, useEffect, useDebugValue} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getForecastUrl } from './../utils/urls'
import getChartData from './../utils/transform/getChartData'
import getForecastItemList from './../utils/transform/getForecastItemList'

const useCityPage = () => {
  const [chartData, setChartData] = useState(null);
  const [forecastItemList, setForecastItemList] = useState(null);

  const { city, countryCode } = useParams()
  //console.log("Ciudad ", city)
  //console.log("Pais ", countryCode)

  useDebugValue(`useCityPage ${city}`)

  useEffect(() => {

    const getForecast = async() => {
      
      const url = getForecastUrl({city, countryCode})

      try {
        const { data } = await axios.get(url)
        
        const dataAux = getChartData(data)

        setChartData(dataAux)

        const forecastItemListAux = getForecastItemList(data)

        setForecastItemList(forecastItemListAux)

      } catch (error) {
        console.log("Error", error)
      }
    }
    
    getForecast()
  }, [city, countryCode]);

  return { city, countryCode, chartData, forecastItemList}
}

export default useCityPage