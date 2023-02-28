const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db');



const User = sequelize.define("User",{
    username:{
        type:DataTypes.STRING(80)
    },
    userEmail:{
        field:'user_email',
        type:DataTypes.STRING(80)
    },
    hashPass:{
        field:'hash_pass',
        type:DataTypes.STRING(120),
    },
    userRole:{
        field:'user_role',
        type:DataTypes.STRING()
    },
    companyName:{
        field:"company_name",
        type:DataTypes.STRING
    },
    companyAddress:{
        field:"company_address",
        type:DataTypes.STRING
    },
    companyEmail:{
        field:"company_email",
        type:DataTypes.STRING(80)
    },
    companyPhone:{
        field:"company_phone",
        type:DataTypes.STRING(80)
    },
    defaultCurrency:{
        field:'default_currency',
        type:DataTypes.STRING
    } 
},{
    freezeTableName:true,
    timestamps:false
});


User.sync({force:true});