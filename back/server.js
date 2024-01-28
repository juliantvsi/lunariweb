import express from 'express';
import dontenv from 'dotenv';
import connectDB from './database.js';
import homeRoute from './src/routes/home.route.js';
import getRoutes from './src/routes/get.routes.js';
import postRoutes from './src/routes/post.routes.js';
import cors from 'cors';

dontenv.config();
const PORT = process.env.PORT;

const app = express();
connectDB();

//Midlewares
app.use(express.json());

//Cors
app.use(cors({
  origin: 'http://localhost:5173', // Reemplaza con tu dominio de frontend
  optionsSuccessStatus: 200 // Opcional: devuelve el código de estado 200 para las solicitudes OPTIONS
}));

//Routes
app.use(homeRoute);
app.use(getRoutes); 
app.use(postRoutes);

app.listen(PORT, ()=> console.log('server mount'))