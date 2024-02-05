import express from 'express';
import dontenv from 'dotenv';
import connectDB from './database.js';
import homeRoute from './src/routes/home.route.js';
import getRoutes from './src/routes/get.routes.js';
import postRoutes from './src/routes/post.routes.js';
import cors from 'cors';

dontenv.config();
const PORT = process.env.PORT

const app = express();
connectDB();

//Midlewares
app.use(express.json());

//Cors
app.use(cors({
  origin: ['https://localhost:5173', 'http://localhost:4000'],
  optionsSuccessStatus: 200
}))

//Routes
app.use(homeRoute);
app.use(getRoutes); 
app.use(postRoutes);

app.listen(PORT || 5173, ()=> console.log('server mount'))