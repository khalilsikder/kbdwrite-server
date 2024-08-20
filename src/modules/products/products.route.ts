import express from 'express';
import { productControllers } from './product.controller';


const router = express.Router();

router.post('/',productControllers.createProduct);
router.get('/:slug',productControllers.getProductBySlug);
router.get('/',productControllers.getAllProducts);
// router.post('/checkout',paymentController)

export const productRoutes = router;