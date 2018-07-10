function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
  // this.currentPort.addShip(this);

}

Ship.prototype.setSail = function setSail() {
  const currentPortIndex = this.itinerary.ports.indexOf(this.currentPort);
  if (currentPortIndex === (this.itinerary.ports.length - 1)) {
    throw new Error('You have reached the end of your voyage');
  }
  this.previousPort = this.currentPort;
  this.currentPort = null;
};

Ship.prototype.dock = function dock() {
  const previousPortIndex = this.itinerary.ports.indexOf(this.previousPort);
  this.currentPort = this.itinerary.ports[previousPortIndex + 1];
};

module.exports = Ship;
