import { Router } from "express";
import CartManager from "../CartManager.js";
const path = './files/carts.json'

const router = Router()

// router.get('/',(req,res)=>{
//     res.render('cart')
// })

const cm = new CartManager(path)

router.post('/', async (req, res) => {
    const newCart = await cm.createCart()
    res.status(200).json({ message: 'carrito creado con éxito', cart: newCart })
})

router.get('/:cid', async (req, res) => {
    const { cid } = req.params
    const cart = await cm.getCartById(parseInt(cid))
    res.status(200).json({ message: 'productos del carrito ' + cid, prods: cart.products })
})

router.post('/:cid/product/:pid', async (req, res) => {
    const { cid, pid } = req.params
    const { quantity } = req.body
    
   const cart = await cm.addToCart(parseInt(cid), parseInt(pid), parseInt(quantity))
   res.status(200).json({ message: 'carrito actualizado ' , cart: cart })
})


/*
{
    id: 0, autoincremental como los productos
    products: [
        {
            quantity: number,
            product: { objeto tipo producto }
        }
    ]
}
*/

export default router