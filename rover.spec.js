const rover = require("./rover.js");

describe("Rover", () => {
	test("should be at correct destination from starting point without any obstacles", () => {

		const initialPosition = {x:0, y:0, direction:"N"};
		const commands = ["f","f","l","b","r","f"];
		const roverResult = rover.drive(initialPosition, commands);
    
		const expectedRoverResult = {x:1, y:3, direction:"N"};

		expect(roverResult).toEqual(expectedRoverResult);
	});
});