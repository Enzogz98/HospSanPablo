
const {Router} = require("express")
const router = Router()
const { registrar, login, mostrarUsuarios, mostrarUsuario, deleteUsuario, mostrarUsuarioNombre } = require ("../controllers/login")




router.post("/registrar", registrar)
router.post("/login", login)
router.get("/", mostrarUsuarios)
router.get("/:id", mostrarUsuario)

router.get("/user/:nombre", mostrarUsuarioNombre)

router.delete("/:id", deleteUsuario)


module.exports=router;