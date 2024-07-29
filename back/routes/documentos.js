const { Router } = require('express');
const { getDocumentos, uploadDocumento, deleteDocumento } = require('../controllers/documentos');
const router = Router();

router.get('/', getDocumentos);
router.post('/', uploadDocumento);
router.delete('/:id', deleteDocumento);

module.exports = router;