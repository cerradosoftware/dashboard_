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
    { date: "2022-05-02", performance: 101.75234417929792 },
    { date: "2022-05-03", performance: generateValue(200) },
    { date: "2022-05-04", performance: 97.18606988359983 },
    { date: "2022-05-05", performance: generateValue(200) },
    { date: "2022-05-06", performance: null },
    { date: "2022-05-07", performance: null },
  ]);
});

routes.get("/api/daily/energy/power", (req, res) => {
  return res.json([
    {
      date: "2022-05-02",
      generatedPower: 10.080416666666668,
      availablePower: generateValue(50),
    },
    {
      date: "2022-05-03",
      generatedPower: generateValue(50),
      availablePower: 40.343707514805644,
    },
    {
      date: "2022-05-04",
      generatedPower: 16.17125,
      availablePower: 16.639473146067512,
    },
    {
      date: "2022-05-05",
      generatedPower: generateValue(50),
      availablePower: null,
    },
    {
      date: "2022-05-06",
      generatedPower: 12.76157894736842,
      availablePower: generateValue(50),
    },
    {
      date: "2022-05-07",
      generatedPower: 2.435263157894737,
      availablePower: null,
    },
  ]);
});

routes.get("/api/daily/inflow", (req, res) => {
  return res.json([
    { date: "2022-05-02", inflow: 198.389962546885 },
    { date: "2022-05-03", inflow: generateValue(2000) },
    { date: "2022-05-04", inflow: 1.73634680263062 },
    { date: "2022-05-05", inflow: null },
    { date: "2022-05-06", inflow: generateValue(2000) },
    { date: "2022-05-07", inflow: null },
  ]);
});

const generateValue = (limit = 100) => {
  return (
    (Math.floor(Math.random() * (10 * limit - 1 * limit) + 1 * limit) /
      (1 * limit)) *
    10
  );
};

module.exports = routes;

