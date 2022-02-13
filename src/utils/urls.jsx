
const apikey = "989b01fae952aa5ac734a6bbf1cfbf6b"

export const getWeatherUrl = ({city, countryCode}) => (`http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apikey}`)

export const getForecastUrl = ({city, countryCode}) => (`http://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apikey}`)