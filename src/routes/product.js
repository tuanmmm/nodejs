
import { Router } from 'express';
import { checkAuth } from '../middleware/checkAuth';

const router = Router();
 const products = [{id: 1,name: "Product A",},{id: 2,name: "Product B",},];
router.get("/product", checkAuth, (req, res) => { // get all
    res.json(products);
});
router.get("/product/:id",(req , res) => { // get a product
    const result = products.find(item => item.id === +req.params.id);
    res.json(result);
});
router.post('/product', checkAuth, (req, res) => {
    products.push(req.body);
    res.json(products);
});
router.delete("/product/:id", (req, res) => { // delete product
  const newProducts = products.filter(item => item.id !== +req.params.id);
  res.json(newProducts);
});
router.put("/product/:id", (req, res) => { // update product
  const newProducts = products.map(item => item.id === +req.params.id ? req.body : item)
  res.json(newProducts);
})

export default router;