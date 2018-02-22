import CartModel from './models/cart.js'
import ProductModel from './models/product.js'

import CartView from './views/cart.js'
import ProductListView from './views/product-list.js'

import CartController from './controllers/cart.js'
import ProductListController from './controllers/product-list.js'

var cartModel = new CartModel()
var productModel = new ProductModel()

var productListViewHostElement = document.getElementById('product-list-view')
var productListView = new ProductListView(productListViewHostElement)
var productListController = new ProductListController(productListView, {
  product: productModel,
  cart: cartModel
})

var cartViewHostElement = document.getElementById('cart-view')
var cartView = new CartView(cartViewHostElement)
var cartController = new CartController(cartView, cartModel)

productListController.initialize()
cartController.initialize()