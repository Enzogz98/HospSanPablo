
const express = require("express")
const router = express.Router()
const { registro, deleteAgente,mostrarAgentes } = require ("../controllers/agentes")





router.post("/registrar", registro)
router.delete("/deleteAgente", deleteAgente);
router.get("/mostrarAgentes", mostrarAgentes)


module.exports=router;