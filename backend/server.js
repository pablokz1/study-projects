import * as http from "http";
import app from "./src/app.js";

const PORT = 3000;

http
  .createServer({}, app)
  .listen(PORT, () => console.log("meu primeiro olá mundo"));
