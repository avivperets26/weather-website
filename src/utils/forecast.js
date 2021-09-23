const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=12dcec55dad68100435e79816f57f7d7&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";
  console.log(url);
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " dagrees out, This high today is " +
          body.current.feelslike +
          " dagrees with a low of " +
          body.current.humidity +
          "% Humidity."
      );
    }
  });
};
module.exports = forecast;
