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
  return res.json([{"date":"2016-12-21","performance":96.62},{"date":"2016-12-22","performance":96.48},{"date":"2016-12-23","performance":96.75},{"date":"2016-12-24","performance":96.48},{"date":"2016-12-25","performance":97.19},{"date":"2016-12-26","performance":97.44},{"date":"2016-12-27","performance":97.11},{"date":"2016-12-28","performance":98.22},{"date":"2016-12-29","performance":98.85},{"date":"2016-12-30","performance":96.97}]);
});

routes.get('/api/daily/energy/power', ( req, res ) => {
  return res.json([
    {
      date: "2016-12-21",
      generatedPower: 25.37,
      availablePower: 25.37,
    },
    {
      date: "2016-12-22",
      generatedPower: 25.41,
      availablePower: 25.41,
    },
    {
      date: "2016-12-23",
      generatedPower: 24.08,
      availablePower: 24.08,
    },
    {
      date: "2016-12-24",
      generatedPower: 22.57,
      availablePower: 22.57,
    },
    {
      date: "2016-12-25",
      generatedPower: 16.17,
      availablePower: 16.17,
    },
    {
      date: "2016-12-26",
      generatedPower: 13.85,
      availablePower: 13.85,
    },
    {
      date: "2016-12-27",
      generatedPower: 12.79,
      availablePower: 12.79,
    },
    {
      date: "2016-12-28",
      generatedPower: 3,
      availablePower: 6.44,
    },
    {
      date: "2016-12-29",
      generatedPower: 14.84,
      availablePower: 14.84,
    },
    {
      date: "2016-12-30",
      generatedPower: 12.18,
      availablePower: 12.18,
    },
  ]);
});

routes.get('/api/daily/inflow', ( req, res ) => {

  return res.json([{"date":"2022-04-28","inflow":53},{"date":"2022-04-29","inflow":68},{"date":"2022-04-30","inflow":127},{"date":"2022-05-01","inflow":49},{"date":"2022-05-02","inflow":41},{"date":"2022-05-03","inflow":34},{"date":"2022-05-04","inflow":34},{"date":"2022-05-05","inflow":52},{"date":"2022-05-06","inflow":37},{"date":"2022-05-07","inflow":42}]);
});

const generateValue = () => {
  return Math.floor( Math.random() * ( 10 * 100 - 1 * 100 ) + 1 * 100 ) / ( 1 * 100 ) * 10;
};

module.exports = routes;
