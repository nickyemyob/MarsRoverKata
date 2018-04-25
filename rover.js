const movement = require("./movement.js");
const rotation = require("./rotation.js");
const command = require("./command.js");

module.exports = {
	drive: ({x, y, direction}, commands, obstacles) => {
		let currentLocation = {x, y, direction};

		for (let i = 0; i < commands.length; i++) {
			switch (commands[i]) {
			case command.forward:
				let nextLocation = movement.moveForward(currentLocation);

				for(let j = 0; j < obstacles.length; j++){
					console.log(obstacles.length);
					if(currentLocation.x === obstacles[j].x && currentLocation.y === obstacles[j].y) {
						return {...nextLocation, obstacleLocated: {x: j.x, y: j.y}};
					} else {
						currentLocation = nextLocation;
					}
				}
				break;
			case command.backward:
				currentLocation = movement.moveBackward(currentLocation);
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

