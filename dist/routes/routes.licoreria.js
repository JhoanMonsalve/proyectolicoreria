import { Router } from "express";
import { aguardiente, bebidas, cervezas, granizados, micheladas, principal, productos, ron } from "../controllers/controllers.licoreria.js";

const ruta = Router();

ruta.get("/", principal);
ruta.get("/productos", productos);
ruta.get("/cervezas", cervezas);
ruta.get("/aguardiente", aguardiente);
ruta.get("/ron", ron);
ruta.get("/granizados", granizados);
ruta.get("/micheladas", micheladas);
ruta.get("/bebidas", bebidas)

export default ruta;