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
  return res.json([{"date":"2016-12-21","performance":null},{"date":"2016-12-22","performance":63.099999999999994},{"date":"2016-12-23","performance":44.2},{"date":"2016-12-24","performance":58.3},{"date":"2016-12-25","performance":65},{"date":"2016-12-26","performance":53.2},{"date":"2016-12-27","performance":76.6},{"date":"2016-12-28","performance":44.6},{"date":"2016-12-29","performance":58.099999999999994},{"date":"2016-12-30","performance":null}]);
});

routes.get('/api/daily/energy/power', ( req, res ) => {
  return res.json([
    {
      date: "2016-12-21",
      generatedPower: 20.05,
      availablePower: null,
    },
    {
      date: "2016-12-22",
      generatedPower: null,
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
      availablePower: null,
    },
    {
      date: "2016-12-30",
      generatedPower: null,
      availablePower: 25.24006400232699,
    },
  ]);
});

routes.get('/api/daily/inflow', ( req, res ) => {

  return res.json([{"date":"2022-04-28","inflow":280.9170611702595},{"date":"2022-04-29","inflow":428.17293645000547},{"date":"2022-04-30","inflow":328.0318999440638},{"date":"2022-05-01","inflow":237.05495506270645},{"date":"2022-05-02","inflow":198.389962546885},{"date":"2022-05-03","inflow":182.47194889444927},{"date":"2022-05-04","inflow":126.73634680263062},{"date":"2022-05-05","inflow":108.68522982422513},{"date":"2022-05-06","inflow":100.95753906755603},{"date":"2022-05-07","inflow":0}]);
});

const generateValue = () => {
  return Math.floor( Math.random() * ( 10 * 100 - 1 * 100 ) + 1 * 100 ) / ( 1 * 100 ) * 10;
};

module.exports = routes;
