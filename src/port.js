function Port(name, ships) {
  this.name = name;
  this.ships = ships;
}

Port.prototype.addShip = function addShip(newShip) {
  this.ships.push(newShip);
};

Port.prototype.removeShip = function removeShip(leavingShip) {
  this.ships = this.ships.filter(ship => ship !== leavingShip);
};

module.exports = Port;
