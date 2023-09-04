import express from "express";
import TarefasController from "./src/controller/TarefasController.js";

const app = express()

const port = process.env.PORT || 3000
app.listen(port, ()=>{

    console.log("pai ta on, tipo neymar")
})

app.use(express.json())

TarefasController.rotas(app);