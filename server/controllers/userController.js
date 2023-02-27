const {ApiResponse} = require('../utils/ApiEntities');
const PaymentMethod = require('../models/PaymentMethod.js');


const paymentMethods = async function(req,res,next){
    try {
        const paymentMethods = await PaymentMethod.findAll(); 
        res.send(ApiResponse.success(paymentMethods))
    } catch (error) {
        console.log(error);
        next(ApiResponse.error('Error while fetching payment methods!'))
    }
   
}

const addPaymentMethod = async function(req,res,next){
    const {name,accountNum,description} = req.body;
    const paymentMethod = await PaymentMethod.create({name:name,account_num:accountNum,description:description})
}



module.exports = {
    paymentMethods,
    addPaymentMethod
}