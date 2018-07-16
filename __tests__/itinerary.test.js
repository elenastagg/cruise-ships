const Itinerary = require('../src/itinerary.js');

let itinerary;
const port1 = jest.fn();
const port2 = jest.fn();

beforeEach(() => {
  itinerary = new Itinerary([port1, port2]);
});

describe('Itinerary', () => {
  it('can be instantiated', () => {
    expect(itinerary).toBeInstanceOf(Object);
  });
  it('has a list of ports', () => {
    expect(itinerary.ports).toEqual([port1, port2]);
  });
});
