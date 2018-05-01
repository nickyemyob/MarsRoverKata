const movement = require("./movement.js");
const rotation = require("./rotation.js");
const command = require("./command.js");

module.exports = {
	drive: ({x, y, direction}, commands, obstacles) => {
		let currentLocation = {x, y, direction};

		for (let i = 0; i < commands.length; i++) {
			let nextLocation = null;
			
			switch (commands[i]){
			case command.forward:
				nextLocation = movement.moveForward(currentLocation);

				for (let j = 0; j < obstacles.length; j++) {
					if (nextLocation.x === obstacles[j].x && nextLocation.y === obstacles[j].y) {
						nextLocation = {...currentLocation, obstacleLocated: {x: obstacles[j].x, y: obstacles[j].y}};
						break;
					}
				}
				currentLocation = nextLocation;
				break;

			case command.backward:
				nextLocation = movement.moveBackward(currentLocation);

				for (let j = 0; j < obstacles.length; j++) {
					if (nextLocation.x === obstacles[j].x && nextLocation.y === obstacles[j].y) {
						nextLocation = {...currentLocation, obstacleLocated: {x: obstacles[j].x, y: obstacles[j].y}};
						break;
					}
				}
				currentLocation = nextLocation;
				break;

			case command.right:
				currentLocation = rotation.turnRight(currentLocation);
				break;
			case command.left:
				currentLocation = rotation.turnLeft(currentLocation);
				break;
			}
		}

		return currentLocation;
	}
};

