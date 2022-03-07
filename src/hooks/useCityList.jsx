import {useState, useEffect} from 'react'
import axios from 'axios'
import { getWeatherUrl } from './../utils/urls'
import getAllWeather from './../utils/transform/getAllWeather'
import { getCityCode } from './../utils/utils'

const useCityList = (cities, allWeather, actions) => {
  //const [allWeather, setAllWeather] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      
      const url = getWeatherUrl({city, countryCode})

      try {
        const propName = getCityCode(city, countryCode)

        //onSetAllWeather({ [propName]: {} })
        actions({type: 'SET_ALL_WEATHER', payload:{ [propName]: {} }})
        
        const response = await axios.get(url)
        
        const allWeatherAux = getAllWeather(response, city, countryCode)

        //onSetAllWeather(allWeatherAux)
        actions({type: 'SET_ALL_WEATHER', payload: allWeatherAux})
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

  }, [cities, actions, allWeather])

  return { error, setError }
}

export default useCityList