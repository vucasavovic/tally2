const express = require('express');
const router =express.Router();

const userController = require('../controllers/userController.js')

router.get('/payment-methods',userController.paymentMethods)
 
router.post('/payment-method/add',userController.addPaymentMethod)

module.exports=router;
