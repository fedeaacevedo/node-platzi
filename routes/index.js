const productsRouter = require('./productRouter');

function routerApi(app){
    app.use('/productos', productsRouter);
}

module.exports = routerApi;