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
  return res.json([{"date":"2016-12-21","performance":50.5},{"date":"2016-12-22","performance":63.099999999999994},{"date":"2016-12-23","performance":44.2},{"date":"2016-12-24","performance":58.3},{"date":"2016-12-25","performance":65},{"date":"2016-12-26","performance":53.2},{"date":"2016-12-27","performance":76.6},{"date":"2016-12-28","performance":44.6},{"date":"2016-12-29","performance":58.099999999999994},{"date":"2016-12-30","performance":35.9},{"date":"2016-12-31","performance":72.4}]);
});

routes.get('/api/daily/energy/power', ( req, res ) => {
  return res.json([
    {
      date: "2016-12-21",
      generatedPower: generateValue(),
      availablePower: generateValue(),
    },
    {
      date: "2016-12-22",
      generatedPower: generateValue(),
      availablePower: generateValue(),
    },
    {
      date: "2016-12-23",
      generatedPower: generateValue(),
      availablePower: generateValue(),
    },
    {
      date: "2016-12-24",
      generatedPower: generateValue(),
      availablePower: generateValue(),
    },
    {
      date: "2016-12-25",
      generatedPower: generateValue(),
      availablePower: generateValue(),
    },
    {
      date: "2016-12-26",
      generatedPower: generateValue(),
      availablePower: generateValue(),
    },
    {
      date: "2016-12-27",
      generatedPower: generateValue(),
      availablePower: generateValue(),
    },
    {
      date: "2016-12-28",
      generatedPower: generateValue(),
      availablePower: generateValue(),
    },
    {
      date: "2016-12-29",
      generatedPower: generateValue(),
      availablePower: generateValue(),
    },
    {
      date: "2016-12-30",
      generatedPower: generateValue(),
      availablePower: generateValue(),
    },
    {
      date: "2016-12-31",
      generatedPower: generateValue(),
      availablePower: generateValue(),
    },
  ]);
});

routes.get('/api/daily/inflow', ( req, res ) => {

  return res.json([
    {
      date: "2016-12-30",
      inflow: generateValue(),
    },
    {
      date: "2016-12-27",
      inflow: generateValue(),
    },
    {
      date: "2016-12-24",
      inflow: generateValue(),
    },
    {
      date: "2016-12-26",
      inflow: generateValue(),
    },
    {
      date: "2016-12-21",
      inflow: generateValue(),
    },
    {
      date: "2016-12-23",
      inflow: generateValue(),
    },
    {
      date: "2016-12-25",
      inflow: generateValue(),
    },
    {
      date: "2016-12-28",
      inflow: generateValue(),
    },
    {
      date: "2016-12-31",
      inflow: generateValue(),
    },
    {
      date: "2016-12-22",
      inflow: generateValue(),
    },
    {
      date: "2016-12-29",
      inflow: generateValue(),
    },
  ]);
});

const generateValue = () => {
  return Math.floor( Math.random() * ( 10 * 100 - 1 * 100 ) + 1 * 100 ) / ( 1 * 100 ) * 10;
};

module.exports = routes;
