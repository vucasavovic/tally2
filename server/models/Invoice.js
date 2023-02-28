const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db');
 


const Invoice = sequelize.define('Invoice',{
    recepientName:{
        field:"recepient_name",
        type:DataTypes.STRING(65)
    },
    recepientAddress:{
        field:"recepient_address",
        type:DataTypes.STRING(65)
    },
    createdDate:{
        field:'created_date',
        type:DataTypes.DATE,
        defaultValue:Sequelize.fn('NOW')
    },
    dueDate:{
        field:'due_date',
        type:DataTypes.DATE
    },
    serviceTitle:{
        field:'service_title',
        type:DataTypes.STRING
    },
    serviceDescription:{    
        field:'service_description',
        type:DataTypes.STRING(380)
    },
    servicePrice:{  
        field:'service_price',
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    paymentMethodId:{
        field:'payment_method_id',
        type:DataTypes.INTEGER
    },
    paymentInstructions:{
        field:'payment_instructions',
        type:DataTypes.STRING
    }
},{
    freezeTableName:true,
    timestamps:false
});

Invoice.sync({force:false});


module.exports = Invoice