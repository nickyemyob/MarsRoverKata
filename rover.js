const movement = require("./movement.js");
const rotation = require("./rotation.js");
const command = require("./command.js");

module.exports = {
	drive: ({x, y, direction}, commands, obstacles) => {
		let currentLocation = {x, y, direction};

		for (let i = 0; i < commands.length; i++) {
			if (commands[i] === command.forward) {
				for (let j = 0; j < obstacles.length; j++) {
					let nextLocation = movement.moveForward(currentLocation);
					console.log(obstacles.length);
					console.log("x"+obstacles[j].x);
					console.log("y"+obstacles[j].y);
					console.log("curx"+currentLocation.x);
					console.log("cury"+currentLocation.y);
					if (currentLocation.x === obstacles[j].x && currentLocation.y === obstacles[j].y) {
						return {...nextLocation, obstacleLocated: {x: obstacles[j].x, y: obstacles[j].y}};
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

