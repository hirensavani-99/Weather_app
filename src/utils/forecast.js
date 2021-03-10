const request = require('postman-request')

const forecast = (latitude, longtitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=cd4054cc0b8d6376d13fffe3353703f5&query=' + latitude + ',' + longtitude
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('unable to join', undefined)
        } else if (body.error) {
            callback('unable to find a location', undefined)
        }
        else {

            var time_date = new Array();

            const outsideTemperature = body.current.temperature;
            const feelsLike = body.current.feelslike;
            const humidity = body.current.humidity;
            const wind_speed = body.current.wind_speed;
            time_date = body.location.localtime.split(' ')

            
            
            
            
            const time = time_date[1]
            const date = time_date[0]
            callback(undefined, {
                outsideTemperature,
                feelsLike,
                humidity,
                wind_speed,
                time,date
                
            })

        }

    })
}

module.exports = forecast;