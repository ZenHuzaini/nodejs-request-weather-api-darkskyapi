const request = require('request')

const url = 'https://api.darksky.net/forecast/8593f986c0f88727f3270a097ee4b90c/37.8267,-122.4233?units=si'
//'https://api.darksky.net/forecast/8593f986c0f88727f3270a097ee4b90c/37.8267,-122.4233' to customize add ? followed with the keyvalue=value
//example 'https://api.darksky.net/forecast/8593f986c0f88727f3270a097ee4b90c/37.8267,-122.4233?units=si&ang=id'
//read https://darksky.net/dev/docs

const getWeather = () => {
    request({ url: url, json: true }, (error, response) => { //json true to enable automatic json parsing
        // const data = JSON.parse(response.body) // it is used if json option is not enabled / json: not true ..which is to change json string to json
        // console.log(response.body)
        console.log(`overall, the weather today is ${response.body.currently.summary} with the temperature of ${response.body.currently.temperature} celcius `)
        console.log(`and right now is ${response.body.minutely.summary} .. and current precip intensity is ${response.body.minutely.data[0].precipIntensity}`)
    })
}

getWeather()


