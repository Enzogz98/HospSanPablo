
const {Router} = require("express")
const router = Router()
const { registro, login, mostrarUsuarios} = require ("../controllers/login")




router.post("/registrar", registro)
router.post("/login", login)
router.get("/", mostrarUsuarios)


module.exports=router;