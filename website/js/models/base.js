export default class BaseModel {
  constructor () {
    this.subscribers = []
  }

  onChange () {
    for (var i = 0; i < this.subscribers.length; i++) {
      var listener = this.subscribers[i]
  
      listener(this.products)
    }
  }

  listen (listener) {
    this.subscribers.push(listener)
  }

  unlisten (listener) {
    var listenerIndex = this.subscribers.indexOf(listener)
  
    if (listenerIndex > -1) {
      this.subscribers.splice(listenerIndex, 1)
    }
  }
}
