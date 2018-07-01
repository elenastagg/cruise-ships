const {
  Ship,
} = require('../src/ship.js');

const {
  Port,
} = require('../src/port.js');

let ship;
let port;
beforeEach(() => {
  port = new Port('Southampton');
  ship = new Ship(port, 'Princess Ellie');
});

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });
  it('has a starting port', () => {
    expect(ship.currentPort).toBe(port);
  });
});

describe('setSail', () => {
  it('returns a falsey value when calling on the setSail function', () => {
    ship.setSail();
    expect(ship.currentPort).toBe('She\'s on the open sea');
  });
});

describe('dock', () => {
  it('can dock at a different port', () => {
    const calais = new Port('Calais');
    ship.dock(calais);
    expect(ship.currentPort).toBe(calais);
  });
});
