/* globals window */
function Controller() {
  this.initialiseSea();
  this.viewPort = document.querySelector('#viewport');
}

Controller.prototype.initialiseSea = function initialiseSea() {
  const backgrounds = [
    'images/water0.png',
    'images/water1.png',
  ];
  let backgroundIndex = 0;
  setInterval(() => {
    this.viewPort.style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
    backgroundIndex += 1;
  }, 1000);
};

Controller.prototype.renderPorts = function renderPorts(ports) {
  const portsElement = document.querySelector('#ports');
  portsElement.style.width = '0px';

  ports.forEach((port, index) => {
    const newPortElement = document.createElement('div');
    newPortElement.dataset.portIndex = index;
    newPortElement.className = 'port';
    portsElement.appendChild(newPortElement);
    const width = parseInt(portsElement.style.width, 10);
    portsElement.style.width = `${width + 256}px`;
  });
};

Controller.prototype.renderShip = function renderShip(ship) {

}

(function exportController() {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
}());

// Array.prototype.forEach = function forEach(callback) {
//   for (let i = 0; i < this.length; i += 1) {
//     callback(this[index], index, this);
//   }
// };

// Array.prototype.map = function map(callback) {
//   const result = [];
//   for (let i = 0; i < this.length; i += 1) {
//     result.push(callback(this[index], index, this));
//   }

//   return result;
// };

// Array.prototype.filter = function filter(callback) {
//   const result = [];
//   for (let i = 0; i < this.length; i += 1) {
//     if (callback(this[index], index, this)) {
//       result.push(this[index]);
//     }
//   }

//   return result;
// };
