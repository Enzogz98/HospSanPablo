
const {Router} = require("express")
const router = Router()
const {mostrar,mostarUno, registrar, editar, eliminar, login} = require ("../controllers/login")



router.get("/", mostrar)
router.get("/:id", mostarUno)
router.post("/registrar", registrar)
router.post("/login", login)
router.put("/editar:id", editar)
router.delete("/eliminar:id", eliminar)

module.exports=router;