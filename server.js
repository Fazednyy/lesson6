const express = require('express')
const app = express()


app.use(express.static('static'))
app.use(express.json())

let responseObj ={}

let basket = {}

app.post('/cart', (req, res) => {
    let product = req.body.userName
    if(basket.hasOwnProperty(product)) {
        basket[product]++
    } else {
        basket[product] = 1,2,3,4
    }

    console.log(basket)
    
    responseObj.message = `${product} added in basket`
    res.json(responseObj)
})

app.get('/korzina', (req, res) => {
    res.json(basket)
})


app.listen(7575, () => {
    console.log('Server listen on 7575 port')
})

