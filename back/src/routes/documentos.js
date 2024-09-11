const express = require('express');
const { getDocumentos, uploadDocumento, deleteDocumento } = require('../controllers/documentos');
const router = express.Router();

router.get('/', getDocumentos);
router.post('/', uploadDocumento);
router.delete('/:id', deleteDocumento);

module.exports = router;


