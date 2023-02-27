const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db');
 

const PaymentMethod = sequelize.define('payment_method',{
    user_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(64),
        defaultValue:'Undefined',
        unique:false
    },
    account_num:{
        type:DataTypes.STRING(128),
        unique:true
    },
    description:{   
        type:DataTypes.STRING,
        defaultValue:'Payment method'
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }

},{
    freezeTableName:true,
    timestamps:false
});
 

PaymentMethod.sync({force:false}).then(()=>{}).catch((err)=>console.log(err));
 

module.exports = PaymentMethod