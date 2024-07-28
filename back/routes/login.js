
const {Router} = require("express")
const router = Router()
const { registro, login} = require ("../controllers/login")




router.post("/registrar", registro)
router.post("/login", login)


module.exports=router;