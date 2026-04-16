const { Router } = require('express');
const controllers = require('../controllers');
const upload = require('../utils/cloudinary');
const router = Router();

router.get('/', (req, res) => res.send('Welcome'))


router.post('/gatos', upload.single('imagen'),controllers.createGato);
router.get('/gatos', controllers.getAllGatos);
router.get('/gatos/:id', controllers.getGatoById);
router.delete('/gatos/:id', controllers.deleteGato)
router.put('/gatos/:id', upload.single('imagen'), controllers.updateGato);

module.exports = router;
