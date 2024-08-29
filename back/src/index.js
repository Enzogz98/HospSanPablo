const express = require('express');
const fileUpload = require('express-fileupload');
const logger = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const { config } = require('dotenv')
config()
// const env-var = require('env-var')


const login = require('./routes/login');
const documentos = require('./routes/documentos');
const agentesRoute = require('./routes/agentes');

const app = express();

app.use(bodyParser.json());
app.use(compression());
app.use(logger('dev'));
app.use(cors());
app.use(fileUpload());
app.use('/uploads', express.static('uploads'));

const port = process.env.PORT || 8000

app.listen(port, () => {

    console.log( `Escuchando el puerto ${port}`)

})

app.use('/login', login);
app.use('/documentos', documentos);
app.use('/agentes', agentesRoute);

app.get('/', (req, res) => {
    res.send('Welcome <br/> Franco Gay<br> ');
});