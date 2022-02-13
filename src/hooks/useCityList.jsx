import {useState, useEffect} from 'react'
import axios from 'axios'
import convertUnits from 'convert-units'
import { getCityCode } from './../utils/utils'
import { getWeatherUrl } from './../utils/urls'

const useCityList = (cities) => {
  const [allWeather, setAllWeather] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      
      const url = getWeatherUrl({city, countryCode})

      try {
        const response = await axios.get(url)
        const {data} = response
        const temperature = parseInt(convertUnits(data.main.temp).from("K").to("C").toFixed(0))
        const state = data.weather[0].main.toLowerCase()
        const propName = getCityCode(city, countryCode) // Ej: [Guadalajara-MX]
        const propValue = { temperature, state} //Ej: {temperature: 10, state:"sunny"}
        
        setAllWeather(allWeather => ({...allWeather, [propName]: propValue}))
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