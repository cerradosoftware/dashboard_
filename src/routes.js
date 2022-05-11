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
    { date: "2022-05-02", performance: 81.08 },
    { date: "2022-05-02", performance: 91.01279818223719 },
    { date: "2022-05-03", performance: 94.5419168474489 },
    { date: "2022-05-04", performance: 96.87978066269815 },
    { date: "2022-05-05", performance: 98.13826207869428 },
    { date: "2022-05-06", performance: 98.47771652059946 },
    { date: "2022-05-07", performance: 95.77981771269073 },
    { date: "2022-05-08", performance: 97.72333234546376 },
    { date: "2022-05-09", performance: 93.73202580532362 },
    { date: "2022-05-10", performance: null },
  ]);
});

routes.get("/api/daily/energy/power", (req, res) => {
  return res.json([
    {
      date: "2022-05-01",
      generatedPower: 4.55375,
      availablePower: 4.49817807919326,
    },
    {
      date: "2022-05-02",
      generatedPower: 10.080416666666668,
      availablePower: 10.888716517340104,
    },
    {
      date: "2022-05-03",
      generatedPower: 8.52125,
      availablePower: 8.343707514805644,
    },
    {
      date: "2022-05-04",
      generatedPower: 7.17125,
      availablePower: 7.639473146067512,
    },
    {
      date: "2022-05-05",
      generatedPower: 6.795263157894738,
      availablePower: null,
    },
    {
      date: "2022-05-06",
      generatedPower: 5.76157894736842,
      availablePower: null,
    },
    {
      date: "2022-05-07",
      generatedPower: 4.435263157894737,
      availablePower: null,
    },
  ]);
});

routes.get("/api/daily/inflow", (req, res) => {
  return res.json([
    { date: "2022-05-01", inflow: 77.26164081017681 },
    { date: "2022-05-02", inflow: 68.26164081017681 },
    { date: "2022-05-06", inflow: 33.862905831364436 },
    { date: "2022-05-09", inflow: 11.685364735578148 },
    { date: "2022-05-05", inflow: 41.07697346851748 },
    { date: "2022-05-03", inflow: 57.93611335934517 },
    { date: "2022-05-07", inflow: 27.64183702531563 },
    { date: "2022-05-04", inflow: 48.72821339636959 },
    { date: "2022-05-10", inflow: null },
    { date: "2022-05-08", inflow: 19.59983890856307 },
  ]);
});

const generateValue = () => {
  return (
    (Math.floor(Math.random() * (10 * 100 - 1 * 100) + 1 * 100) / (1 * 100)) *
    10
  );
};

module.exports = routes;

