function ProductListController (view, models) {
  this.cartModel = models.cart
  this.productModel = models.product
  this.productListView = view
  view.addProductToCart = this.addProductToCart.bind(this)
}

ProductListController.prototype.initialize = function () {
  this.loadProducts()
}

ProductListController.prototype.loadProducts = function () {
  var self = this
  this.productListView.render()
  this.productModel.getAllProducts(function (err, products) {
    if (err) {
      console.error(err)
      return 
    }

    self.productListView.render(products)
  })
}

ProductListController.prototype.addProductToCart = function (product) {
  this.cartModel.add(product)
}