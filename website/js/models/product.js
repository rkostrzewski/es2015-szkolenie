var productsEndpoint = config.apiUrl + '/products'

class ProductModel extends BaseModel {
  getAllProducts (callback) {
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
}
