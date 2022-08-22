import express from 'express';
const app = express();

import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import carRouter from './routes/carRoutes.js';

import {dirname, join} from 'path'
const __dirname = dirname(fileURLToPath(import.meta.url));

import{fileURLToPath} from 'url'
dotenv.config() // Loads environment variables from .env file

// DB connection
import { connectDB } from './db.js'
connectDB()

// Settings
app.use(bodyParser.json({extended: false}))

// Middlewares
app.use('/veiculos', carRouter);
app.use(express.static(join(__dirname, '../vehicles-app/build')))

// PORT
const port = process.env.PORT || 2000; 
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
