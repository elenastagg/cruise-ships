function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
  this.currentPort.addShip(this);

}

Ship.prototype.setSail = function setSail() {
  const currentPortIndex = this.itinerary.ports.indexOf(this.currentPort);
  if (currentPortIndex === (this.itinerary.ports.length - 1)) {
    throw new Error('You have reached the end of your voyage');
  }
  this.previousPort = this.currentPort;
  this.currentPort = null;
  this.previousPort.removeShip(this);
};

Ship.prototype.dock = function dock() {
  const previousPortIndex = this.itinerary.ports.indexOf(this.previousPort);
  this.currentPort = this.itinerary.ports[previousPortIndex + 1];
  this.currentPort.addShip(this);
};

module.exports = Ship;

// Note many of the changes below will happen in the beforeEach function callback.
// You will need to use the matcher toHaveBeenCalledWith.

// In can set sail you will need to remove the assertion on port.ships and
// instead assert that ship.setSail calls port.removeShip (where port is a stub,
//  and removeShip is a method on that stub).
// In gets added to port on instantiation you will need to remove the assertion on
//  port.ships and instead assert that port.addShip has been called (again,
//   addShip will be a spy on a port stub).
// In can dock at a different port you will need to remove the assertion on
// calais.ships and instead assert that calais.addShip has been called with ship
// (again, addShip will be a spy on a port stub).
