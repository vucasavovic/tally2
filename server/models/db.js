require('dotenv').config();
const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect:'mysql'
})

sequelize.authenticate().then(()=>{
    console.log("Connection succesfull!")
}).catch(err=>console.log(err))


module.exports = sequelize;
