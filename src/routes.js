const { Router } = require('express');

const routes = Router();

routes.get('/api/average/energy/loss', ( req, res ) => {
  return res.json({
    performance: generateValue(),
    loss: generateValue()
  });
});

routes.get("/api/average/energy/power", ( req, res ) => {
  return res.json({
    date: null,
    generatedPower: generateValue(),
    availablePower: generateValue(),
  });
});

routes.get('/api/daily/energy/performance', ( req, res ) => {
  return res.json([{"date":"2016-12-21","performance":50.5},{"date":"2016-12-22","performance":63.099999999999994},{"date":"2016-12-23","performance":44.2},{"date":"2016-12-24","performance":58.3},{"date":"2016-12-25","performance":65},{"date":"2016-12-26","performance":53.2},{"date":"2016-12-27","performance":76.6},{"date":"2016-12-28","performance":44.6},{"date":"2016-12-29","performance":58.099999999999994},{"date":"2016-12-30","performance":35.9}]);
});

routes.get('/api/daily/energy/power', ( req, res ) => {
  return res.json([
    {
      date: "2016-12-21",
      generatedPower: 20.05,
      availablePower: 25.141767926859963,
    },
    {
      date: "2016-12-22",
      generatedPower: 19.745,
      availablePower: 25.109418121043287,
    },
    {
      date: "2016-12-23",
      generatedPower: null,
      availablePower: null,
    },
    {
      date: "2016-12-24",
      generatedPower: 24.9,
      availablePower: 25.02,
    },
    {
      date: "2016-12-25",
      generatedPower: 23.2,
      availablePower: 23.4,
    },
    {
      date: "2016-12-26",
      generatedPower: 8.9,
      availablePower: 25.02,
    },
    {
      date: "2016-12-27",
      generatedPower: 17.38,
      availablePower: 25.175921453401592,
    },
    {
      date: "2016-12-28",
      generatedPower: 21.48086956521739,
      availablePower: 25.610399091768844,
    },
    {
      date: "2016-12-29",
      generatedPower: 20.505416666666665,
      availablePower: 25.357242750286165,
    },
    {
      date: "2016-12-30",
      generatedPower: 16.28708333333333,
      availablePower: 25.24006400232699,
    },
  ]);
});

routes.get('/api/daily/inflow', ( req, res ) => {

  return res.json([
    {
    "date": "2016-12-30",
    "inflow": 312.9964869294174
    },
    {
    "date": "2016-12-27",
    "inflow": 321.9182515911149
    },
    {
    "date": "2016-12-24",
    "inflow": null
    },
    {
    "date": "2016-12-26",
    "inflow": 338.407176703862
    },
    {
    "date": "2016-12-21",
    "inflow": 337.6060867962611
    },
    {
    "date": "2016-12-23",
    "inflow": 351.68691377271693
    },
    {
    "date": "2016-12-25",
    "inflow": 366.21229440936395
    },
    {
    "date": "2016-12-28",
    "inflow": 363.08127243747964
    },
    {
    "date": "2016-12-31",
    "inflow": 300.15587047042607
    },
    {
    "date": "2016-12-22",
    "inflow": 340.6381679010164
    }
  ]);
});

const generateValue = () => {
  return Math.floor( Math.random() * ( 10 * 100 - 1 * 100 ) + 1 * 100 ) / ( 1 * 100 ) * 10;
};

module.exports = routes;
