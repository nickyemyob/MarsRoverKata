const rover = require("./rover.js");

describe("Rover", () => {
	test("should be at correct destination from starting point without any obstacles", () => {

		const initialPosition = {x:0, y:0, direction:"N"};
		const commands = ["f","f","l","b","r","f"];
		const roverResult = rover.drive(initialPosition, commands);
    
		const expectedRoverResult = {x:1, y:3, direction:"N"};

		expect(roverResult).toEqual(expectedRoverResult);
	});

	test("should be at correct destination from starting point and move around the world without any obstacles", () => {

		const initialPosition = {x:0, y:0, direction:"S"};
		const commands = ["f","r","f","r","f","r","f"];
		const roverResult = rover.drive(initialPosition, commands);

		const expectedRoverResult = {x:0, y:0, direction:"E"};

		expect(roverResult).toEqual(expectedRoverResult);
	});
});