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
    
    test('should move forward when facing south', () => {
      const location = {x:0, y:0, direction:'S'};
      const actualLocation = rover.moveForward(location);
      
      const expectedLocation = {x:0, y:-1, direction:'S'};

      expect(actualLocation).toEqual(expectedLocation);
    });
    
    test('should move forward when facing west', () => {
      const location = {x:0, y:0, direction:'W'};
      const actualLocation = rover.moveForward(location);
      
      const expectedLocation = {x:-1, y:0, direction:'W'};

      expect(actualLocation).toEqual(expectedLocation);
    });

    test('should move backward when facing north', () => {
      
      const location = {x:0, y:0, direction:'N'};
      const actualLocation = rover.moveBackward(location);
      
      const expectedLocation = {x:0, y:-1, direction:'N'};

      expect(actualLocation).toEqual(expectedLocation);
    });
    
    test('should move backward when facing east', () => {
      const location = {x:0, y:0, direction:'E'};
      const actualLocation = rover.moveBackward(location);
      
      const expectedLocation = {x:-1, y:0, direction:'E'};

      expect(actualLocation).toEqual(expectedLocation);
    });
    
    test('should move backward when facing south', () => {
      const location = {x:0, y:0, direction:'S'};
      const actualLocation = rover.moveBackward(location);
      
      const expectedLocation = {x:0, y:1, direction:'S'};

      expect(actualLocation).toEqual(expectedLocation);
    });
    
    test('should move backward when facing west', () => {
      const location = {x:0, y:0, direction:'W'};
      const actualLocation = rover.moveBackward(location);
      
      const expectedLocation = {x:1, y:0, direction:'W'};

      expect(actualLocation).toEqual(expectedLocation);
    });

    // test('should turn right and face east when facing east', () => {
    //   const direction = {x:0, y:0, direction:'N'};
    //   const actualDirection = rover.turnRight(direction);
      
    //   const expectedDirection = {x:0, y:0, direction:'E'};

    //   expect(actualDirection).toEqual(expectedDirection);
    // });
  });