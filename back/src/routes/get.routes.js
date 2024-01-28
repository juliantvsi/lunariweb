import { Router } from 'express';
import { getAllProducts, getTopRatedProducts, getBestSellersProducts, getProductsByCategory, searchProducts, validateUser } from '../controllers/get.controllers.js'

const router = Router();

router.get('/validate/:token', validateUser);
router.get('/search', searchProducts);
router.get('/top-rated', getTopRatedProducts);
router.get('/bestsellers', getBestSellersProducts);
router.get('/products/:category', getProductsByCategory);
router.get('/products', getAllProducts);

export default router;