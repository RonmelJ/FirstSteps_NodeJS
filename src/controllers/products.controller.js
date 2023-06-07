const {getConnection, sql, queries} = require('../database')

const getProducts = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query(queries.getAllProducts)
        //console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500) //error interno de servidor
        res.send(error.message)
    }
};

const createProduct = async (req, res) => {
    
    const {Name, Description} = req.body
    let {Quantity} = req.body

    if (Name == null || Description == null) {
        return res.status(400).json({msg: "Bad request. Please fill all the data"}) //bad request
    }

    if (Quantity == null) Quantity = 0

    try {
        const pool = await getConnection()
        await pool.request()
            .input('Name', sql.VarChar, Name)
            .input('Description', sql.Text, Description)
            .input('Quantity', sql.Int, Quantity)
            .query(queries.createProduct)

        res.json({Name, Description, Quantity})
    } catch (error) {
        res.status(500) //error interno de servidor
        res.send(error.message)
    }
}

const getProductById = async (req, res) => {

    const {id} = req.params

    if (id == null) {
        return res.status(400).json({msg: "Bad request. Please fill ID"}) //bad request
    }

    try {
        const pool = await getConnection()
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(queries.getProduct)
        //console.log(result)
        res.json(result.recordset[0])
    } catch (error) {
        res.status(500) //error interno de servidor
        res.send(error.message)
    }
};

const deleteProductById = async (req, res) => {

    const {id} = req.params

    if (id == null) {
        return res.status(400).json({msg: "Bad request. Please fill ID"}) //bad request
    }

    try {
        const pool = await getConnection()
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query(queries.deleteProduct)
        //console.log(result)
        //res.json(result)
        res.sendStatus(204) //enviamos una respuesta vacia
    } catch (error) {
        res.status(500) //error interno de servidor
        res.send(error.message)
    }
};

const getTotalProducts = async (req, res) => {

    try {
        const pool = await getConnection()
        const result = await pool.request()
            .query(queries.getTotalProducts)
        //console.log(result)
        res.json(result.recordset[0][''])
    } catch (error) {
        res.status(500) //error interno de servidor
        res.send(error.message)
    }
};

const updateProductById = async (req, res) => {
    const {Name, Description, Quantity} = req.body
    const {id} = req.params

    if (Name == null || Description == null || Quantity == null) {
        return res.status(400).json({msg: "Bad request. Please fill all the data"}) //bad request
    }

    try {
        const pool = await getConnection()
        await pool.request()
            .input('name', sql.VarChar, Name)
            .input('description', sql.Text, Description)
            .input('quantity', sql.Int, Quantity)
            .input('id', sql.Int, id)
            .query(queries.updateProduct)

        res.json({Name, Description, Quantity})

    } catch (error) {
        res.status(500) //error interno de servidor
        res.send(error.message)
    }

}


module.exports = {
    getProducts,
    createProduct,
    getProductById,
    deleteProductById,
    getTotalProducts,
    updateProductById
}