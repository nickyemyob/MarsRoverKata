const movement = require("./movement.js");
const rotation = require("./rotation.js");
const command = require("./command.js");

module.exports = {
	drive: ({x, y, direction}, commands) => {
		let initialLocation = {x, y, direction};
		return navigate(commands, initialLocation);
	}
};

function navigate(commands, location) {
	let currentLocation = location;

	for (let i = 0; i < commands.length; i++) {
		switch (commands[i]) {
		case command.forward:
			currentLocation = movement.moveForward(currentLocation);
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
