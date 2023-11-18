const request = require('request');
const getWeather = (location, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4ffff3ca712116975a1ad59392432e5d&query=' + location;
    request({ url : url, json: true}, (error, response) => {
        if (error) {
            callback('Something went wrong', undefined);
        } else {
            callback(undefined, response.body);
        }       
    })
}

module.exports = getWeather;