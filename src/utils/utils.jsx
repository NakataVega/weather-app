import convertUnits from 'convert-units'

export const getCityCode = (city, countryCode) => `${city}-${countryCode}`

export const toCelcius = (temp) => {
  var celciusTemp = parseInt(convertUnits(temp).from("K").to("C"))
  
  if(celciusTemp === 0) return "0" 
  return celciusTemp
}