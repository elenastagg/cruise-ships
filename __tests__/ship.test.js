const Ship = require('../src/ship.js');

let ship;
beforeEach(() => {
  ship = new Ship('Southampton', 'Princess Ellie');//
});

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    expect(ship.startingPort).toBe('Southampton');
  });
});

describe('setSail', () => {
  it('returns a falsey value when calling on the setSail function', () => {
    expect(ship.setSail()).toBeFalsy();
  });
});
