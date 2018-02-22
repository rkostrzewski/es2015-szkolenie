import BaseView from './base.js'

export default class CartView extends BaseView {
  render (products) {
    var productList = []
  
    for (var productId in products) {
      productList.push(products[productId])
    }
  
    var productsCount = (productList && productList.reduce(function (agg, p) {
      return agg + p.quantity
    }, 0)) || 0
  
    var html = (
      '<div class="cart">' +
        '<button class="btn transparent cart__toggle">' + 
          '<i class="material-icons left">shopping_cart</i>' + productsCount +
        '</button>' +
        '<div class="cart__content z-depth-5">'
    )
  
    if (productList && productList.length) {
      html += (
        '<ul class="collection">' +
          productList.map(function (product) {
            return (
              '<li class="collection-item cart-item">' +
                '<span>' + product.name + ' x' + product.quantity + '</span>' +
              '</li>'
            )
          }) 
            .join('') +
        '</ul>'
      )
    } else {
      html += 'No products added to cart'
    }
  
    html += (
        '</div>' +
      '</div>'
    )
  
    this.host.innerHTML = html
  }
}
