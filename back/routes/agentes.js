
const {Router} = require("express")
const router = Router()
const { registro } = require ("../controllers/agentes")




router.post("/registrar", registro)


module.exports=router;