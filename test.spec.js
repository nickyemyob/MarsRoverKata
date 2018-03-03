var rover = require('./index.js');

describe('Rover', () => {
   test('should move forward when facing north', () => {
      
      const location = {x:0, y:0, direction:'N'};
      const actualLocation = rover.moveForward(location);
      
      const expectedLocation = {x:0, y:1, direction:'N'};

      expect(actualLocation).toEqual(expectedLocation);
    });
    
    test('should move forward when facing east', () => {
      const location = {x:0, y:0, direction:'E'};
      const actualLocation = rover.moveForward(location);
      
      const expectedLocation = {x:1, y:0, direction:'E'};

      expect(actualLocation).toEqual(expectedLocation);
    });
    
  });