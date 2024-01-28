import User from '../models/users.js'; // Modelo de usuario
import bcrypt from 'bcrypt'; // Para proteger contraseñas
import jwt from 'jsonwebtoken'; //Para crear tokens
import base64 from 'base64-url'; //Codificar urls 
import { sendEmail } from '../mailer/mailer.js';

export async function registerUser(req, res) {
  try {
    const { name, email, password, validated } = req.body;

    // Generar un hash seguro de la contraseña
    const saltRounds = 10; // Número de rondas de hashing 
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Crear un token único para el usuario
    const token = jwt.sign({ email }, 'secret_token', { expiresIn: '1d' });

    // Codifica la URL para evitar problemas con caracteres especiales
    const encodedToken = base64.encode(token);

    // Crea el enlace de validación
    const validationLink = `http://localhost:5173/validate/${encodedToken}`;

    // Crea un nuevo usuario con la contraseña hasheada y el token
    const newUser = new User({ name, email, password: hashedPassword, token, validated });

    // Guarda el nuevo usuario en la base de datos
    await newUser.save();

    // Envía el correo de validación con el enlace
    sendEmail(email, validationLink);

    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(500).json({error: error});
  }
}

export const getUsersRegistered = async (req, res)=>{
  const user = {
    email: req.body.email,
    password: req.body.password
  }

  try {
    const haveUser = await User.findOne({ email: user.email });

    if(!haveUser){
      return res.status(404).json({message: "user not found"})
    }

    const passwordMatch = bcrypt.compare(user.password, haveUser.password);

    if(passwordMatch && haveUser.validated === false){
      return res.status(403).json({message: "user not validated"})
    }
    if(passwordMatch && haveUser.validated === true){
      return res.status(200).json({message: "todo ok", user: { email: haveUser.email, name: haveUser.name } })
    }
  } catch (error) {
    console.error('Error al autenticar usuario:', error);
    res.status(500).json({ error: 'Error al autenticar usuario' });
  }
}
