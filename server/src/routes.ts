import express from "express";
import {  readAllUsers } from "./controllers/UserController";
import { createShoes, readAllShoes, updateShoes } from "./controllers/CalcadosController";


const routes = express.Router();

routes.get("/users", readAllUsers);

routes.post("/shoes", createShoes);
export default routes;

routes.get("/shoes", readAllShoes);

routes.put("/shoes/:id", updateShoes);
