class CartModel extends BaseModel {
  constructor () {
    super()
    this.products = {}
  }

  clear () {
    this.products = {}
    this.onChange()
  }

  add (product) {
    var cartProduct = this.products[product.id] || Object.create(product)
  
    if (cartProduct.quantity) {
      cartProduct.quantity = cartProduct.quantity + 1
    } else {
      cartProduct.quantity = 1
    }
  
    this.products[product.id] = cartProduct
    this.onChange()
  }

  remove (productId) {
    delete this.products[productId]
    this.onChange()
  }
}
