const Port = require('../src/port.js');

let port;
let ships;

beforeEach(() => {
  ships = ['HMS Princess Ellie', 'Queen Mary 3'];
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
    port.addShip('Voyager Of The Seas');
    expect(port.ships).toEqual(['HMS Princess Ellie', 'Queen Mary 3', 'Voyager Of The Seas']);
  });
});

describe('removeShip', () => {
  it('returns the array with the leavingShip removed', () => {
    port.removeShip('Queen Mary 3');
    expect(port.ships).toEqual(['HMS Princess Ellie']);
  });
});
