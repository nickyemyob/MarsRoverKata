const movement = require("./movement.js");
const rotation = require("./rotation.js");
const command = require("./command.js");

module.exports = {
	drive: ({x, y, direction}, commands, obstacles) => {
		let currentLocation = {x, y, direction};
		let obstacles1 = obstacles;

		for (let i = 0; i < commands.length; i++) {
			if (commands[i] === command.forward) {
				for (let j = 0; j < obstacles1.length; j++) {
					console.log(obstacles1.length);
					console.log("x"+obstacles1[j].x);
					console.log("y"+obstacles1[j].y);
					console.log("curx"+currentLocation.x);
					console.log("cury"+currentLocation.y);
					console.log("obs"+obstacles1);
					
					let nextLocation = movement.moveForward(currentLocation);

					if (nextLocation.x === obstacles1[j].x && nextLocation.y === obstacles1[j].y) {
						return {...currentLocation, obstacleLocated: {x: obstacles1[j].x, y: obstacles1[j].y}};
					} else {
						currentLocation = nextLocation;
					}
				}
			} else if (commands[i] === command.backward) {
				currentLocation = movement.moveBackward(currentLocation);
			} else if (commands[i] === command.right) {
				currentLocation = rotation.turnRight(currentLocation);
			} else if (commands[i] === command.left) {
				currentLocation = rotation.turnLeft(currentLocation);
			}
		}

		return currentLocation;
	}
};

