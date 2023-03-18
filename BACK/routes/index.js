const { Router} = require('express');

var { getCharById } = require('../controllers/getCharById.js')
var { getCharDetail } = require('../controllers/getCharDetail.js')
var { addFavs, getFavs, deleteFav} = require('../controllers/favController.js')

const router = Router();

router.get('/onsearch/:id', getCharById);
router.get('/detail/:id', getCharDetail);

router.post('/fav', addFavs);
router.get('/fav', getFavs);
router.delete('/fav/:id', deleteFav);

module.exports = router;