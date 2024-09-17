const express = require('express');
const fileUpload = require('express-fileupload');
const logger = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const { config } = require('dotenv');
const path = require('path');

config();

const login = require('./routes/login');
const documentos = require('./routes/documentos');
const agentesRoute = require('./routes/agentes');
const profesionales = require('./routes/profesionales');

const app = express();

app.use(bodyParser.json());
app.use(compression());
app.use(logger('dev'));


const corsOptions = {
    origin: '*', 
    methods: ['GET', 'POST', 'DELETE', 'PUT'], 
    allowedHeaders: ['Content-Type', 'Authorization'] 
};
app.use(cors(corsOptions));

app.use(fileUpload());
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});

app.use('/login', login);
app.use('/documentos', documentos);
app.use('/agentes', agentesRoute);
app.use('/profesionales', profesionales);

app.get('/', (req, res) => {
    res.send('welcome <br/> Joaquin Gil Dev <br> ');
});
