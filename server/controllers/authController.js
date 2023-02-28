const {ApiResponse} = require('../utils/ApiEntities');
const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');

const registerUser = async function(req,res,next){
    const {username,password,email} = req.body
 
    try {
        const hashPass = await bcrypt.hash(password,10);
        const user = await User.create({username:username,email:email,hashPass:hashPass})

        ///generate web token

        res.json(ApiResponse.success())
    } catch (error) {
        next(error)
    }
 
    ////hash password

    ///save user

    ///if duplicate entry error
}
const loginUser = async function(req,res,next){
    const {password,email} = req.body
 
     
}
module.exports = {
    registerUser,
    loginUser
}