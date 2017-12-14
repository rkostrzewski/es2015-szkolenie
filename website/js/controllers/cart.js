function CartController (view, model) {
  this.cart = model
  this.view = view
  this.onCartChange = this.onCartChange.bind(this)
}

CartController.prototype.initialize = function () {
  this.view.render(this.cart.products)
  this.cart.listen(this.onCartChange)
}

CartController.prototype.onCartChange = function (products) {
  this.view.render(products)
}