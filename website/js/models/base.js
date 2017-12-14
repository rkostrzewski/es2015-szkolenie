function BaseModel () {
  this.subscribers = []
}

BaseModel.prototype.onChange = function () {
  for (var i = 0; i < this.subscribers.length; i++) {
    var listener = this.subscribers[i]

    listener(this.products)
  }
}

BaseModel.prototype.listen = function (listener) {
  this.subscribers.push(listener)
}

BaseModel.prototype.unlisten = function (listener) {
  var listenerIndex = this.subscribers.indexOf(listener)

  if (listenerIndex > -1) {
    this.subscribers.splice(listenerIndex, 1)
  }
}