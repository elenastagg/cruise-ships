function Ship(currentPort, name) {
  this.currentPort = currentPort;
  this.name = name;
}

Ship.prototype.setSail = function setSail() {
  this.currentPort = 'She\'s on the open sea';
};

Ship.prototype.dock = function dock(port) {
  this.currentPort = port;
};

module.exports = {
  Ship,
};
