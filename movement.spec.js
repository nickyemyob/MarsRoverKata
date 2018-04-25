const rover = require("./movement.js");
const world = require("./world");

describe("Rover", () => {
	test("should move forward when facing north", () => {
		const location = {x:0, y:0, direction:"N"};
		const actualLocation = rover.moveForward(location);
      
		const expectedLocation = {x:0, y:1, direction:"N"};

		expect(actualLocation).toEqual(expectedLocation);
	});
    
	test("should move forward when facing east", () => {
		const location = {x:0, y:0, direction:"E"};
		const actualLocation = rover.moveForward(location);
      
		const expectedLocation = {x:1, y:0, direction:"E"};

		expect(actualLocation).toEqual(expectedLocation);
	});
    
	test("should move forward when facing south", () => {
		const location = {x:0, y:1, direction:"S"};
		const actualLocation = rover.moveForward(location);
      
		const expectedLocation = {x:0, y:0, direction:"S"};

		expect(actualLocation).toEqual(expectedLocation);
	});
    
	test("should move forward when facing west", () => {
		const location = {x:1, y:0, direction:"W"};
		const actualLocation = rover.moveForward(location);
      
		const expectedLocation = {x:0, y:0, direction:"W"};

		expect(actualLocation).toEqual(expectedLocation);
	});

	test("should move backward when facing north", () => {
		const location = {x:0, y:1, direction:"N"};
		const actualLocation = rover.moveBackward(location);
      
		const expectedLocation = {x:0, y:0, direction:"N"};

		expect(actualLocation).toEqual(expectedLocation);
	});
    
	test("should move backward when facing east", () => {
		const location = {x:1, y:0, direction:"E"};
		const actualLocation = rover.moveBackward(location);
      
		const expectedLocation = {x:0, y:0, direction:"E"};

		expect(actualLocation).toEqual(expectedLocation);
	});
    
	test("should move backward when facing south", () => {
		const location = {x:0, y:0, direction:"S"};
		const actualLocation = rover.moveBackward(location);
      
		const expectedLocation = {x:0, y:1, direction:"S"};

		expect(actualLocation).toEqual(expectedLocation);
	});
    
	test("should move backward when facing west", () => {
		const location = {x:0, y:0, direction:"W"};
		const actualLocation = rover.moveBackward(location);
      
		const expectedLocation = {x:1, y:0, direction:"W"};

		expect(actualLocation).toEqual(expectedLocation);
	});

	test("should move to right edge of the world when at the left edge of the world and moving forward facing west", () => {
		const location = {x:0, y:0, direction: "W"};
		const actualLocation = rover.moveForward(location);

		const expectedLocation = {x:world.rightEdge, y:0, direction: "W"};

		expect(actualLocation).toEqual(expectedLocation);
	});
	
	test("should move to left edge of the world when at the right edge of the world and moving forward facing east", () => {
		const location = {x:world.rightEdge, y:0, direction: "E"};
		const actualLocation = rover.moveForward(location);

		const expectedLocation = {x:world.leftEdge, y:0, direction: "E"};

		expect(actualLocation).toEqual(expectedLocation);
	});

	test("should move to bottom edge of the world when at the top edge of the world and moving forward facing north", () => {
		const location = {x: 0, y: world.topEdge, direction: "N"};
		const actualLocation = rover.moveForward(location);

		const expectedLocation = {x: 0, y:world.bottomEdge, direction: "N"};

		expect(actualLocation).toEqual(expectedLocation);
	});
	
	test("should move to top edge of the world when at the bottom edge of the world and moving forward facing south", () => {
		const location = {x: 0, y: world.bottomEdge, direction: "S"};
		const actualLocation = rover.moveForward(location);

		const expectedLocation = {x: 0, y: world.topEdge, direction: "S"};

		expect(actualLocation).toEqual(expectedLocation);
	});

	test("should move to right edge of the world when at the left edge of the world and moving backward facing east", () => {
		const location = {x:0, y:0, direction: "E"};
		const actualLocation = rover.moveBackward(location);

		const expectedLocation = {x:world.rightEdge, y:0, direction: "E"};

		expect(actualLocation).toEqual(expectedLocation);
	});

	test("should move to left edge of the world when at the right edge of the world and moving backward facing west", () => {
		const location = {x:world.rightEdge, y:0, direction: "W"};
		const actualLocation = rover.moveBackward(location);

		const expectedLocation = {x:world.leftEdge, y:0, direction: "W"};

		expect(actualLocation).toEqual(expectedLocation);
	});

	test("should move to bottom edge of the world when at the top edge of the world and moving backward facing south", () => {
		const location = {x: 0, y: world.topEdge, direction: "S"};
		const actualLocation = rover.moveBackward(location);

		const expectedLocation = {x: 0, y:world.bottomEdge, direction: "S"};

		expect(actualLocation).toEqual(expectedLocation);
	});

	test("should move to top edge of the world when at the bottom edge of the world and moving backward facing north", () => {
		const location = {x: 0, y: world.bottomEdge, direction: "N"};
		const actualLocation = rover.moveBackward(location);

		const expectedLocation = {x: 0, y:world.topEdge, direction: "N"};

		expect(actualLocation).toEqual(expectedLocation);
	});

});
