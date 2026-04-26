import express from "express";
import {  readAllUsers } from "./controllers/UserController";
import { createShoes, deleteShoes, readAllShoes, searchMarcaShoes, searchShoes, totalPares, updateShoes } from "./controllers/CalcadosController";


const routes = express.Router();

routes.get("/users", readAllUsers);

routes.post("/shoes", createShoes);
export default routes;

routes.get("/shoes", readAllShoes);

routes.put("/shoes/:id", updateShoes);

routes.delete("/shoes/:id", deleteShoes);

routes.get("/shoes/:tamanho", searchShoes);

routes.get("/shoes/marca/:marca", searchMarcaShoes);

routes.get("/shoes/estoque/quantidade", totalPares);



