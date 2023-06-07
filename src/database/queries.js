const queries = {
    getAllProducts: 'SELECT * FROM NodejsAPI.dbo.Products',
    createProduct: 'INSERT INTO Products(Name, Description, Quantity) VALUES (@Name, @Description, @Quantity)',
    getProduct: 'SELECT * FROM NodejsAPI.dbo.Products WHERE Id = @id',
    deleteProduct: 'DELETE FROM NodejsAPI.dbo.Products WHERE Id = @id',
    getTotalProducts: 'SELECT COUNT(*) FROM NodejsAPI.dbo.Products',
    updateProduct: 'UPDATE NodejsAPI.dbo.Products SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @id'
}

module.exports = {queries}
