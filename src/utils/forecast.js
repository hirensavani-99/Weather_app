const request = require('postman-request')

const forecast = (latitude, longtitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=cd4054cc0b8d6376d13fffe3353703f5&query=' + latitude + ',' + longtitude
    request({ url, json: true }, (error, {body}={}) => {
        if (error) {
            callback('unable to join', undefined)
        } else if (body.error) {
            callback('unable to find a location', undefined)
        }
        else {

            const outsideTemperature = body.current.temperature;
            const feelsLike = body.current.feelslike
            callback(undefined, {
                outsideTemperature,
                feelsLike
            })

        }

    })
}

module.exports = forecast;