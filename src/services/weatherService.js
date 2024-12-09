const API_KEY = "4d06b23fb9704ed18ee154706240912"
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`

const show = async (city) => {
    try {
      const apiResponse = await fetch(BASE_URL + `&q=${city}`)
      const weatherData = await apiResponse.json()
      return weatherData
    } catch (error) {
      console.error(error)
    }
  }
  
  export { show }