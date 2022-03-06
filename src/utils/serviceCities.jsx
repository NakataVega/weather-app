const cities = [
  {city:"Guadalajara", country:"Mexico", countryCode:"MX"},
  {city:"New York City", country:"United States", countryCode:"US"},
  {city:"Amsterdam", country:"Nederlands", countryCode:"NL"},
  {city:"Prague", country:"The Czech Republic", countryCode:"CZ"},
  {city:"Madrid", country:"Spain", countryCode:"ES"},
]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => (
  cities.filter(c => c.countryCode === countryCode)[0].country
)