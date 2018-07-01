const {
  Port,
} = require('../src/port.js');

let port;
beforeEach(() => {
  port = new Port('Southampton');
});

describe('Port', () => {
  it('can be instantiated', () => {
    expect(port).toBeInstanceOf(Object);
  });
  it('has a name', () => {
    expect(port.name).toBe('Southampton');
  });
});
