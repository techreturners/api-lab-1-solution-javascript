const express = require('express');

const {coffeeController, teaController} = require('../controllers');

const router = new express.Router();

router.get('/coffee', coffeeController.getCoffee);
router.get('/coffeelover', coffeeController.coffeeLover);
router.get('/tea', teaController.getTea);

module.exports = router;
