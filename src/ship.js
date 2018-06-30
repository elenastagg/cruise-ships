function Ship(startingPort, name) {
  this.startingPort = startingPort;
  this.name = name;
}

Ship.prototype.setSail = function setSail() {
  this.startingPort = null;
};

module.exports = Ship;