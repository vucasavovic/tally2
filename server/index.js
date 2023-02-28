require('dotenv').config();
const express = require('express');
const cors = require('cors');
const errorHandler = require('./controllers/errorHandler');
const PORT = process.env.PORT || 3000;
const app = express();



const Currency = require('./models/Currency.js');
 

app.use(express.json());
app.use(cors({
    origin:[process.env.CLIENT_BASE_URL],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials:true
}))

//routes
const  userRoutes = require('./routes/userRoutes.js')
app.use('/user',userRoutes)


app.use(errorHandler)

app.listen(PORT,()=> console.log(`App started on: http://localhost:${PORT}`));

