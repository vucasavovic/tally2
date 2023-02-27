require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const app = express();

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

app.listen(PORT,()=> console.log(`App started on: http://localhost:${PORT}`));

