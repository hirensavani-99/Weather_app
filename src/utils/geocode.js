const request = require('postman-request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoiaGlyZW42MSIsImEiOiJja2xua3hyNGUwazNkMnVuM2FlODYzMjZkIn0.ldaHu4AzccLw5gbFyRWzeQ&limit=1"
  
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('unable to join', undefined)
            
        }
        else if (body.features.length === 0) {
            callback('location not found', undefined)
        }
        else {
            const latitude = body.features[0].center[1]
            const longtitude = body.features[0].center[0]
            const location = body.features[0].place_name

           callback(undefined,{latitude,longtitude,location})
        }
    })
}

module.exports = geocode