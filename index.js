import express from 'express';
const app = express();

import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import carRouter from './routes/carRoutes.js';

dotenv.config() // Loads environment variables from .env file

// DB connection
import { connectDB } from './db.js'
connectDB()

// Settings
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Middlewares
app.use('/veiculos', carRouter);

// PORT
const port = process.env.PORT || 2000; 
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
