/* globals Controller, Port, Itinerary */

const controller = new Controller();

const ports = [
  new Port('New Orleans'),
  new Port('Baltimore'),
  new Port('New York City'),
  new Port('Portland'),
];

const itinerary = new Itinerary(ports);
controller.renderPorts(itinerary.ports);
const ship = new Ship(itinerary);


// In the renderShip method, find the index of the ship's currentPort
// inside of its itinerary. Use document.querySelector with an attribute
// selector to find a .port element that has a portIndex data attribute
// which corresponds to this index.
// Prior to appending to the DOM, set the top and left CSS properties of
// your ship element to the offsetTop and offsetLeft values for the port
// element.
// Add or subtract from your offsetLeft and/or offsetTop values to
// position your ship so it's centered directly underneath the port.
