
import { Router } from 'express';
import { checkAuth } from '../middleware/checkAuth';
import { list } from '../controllers/product';
import { get } from '../controllers/product';
import { create } from '../controllers/product';
import { remove } from '../controllers/product';
import { update } from '../controllers/product';

const router = Router();
router.get("/products", checkAuth, list);
router.get("/product/:id",get);
router.post('/product', checkAuth, create );
router.delete("/product/:id",remove );
router.put("/product/:id",update );

export default router;




