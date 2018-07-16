const Port = require('../src/port.js');

let port;
let ship1;
let ship2;
let ships;

beforeEach(() => {
  ship1 = jest.fn();
  ship2 = jest.fn();
  ships = [ship1, ship2];
  port = new Port('Southampton', ships);
});

describe('Port', () => {
  it('can be instantiated', () => {
    expect(port).toBeInstanceOf(Object);
  });
  it('has a name', () => {
    expect(port.name).toBe('Southampton');
  });
});

describe('addShip', () => {
  it('returns the array with the newShip added', () => {
    const ship3 = jest.fn();
    port.addShip(ship3);
    expect(port.ships).toEqual([ship1, ship2, ship3]);
  });
});

describe('removeShip', () => {
  it('returns the array with the leavingShip removed', () => {
    port.removeShip(ship2);
    expect(port.ships).toEqual([ship1]);
  });
});
