const express = require("express")
const router = express.Router()
const { registro,editarUsuario, deleteAgente,mostrarAgentes } = require ("../controllers/agentes")



router.post("/registrar", registro)
router.put("/editarUsuario", editarUsuario)
router.delete("/deleteAgente", deleteAgente);
router.get("/mostrarAgentes", mostrarAgentes)


module.exports=router;