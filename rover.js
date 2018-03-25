const movement = require("./moving.js");
const rotation = require("./turning.js");

module.exports = {
	drive: ({x,y,direction}, commands) => {
		let destination = {x: x, y: y, direction: direction};

		for(let i = 0; i < commands.length; i++){
			if(commands[i] === "f"){
				destination = movement.moveForward(destination);
			}
			if(commands[i] === "b"){
				destination = movement.moveBackward(destination);
			}
			if(commands[i] === "r"){
				destination = rotation.turnRight(destination);
			}
			if(commands[i] === "l"){
				destination = rotation.turnLeft(destination);
			}
		}
		return destination;
	}
};