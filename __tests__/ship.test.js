const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js');

let ship;
let southampton;
let itinerary;
let calais;
let ships;

beforeEach(() => {
  ships = ['HMS Princess Ellie', 'Queen Mary 3'];
  southampton = new Port('Southampton', ships);
  calais = new Port('Calais', ships);
  itinerary = new Itinerary([southampton, calais]);
  ship = new Ship(itinerary);
});

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });
  it('has a starting port', () => {
    expect(ship.currentPort).toBe(southampton);
  });
  it('gets added to the port on instantiation', () => {
    expect(calais.ships).toContain(ship);
  });
});

describe('setSail', () => {
  it('returns a falsey value when calling on the setSail function', () => {
    ship.setSail();
    expect(ship.currentPort).toBeNull();
  });
  it('no longer has the ship logged at the port', () => {
    ship.setSail();
    expect(southampton.ships).not.toContain(ship);
  });
  it('sets the previous port', () => {
    ship.setSail();
    expect(ship.previousPort).toBe(southampton);
  });
  it('can\'t sail further than its itinerary', () => {
    for (let portIndex = 0; portIndex < (itinerary.ports.length - 1); portIndex += 1) {
      ship.setSail();
      ship.dock();
    }
    expect(() => ship.setSail()).toThrowError('You have reached the end of your voyage');
  });
});

describe('dock', () => {
  it('can dock at a different port', () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });
});
