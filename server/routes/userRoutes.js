const express = require('express');
const router =express.Router();

const userController = require('../controllers/userController.js')
const authController = require('../controllers/authController.js');
const currencyController = require('../controllers/currencyController.js');

// Currency
router.get('/currency/all',currencyController.allCurrency)

// Payment Methods
router.get('/payment-methods',userController.paymentMethods)
router.post('/payment-method/add',userController.addPaymentMethod)
router.post('/payment-method/delete',userController.deletePaymentMethod)

// User settings
router.post('/settings/save',userController.saveSettings)

// Invoice
router.get('/invoice/all',userController.allInvoices)
router.post('/invoice/add',userController.addInvoice)
router.post('/invoice/delete',userController.deleteInvoice)

// User Auth
router.post('/register',authController.registerUser)
 
module.exports=router;
