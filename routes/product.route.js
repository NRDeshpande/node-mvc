const express = require('express');
const router = express.Router();

const product_controller = require("../controllers/product.controller");

router.get('/test', product_controller.test);

router.post('/create', product_controller.create);

router.get('/:id', product_controller.get_product);

router.post('/:id/update', product_controller.update_product);

module.exports = router;