import Product from "../models/product.js";
import User from '../models/users.js';
import base64 from 'base64-url';

export const getAllProducts = async (req, res)=>{
  const products = await Product.find();
  try {
    res.json(products)
  } catch (error) {
    console.error((error))
  }
}

export const getTopRatedProducts = async (req, res)=>{
  const result = await Product.find().sort({ "rating.rate": -1 }).limit(8);
  try {
    res.json(result)
  } catch (error) {
    console.error((error))
  }
}

export const getBestSellersProducts = async (req, res)=>{
  const result = await Product.find().sort({ "rating.count": -1 }).limit(8);
  try {
    res.json(result)
  } catch (error) {
    console.error((error))
  }
}

export const getProductsByCategory = async (req, res)=>{
  const categoryByParams = req.params.category
  const result = await Product.find({"category": categoryByParams})
  try {
    res.json(result)
  } catch (error) {
    console.error((error))
  }
}

export const searchProducts = async (req, res) => {
  const { query } = req.query;
  if (!query) {
    return res.status(400).json({ error: 'Falta el criterio de búsqueda' });
  }
  try {
    const searchResult = await Product.find({ $text: { $search: query } }).sort({ score: { $meta: "textScore" } });
    res.json(searchResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en la búsqueda' });
  }
};

export const validateUser = async (req, res) =>{
  try {
    const decodedToken = base64.decode(req.params.token);

    const user = await User.findOne({ token: decodedToken });

    if (!user) {
    return res.status(404);
    }

    user.validated = true;
    await user.save();

    res.status(200)
  } catch (error) {
    res.status(500);
  }
};


