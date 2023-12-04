const express = require('express');
const app = express();
const PORT = 4454;
const citiesWeather = require('./weather_cities.json');

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  next();
});

app.get('/forecast', (req, res) => {
  res.send(citiesWeather);
});

app.get('/latestForecast', (req, res) => { // endpoint to get forecast for all cities for the latest date
  const latestDate = '2023-11-27';
  const latestForecast = findDateForecast(latestDate, res);
  res.send(latestForecast);
});

app.get('/filterForecast', (req, res) => {  // endpoint to get forecast for a city at custom date
  let customForecast;
  const { cityId, date } = req.query;

  if (cityId && !date) {
    const foundCity = findCity(cityId, res);
    res.send(foundCity);
  }
  if (date && !cityId) {
    const foundDateForecast = findDateForecast(date, res);
    res.send(foundDateForecast);
  }

  if (date && cityId) {
    const foundCity = findCity(cityId, res);
    const { forecast, ...cityData } = foundCity;
    // let checkDate = forecast.filter((element) => element.date == date);
    // if (!checkDate) {
    //   throw res.status(404).send({ errorMessage: `Forecast date Not Found` });
    // }
    forecast.forEach(element => {
      if (element.date == date) {
        customForecast = { ...cityData, forecast: [element] }
      }
    })
    
    if (!customForecast) {
      throw res.status(404).send({ errorMessage: `Forecast Not Found` });
    }

    res.send(customForecast);
  }
});


function findDateForecast(date, res) {
  const dateForecastList = [];
  citiesWeather.forEach(element => {
    const { forecast, ...cityData } = element; // separate city data(id,name) and its forecast
    let checkDate = forecast.filter((element) => element.date == date);
    if (!checkDate) dateForecastList=[];
      forecast.forEach(element => {
        if (element.date == date) {
          const forecast = element;  // get the forecast for the required date
          const dateForecast = { ...cityData, forecast }; // object of cityData and its forecast for the required date 
          dateForecastList.push(dateForecast)
        }
      });
    
  });

  if (!dateForecastList.length) {
    throw res.status(404).send({ errorMessage: `Forecast date Not Found` });
  }
  return dateForecastList;
}

function findCity(cityId, res) {
  const foundCity = citiesWeather.find(it => it.id == cityId);
  if (!foundCity) {
    throw res.status(404).send({ errorMessage: `City does not exist` });
  }
  return foundCity;
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
