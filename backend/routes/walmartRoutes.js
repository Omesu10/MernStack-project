const express = require('express');
const walmartController  = require('../controllers/walmartController');
const router = express.Router();


router.route("/").get(walmartController.getAllWalmart).post(walmartController.createWalmart);
router.route('/:id').get(walmartController.getWalmartById).delete(walmartController.deleteWalmart);

module.exports = router;






