const assert = require('assert')
const mongoose = require('mongoose')
const Product = require('../models/product')

describe('Saving tests',function(){

    const smartphone0 = new Product({
        name: 'Galaxy S20',
        price: 150000
    })

    it('Saves a product', function(done){
        Product.collection.insertOne(smartphone0, function(err){
            assert(err === null)
            done()
        })
    })

})
    /*before(function(done){
        mongoose.connection.collections.products.drop(function(){
            mongoose.connection.collections.orders.drop(function(){
                done()
            })
        })
    })*/