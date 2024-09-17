const express = require("express")
const router = express.Router()
const { agregarProfesionales, mostrarProfesionales, borrarProfesional } = require ("../controllers/profesionales")



router.get("/", mostrarProfesionales)
router.post("/agregarProfesionales", agregarProfesionales)
router.delete("/borrarProfesional/:id", borrarProfesional);


module.exports=router;