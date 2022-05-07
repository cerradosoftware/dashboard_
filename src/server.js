const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const app = express();
const server = require("http").Server(app);

app.use(cors());
app.use(express.json());

app.use(routes);

const port = process.env.PORT || 3333;

server.listen(port, () => {
  console.log(`Server Running In Port ${ port }`);
});
