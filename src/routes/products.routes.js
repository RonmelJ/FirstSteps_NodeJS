// 6 rutas para est API
const {Router} = require('express')
const {
    getProducts, 
    createProduct, 
    getProductById,
    deleteProductById,
    getTotalProducts,
    updateProductById
} = require('../controllers/products.controller')

const router = Router()

// definir rutas
router.get('/products', getProducts)

router.post('/products', createProduct)

router.get('/products/count', getTotalProducts)

router.get('/products/:id', getProductById)

router.delete('/products/:id', deleteProductById)

router.put('/products/:id', updateProductById)

//exportar
module.exports = router