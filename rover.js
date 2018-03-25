const movement = require("./movement.js");
const rotation = require("./rotation.js");
const command = require("./command.js");

module.exports = {
	drive: ({x, y, direction}, commands) => {
		let destination = {x, y, direction};

		for(let i = 0; i < commands.length; i++){
			switch (commands[i]) {
			case command.forward:
				destination = movement.moveForward(destination);
				break;
			case command.backward:
				destination = movement.moveBackward(destination);
				break;
			case command.right:
				destination = rotation.turnRight(destination);
				break;
			case command.left:
				destination = rotation.turnLeft(destination);
				break;
			}
		}
		
		return destination;
	}
};