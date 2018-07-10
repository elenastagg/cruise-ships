const Itinerary = require('../src/itinerary.js');

const Port = require('../src/port.js');

let itinerary;
const southampton = new Port('Southampton');
const calais = new Port('Calais');

beforeEach(() => {
  itinerary = new Itinerary([southampton, calais]);
});

describe('Itinerary', () => {
  it('can be instantiated', () => {
    expect(itinerary).toBeInstanceOf(Object);
  });
  it('has a list of ports', () => {
    expect(itinerary.ports).toEqual([southampton, calais]);
  });
});
