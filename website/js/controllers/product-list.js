export default class ProductListController {
  constructor (view, models) {
    this.cartModel = models.cart
    this.productModel = models.product
    this.productListView = view
    view.addProductToCart = this.addProductToCart.bind(this)
  }

  initialize () {
    this.loadProducts()
  }

  loadProducts () {
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

  addProductToCart (product) {
    this.cartModel.add(product)
  }
}
