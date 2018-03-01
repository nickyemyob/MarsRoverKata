describe('Rover', () => {
    test('should move forward', () => {
      
      const location = {x:0, y:0, direction:'N'};
      const actualLocation = moveForward(location);
      
      const expectedLocation = {x:0, y:0, direction:'N'};

      expect(actualLocation).toEqual(expectedLocation);
    });
  });