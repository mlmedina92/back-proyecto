import { Router } from "express";//para crear rutas fuera de server
import ProductManager from "../ProductManager.js";
const path = './files/products.json' // archivo donde se guardan los prod


const router = Router()

// router.get('/',(req,res)=>{
//     res.render('products')
// })


// Instancio la clase:
const pm = new ProductManager(path)// creamos un obj con una prop path y un arreglo vacio le paso la RUTA con la que vamos a trabajar (PATH)

//  Creo las distintas rutas:
//Ruta para buscar todos los productos:
router.get('/', async (req, res) => {//aca te llega inf por QUERY
    const prods = await pm.getProducts(req.query)//lo que este desp del ? es query. se pueden concatenar con & . http://localhost:8080/products?limit=2
    res.json({ prods })// te envia la rta con los productos dentro de un objeto 
    // res.render('products')
})


//Ruta para bucar un prod en particular:  http://localhost:8080/products/1 
router.get('/:idProduct', async (req, res) => {
    const { idProduct } = req.params // te llega la info por params, la desectruturamos para acceder a ella 
    const product = await pm.getProductById(parseInt(idProduct))
    res.json({ product })// te envia la rta con el producto dentro de un objeto 
})

// ruta para agregar produto
router.post('/', async (req, res) => {
    const resp = pm.addProduct(req.body)//hago lo mismo en un paso. la inf la pasamos por body
    if (resp) {
        res.status(200).json({ message: 'Prod agregado con exito', prod: req.body })//message y prod son props del objeto
    }else{
        // error
    }
})
/* ejemplo de body para llamar al post
{
    "title": "jabon ala plus",
    "description": "jabon ala plus",
    "code": "jabon-plus",
    "price": 1,
    "stock": 8,
    "category": "productos1",
    "thumbnails": ["imagen1.png","imagen2.png"]
  }
*/

// ruta para actualizar un produto
router.put('/', async (req, res) => {
    const resp = pm.updateProductById(req.body)//
    if (resp) {
        res.status(200).json({ message: 'Prod actualizado con exito', prod: req.body })
    }else{
        // error
    }
})
/* ejemplo de body para llamar al put
{
"id": 5,
"data": {
    "title": "jabon ala plus",
    "description": "jabon ala plus",
    "code": "jabon-plus",
    "price": 1,
    "status": false,
    "stock": 0,
    "category": "productos1",
    "thumbnails": ["imagen1.png","imagen2.png"]
  }
}
*/

// ruta para elimiar produto
router.delete('/', async (req, res) => {
    const resp = pm.removeProductById(req.body.id)//hago lo mismo en un paso
    if (resp) {
        res.status(200).json({ message: 'Prod eliminado con exito', prod: req.body })
    }else{
        // error
    }
})
/* ejemplo de body para llamar al delete
{
    "id": 5
    }
*/
export default router

