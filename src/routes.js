const { Router } = require("express");

const routes = Router();

routes.get("/api/average/energy/loss", (req, res) => {
  return res.json({
    performance: generateValue(),
    loss: generateValue(),
  });
});

routes.get("/api/average/energy/power", (req, res) => {
  return res.json({
    date: null,
    generatedPower: generateValue(),
    availablePower: generateValue(),
  });
});

routes.get("/api/daily/energy/performance", (req, res) => {
  return res.json([
    { date: "2016-12-21", performance: 96.62 },
    { date: "2016-12-22", performance: 96.48 },
    { date: "2016-12-23", performance: 96.75 },
    { date: "2016-12-24", performance: 96.48 },
    { date: "2016-12-25", performance: 97.19 },
    { date: "2016-12-26", performance: 97.44 },
    { date: "2016-12-27", performance: 97.11 },
    { date: "2016-12-28", performance: 98.22 },
    { date: "2016-12-29", performance: 98.85 },
    { date: "2016-12-30", performance: 96.97 },
  ]);
});

routes.get("/api/daily/energy/power", (req, res) => {
  return res.json([
    {
      date: "2016-12-21",
      generatedPower: 0.37,
      availablePower: 0.37,
    },
    {
      date: "2016-12-22",
      generatedPower: 2.41,
      availablePower: 2.41,
    },
    {
      date: "2016-12-23",
      generatedPower: 3.08,
      availablePower: 3.08,
    },
    {
      date: "2016-12-24",
      generatedPower: 0.57,
      availablePower: 0.57,
    },
    {
      date: "2016-12-25",
      generatedPower: 1.17,
      availablePower: 1.17,
    },
    {
      date: "2016-12-26",
      generatedPower: 2.85,
      availablePower: 2.85,
    },
    {
      date: "2016-12-27",
      generatedPower: 3.79,
      availablePower: 3.79,
    },
    {
      date: "2016-12-28",
      generatedPower: 3,
      availablePower: 3.44,
    },
    {
      date: "2016-12-29",
      generatedPower: 0.84,
      availablePower: 0.84,
    },
    {
      date: "2016-12-30",
      generatedPower: 1.18,
      availablePower: 1.18,
    },
  ]);
});

routes.get("/api/daily/inflow", (req, res) => {
  return res.json([
    { date: "2022-04-28", inflow: 280.9170611702595 },
    { date: "2022-04-29", inflow: 428.17293645000547 },
    { date: "2022-04-30", inflow: 328.0318999440638 },
    { date: "2022-05-01", inflow: 237.05495506270645 },
    { date: "2022-05-02", inflow: 198.389962546885 },
    { date: "2022-05-03", inflow: 182.47194889444927 },
    { date: "2022-05-04", inflow: 126.73634680263062 },
    { date: "2022-05-05", inflow: 108.68522982422513 },
    { date: "2022-05-06", inflow: 100.95753906755603 },
    { date: "2022-05-07", inflow: 45 },
  ]);
});

const generateValue = () => {
  return (
    (Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1 * 100)) *
    10
  );
};

module.exports = routes;

