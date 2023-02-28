const {ApiResponse} = require('../utils/ApiEntities');
const Currency = require('../models/Currency.js');



const allCurrency = async function(req,res,next){

    try {
        const currency = await Currency.findAll();
        res.json(ApiResponse.success(currency));
    } catch (error) {
        next(error)
    }
}

 
module.exports={
    allCurrency 
}