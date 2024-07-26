const axios = require ("axios")

const login = async(req, res) =>{
    const {usuario, contraseña} = req.body;

    if (!usuario || !contraseña ){
        return res.status(400).send("Usuario y contraseña son requeridos")
    }

    try{
        const response = await axios.get("https://localhost:8000/login")
        const usuarios = response.data;
        const verifiedData = usuarios.some(user => user.usuario === usuario && user.contraseña === contraseña);
        
        if(verifiedData){
            let nDatos ={usuario,contraseña}
            res.status(200).json(nDatos)
        }else{
            res.status(400).send("cedenciales incorrectas")
        }
    } catch(error){
        console.log(error)
    }
}