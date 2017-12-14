function BaseView(host) {
  if (!host) {
    throw new Error('Invalid host dom node provided to ' + this.constructor.name)
  }
  this.host = host
}
