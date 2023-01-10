const express = require('express');
const faker = require('faker');

const router = express.Router();





router.get('/', (req, res) => {
    const productos = [];
    const {size} = req.query;
    const limit  =  size || 10;
    for (let index = 0; index < limit; index++) {
        productos.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl(),
        })
        
    }


    res.json(productos)
})



router.get('/users', (req, res) => {
    const {limit, offset} = req.query;
    if(limit && offset){
        res.json({
            limit, 
            offset
        })

    }else {
        res.send('no hay parametros')
    }
});

router.get('/filter', (req, res) => {
  res.send("Soy un filtro")  
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.json([
        
        {
            id,
            name: 'producto2',
            price: 1000
        }
    ])
})


module.exports = router;
