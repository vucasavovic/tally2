const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./db');
 

const Currency= sequelize.define('currency',{
  
    name:{
        type:DataTypes.STRING(64),
        allowNull:false,
        unique:true
    },
    symbol:{
        type:DataTypes.STRING(4),
        allowNull:false,
        unique:true
    },
    country:{   
        type:DataTypes.STRING,
    } 

},{
    freezeTableName:true,
    timestamps:false
});
 

Currency.sync({force:true}).then(()=>{

  
Currency.create({name:'Dollar',symbol:'$',country:'USA'})
Currency.create({name:'Euro',symbol:'e',country:'USA'})
Currency.create({name:'RsDinar',symbol:'rsd',country:'R.Serbia'})

}).catch((err)=>console.log(err));


module.exports = Currency

