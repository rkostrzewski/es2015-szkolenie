import BaseView from './base.js'

export default class ProductListView extends BaseView {
  renderProductCard (product) {
    var id = product.id
    var name = product.name
    var price = product.price
    var description = product.description
    var imageUrl = product.imageUrl
  
    return (
      '<div class="product-list__item card product-card" data-id="' + id + '">' +
        '<div class="card-image">' +
          '<img src="' + imageUrl + '">' +
          '<button class="btn-floating halfway-fab waves-effect waves-light red btn-add-to-cart product-card__add-to-cart">' + 
            '<i class="material-icons">add_shopping_cart</i>' +
          '</button>' +
        '</div>' + 
        '<div class="card-content">' +
          '<span class="card-title activator grey-text text-darken-4">' + name + '</span>' +
          '<p>' + price + ' €</p>' +
        '</div>'+
      '</div>'
    )
  }

  renderProductList (products) {
    var self = this
    if (!(products && products.length)) {
      return
    }
  
    this.host.innerHTML = (
      '<div class="product-list">' +
        products.map(function (product) {
          return self.renderProductCard(product)
        }).join('\n') +
      '</div>'
    )
  
    for (var i = 0; i < products.length; i++) {
      var product = products[i]
  
      var button = this.host.querySelector(
        '.product-card[data-id="' + product.id + '"] .product-card__add-to-cart'
      )
  
      button.addEventListener('click', function () {
        self.addProductToCart(product)
      })
    }
  }

  renderLoadingState () {
    this.host.innerHTML = (
      '<div>' +
        'Loading...' +
      '</div>'
    )
  }

  render (products) {
    if (products && products.length) {
      this.renderProductList(products)
      return
    }
  
    this.renderLoadingState()
  }
}
