
const express = require ('express');
const routerApi = require('./routes')

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Bievenido')
})


app.get('/nueva-ruta', (req, res) => {
    res.send('Nueva ruta')
})

app.listen(port, () => {
    console.log('Puerto en uso', port)
})

routerApi(app);