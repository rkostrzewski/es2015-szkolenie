class CartController {
  constructor(view, model) {
    this.cart = model
    this.view = view
    this.onCartChange = this.onCartChange.bind(this)
  }

  initialize () {
    this.view.render(this.cart.products)
    this.cart.listen(this.onCartChange)
  }

  onCartChange (products) {
    this.view.render(products)
  }
}
