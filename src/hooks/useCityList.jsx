import {useState, useEffect} from 'react'
import axios from 'axios'
import { getWeatherUrl } from './../utils/urls'
import getAllWeather from './../utils/transform/getAllWeather'
import { getCityCode } from './../utils/utils'

const useCityList = (cities, allWeather, onSetAllWeather) => {
  //const [allWeather, setAllWeather] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      
      const url = getWeatherUrl({city, countryCode})

      try {
        const propName = getCityCode(city, countryCode)

        onSetAllWeather({ [propName]: {} })
        
        const response = await axios.get(url)
        
        const allWeatherAux = getAllWeather(response, city, countryCode)

        onSetAllWeather(allWeatherAux)
          
      } catch (error) {
        if(error.response){ //El server no responde
          //const {data, status} = error.response
          setError("Error con el servidor")
        } else if (error.request) { //No llegar al server
          setError("Verifique la conexión a Internet")
        } else { //Razones imprevistas
          setError("Error imprevisto")
        }
      }
    }

    cities.forEach( ({city, countryCode})  => {
      if(!allWeather[getCityCode(city, countryCode)]){
        setWeather(city, countryCode)
      }
    })

  }, [cities, onSetAllWeather, allWeather])

  return { error, setError }
}

export default useCityList