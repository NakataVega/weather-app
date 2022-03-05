import {useState, useEffect} from 'react'
import axios from 'axios'
import { getWeatherUrl } from './../utils/urls'
import getAllWeather from './../utils/transform/getAllWeather'

const useCityList = (cities) => {
  const [allWeather, setAllWeather] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      
      const url = getWeatherUrl({city, countryCode})

      try {
        const response = await axios.get(url)
        
        const allWeatherAux = getAllWeather(response, city, countryCode)
        setAllWeather(allWeather => ({...allWeather, ...allWeatherAux}))
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
      setWeather(city, countryCode)
    })

  }, [cities])

  return {allWeather, error, setError}
}

export default useCityList