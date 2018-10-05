const Product = require("../models/product.model");

exports.test = function(request, response) {
    response.send("Product Contoller, Test Action");
};

exports.create = function(request, response) {
    let product = new Product({
        name: request.body.name,
        price: request.body.price
    });

    product.save(function(error) {
        if(error) {
            console.log("Error: "+ error);
            return next(error);
        }

        response.send('Added');
    })
};

exports.get_product = function(request, response) {
    Product.findById(request.params.id, function(error, product) {
        if(error) return next(error);
        response.send(product);
    })
};

exports.update_product = function(request, response, next) {
    Product.findByIdAndUpdate(request.params.id, {$set: request.body}, function(error, product) {
        if(error) return next(error);
        response.send("Updated" + product);
    });
};