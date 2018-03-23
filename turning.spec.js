var rover = require('./turning.js');

describe('Rover', () => {
    test('should face east when turning right from facing north', () => {
      const direction = {x:0, y:0, direction:'N'};
      const actualDirection = rover.turnRight(direction);
      
      const expectedDirection = {x:0, y:0, direction:'E'};

      expect(actualDirection).toEqual(expectedDirection);
    });

    test('should face south when turning right from facing east', () => {
      const direction = {x:0, y:0, direction:'E'};
      const actualDirection = rover.turnRight(direction);
      
      const expectedDirection = {x:0, y:0, direction:'S'};

      expect(actualDirection).toEqual(expectedDirection);
    });

    test('should face west when turning right from facing south', () => {
      const direction = {x:0, y:0, direction:'S'};
      const actualDirection = rover.turnRight(direction);
      
      const expectedDirection = {x:0, y:0, direction:'W'};

      expect(actualDirection).toEqual(expectedDirection);
    });
    
    test('should face north when turning right from facing west', () => {
      const direction = {x:0, y:0, direction:'W'};
      const actualDirection = rover.turnRight(direction);
      
      const expectedDirection = {x:0, y:0, direction:'N'};

      expect(actualDirection).toEqual(expectedDirection);
    });
    
    test('should face west when turning left from facing north', () => {
      const direction = {x:0, y:0, direction:'N'};
      const actualDirection = rover.turnLeft(direction);
      
      const expectedDirection = {x:0, y:0, direction:'W'};

      expect(actualDirection).toEqual(expectedDirection);
    });
    
    test('should face north when turning left from facing east', () => {
      const direction = {x:0, y:0, direction:'E'};
      const actualDirection = rover.turnLeft(direction);
      
      const expectedDirection = {x:0, y:0, direction:'N'};

      expect(actualDirection).toEqual(expectedDirection);
    });
    
    test('should face east when turning left from facing south', () => {
      const direction = {x:0, y:0, direction:'S'};
      const actualDirection = rover.turnLeft(direction);
      
      const expectedDirection = {x:0, y:0, direction:'E'};

      expect(actualDirection).toEqual(expectedDirection);
    });
    
    test('should face south when turning left from facing west', () => {
      const direction = {x:0, y:0, direction:'W'};
      const actualDirection = rover.turnLeft(direction);
      
      const expectedDirection = {x:0, y:0, direction:'S'};

      expect(actualDirection).toEqual(expectedDirection);
    });
});