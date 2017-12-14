function CartModel () {
  BaseModel.call(this)
  this.products = {}
}

CartModel.prototype = Object.create(BaseModel.prototype);
CartModel.prototype.constructor = CartModel;

CartModel.prototype.clear = function () {
  this.products = {}
  this.onChange()
}

CartModel.prototype.add = function (product) {
  var cartProduct = this.products[product.id] || Object.create(product)

  if (cartProduct.quantity) {
    cartProduct.quantity = cartProduct.quantity + 1
  } else {
    cartProduct.quantity = 1
  }

  this.products[product.id] = cartProduct
  this.onChange()
}

CartModel.prototype.remove = function (productId) {
  delete this.products[productId]
  this.onChange()
}

