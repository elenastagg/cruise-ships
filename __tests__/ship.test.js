const Ship = require('../src/ship.js');

let ship;
let port1;
let itinerary;
let port2;

beforeEach(() => {
  port1 = {
    addShip: jest.fn(),
    removeShip: jest.fn(),
  };
  port2 = {
    addShip: jest.fn(),
  };
  itinerary = {
    ports: [port1, port2],
  };
  ship = new Ship(itinerary);
});

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });
  it('has a starting port', () => {
    expect(ship.currentPort).toBe(port1);
  });
  it('gets added to the port on instantiation', () => {
    expect(port1.addShip).toHaveBeenCalledWith(ship);
  });
});

describe('setSail', () => {
  it('returns a falsey value when calling on the setSail function', () => {
    ship.setSail();
    expect(ship.currentPort).toBeNull();
  });
  it('no longer has the ship logged at the port', () => {
    ship.setSail();
    expect(port1.removeShip).toHaveBeenCalledWith(ship);
  });
  it('sets the previous port', () => {
    ship.setSail();
    expect(ship.previousPort).toBe(port1);
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
    expect(ship.currentPort).toBe(port2);
    expect(port2.addShip).toHaveBeenCalledWith(ship);
  }); //says in walkthrough to add a stub here but it already works without??
});
