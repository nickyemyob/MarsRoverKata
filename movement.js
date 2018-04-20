const world = require("./world");

module.exports = {
	moveForward: ({x, y, direction}) => {
		return forward[direction]({x, y, direction});
	},

	moveBackward: ({x, y, direction}) => {
		return backward[direction]({x, y, direction});
	}
};

const forward = {
	N: ({x, y, direction}) => (forwardFacingNorth(x, y, direction)),
	E: ({x, y, direction}) => (forwardFacingEast(x, y, direction)),
	S: ({x, y, direction}) => (forwardFacingSouth(x, y, direction)),
	W: ({x, y, direction}) => (forwardFacingWest(x, y, direction)),
};

function forwardFacingNorth(x, y, direction) {
	const movedNorth = y + 1;

	if(movedNorth > world.topEdge){
		return {x, y: world.bottomEdge, direction};
	}
	return {x, y: movedNorth, direction};
}

function forwardFacingEast(x, y, direction) {
	let movedEast = x + 1;
		
	if(movedEast > world.rightEdge){
		return {x: world.leftEdge, y, direction};
	}

	return {x: movedEast, y, direction};
}

function forwardFacingWest(x, y, direction) {
	let movedWest = x - 1;

	if(movedWest < world.leftEdge){
		return {x: world.rightEdge, y, direction};
	}

	return {x: movedWest, y, direction};
}

function forwardFacingSouth(x, y, direction) {
	return {x, y:y - 1, direction};
}


const backward = {
	N: ({x, y, direction}) => (backwardFacingNorth(x, y, direction)),
	E: ({x, y, direction}) => (backwardFacingEast(x, y, direction)),
	S: ({x, y, direction}) => (backwardFacingSouth(x, y, direction)),
	W: ({x, y, direction}) => (backwardFacingWest(x, y, direction)),
};

function backwardFacingNorth(x, y, direction) {
	return {x, y:y - 1, direction};
}

function backwardFacingEast(x, y, direction) {
	return {x:x - 1, y, direction};
}

function backwardFacingWest(x, y, direction) {
	return {x:x + 1, y, direction};
}

function backwardFacingSouth(x, y, direction) {
	return {x, y:y + 1, direction};
}