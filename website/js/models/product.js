var productsEndpoint = config.apiUrl + '/products'

function ProductModel () {
  BaseModel.call(this)  
}

ProductModel.prototype = Object.create(BaseModel.prototype);
ProductModel.prototype.constructor = ProductModel;

ProductModel.prototype.getProduct = function (id, callback) {

}

ProductModel.prototype.getAllProducts = function (callback) {
  var req = new XMLHttpRequest();
  req.open('GET', productsEndpoint, true);
  req.onreadystatechange = function () {
    if (req.readyState == 4) {
       if(req.status == 200) {
        var products = JSON.parse(req.responseText);
        callback(null, products)
       }
       else {
        callback(new Error('Cannot GET products'))
       }
    }
  };
  req.send(null);
}
