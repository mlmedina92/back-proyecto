import express from 'express'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import cartRouter from './routes/cart.router.js'
import producstRouter from './routes/products.router.js'


const app = express()
console.log(__dirname);//me brinda el path exacto p acceder a carpeta PUBLIC

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))


// Configurar handlebars
app.engine('handlebars', handlebars.engine())//solo para handlebars. Importo hanldebars
app.set('views', __dirname + '/views') //ubicacion de carpeta vistas
app.set('view engine', 'handlebars') //cual motor de plantilla uso

// rutas

app.use('/api/products',producstRouter)
app.use('/api/cart',cartRouter)







app.listen(8080, () => {
    console.log('Escuchando al puerto 8080');
})
