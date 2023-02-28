const {ApiResponse} = require('../utils/ApiEntities');
const PaymentMethod = require('../models/PaymentMethod.js');
const Invoice  =require('../models/Invoice.js')
const UserSettings = require('../models/User.js')

const addInvoice = async function(req,res,next){
    const invoiceData = req.body
    console.log(invoiceData)
    try {
        if(invoiceData.id){
            console.log('updating');
            const newInvoice = await Invoice.update(
                invoiceData,
                {where:{id:invoiceData.id}}
                );
        }else{
           const newInvoice = await Invoice.create(invoiceData);
           console.log('new');
        }
         
        const invoices = await Invoice.findAll();
        res.send(ApiResponse.success(invoices))
    } catch (error) {
        next(error)
    }
}
const allInvoices = async function(req,res,next){
    try {
        const invoices = await Invoice.findAll();
        
        res.json(ApiResponse.success(invoices));
    } catch (error) {
        next(error)
    }
}
const deleteInvoice = async function(req,res,next){
    if(!req.body.invoiceId) return res.send(ApiResponse.error("Unable to delete the invoice."))
    try {
        const deleted = await Invoice.destroy({where:{id:req.body.invoiceId}})
        if(!Boolean(deleted)) return  res.send(ApiResponse.error("Unable to delete the invoice."));
        res.send(ApiResponse.success());
    } catch (error) {
        next(error);
    }
}

const paymentMethods = async function(req,res,next){
    try {
        let allPaymentMethods = await PaymentMethod.findAll(); 
        if(allPaymentMethods .length==0) allPaymentMethods  = null
        res.send(ApiResponse.success(allPaymentMethods ))
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const addPaymentMethod = async function(req,res,next){
    const {name,account_num,description} = req.body;
    
  try {
    const newPaymentMethod = await PaymentMethod.create({name:name,account_num:account_num,description:description})
    res.send(ApiResponse.success(true)) 
  } catch (error) {
        next(error)
    }
    
}


const deletePaymentMethod = async function(req,res,next){
    const {account_num} = req.body;
    try {
        const result = await PaymentMethod.destroy({ where:{account_num:account_num}})
        res.send(ApiResponse.success(true)) 
    } catch (error) {
        console.log(error)
        next(ApiResponse.error('Failed to delete a payment method!'))
    } 
}

const saveSettings = async function(req,res,next){
const {companyName,companyAddress,currencyId} = req.body;
    try {
        
    } catch (error) {
        
    }
}
 
module.exports = {
    saveSettings,
    addInvoice,
    allInvoices,
    deleteInvoice,
    paymentMethods,
    addPaymentMethod,
    deletePaymentMethod
}