import { Router } from "express";
import rutalicoreria from "./routes.licoreria.js";

const ruta = Router();

ruta.use("/", rutalicoreria);

export default ruta;
