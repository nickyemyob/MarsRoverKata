module.exports = {
	turnRight: ({x, y, direction}) => {
		return right[direction]({x, y});
	},
    
	turnLeft: ({x, y, direction}) => {
		return left[direction]({x, y});
	}
}; 

const right = {
	N: ({x, y}) => (turnRightFacingNorth(x, y)),
	E: ({x, y}) => (turnRightFacingEast(x, y)),
	S: ({x, y}) => (turnRightFacingSouth(x, y)),
	W: ({x, y}) => (turnRightFacingWest(x, y)),
};

function turnRightFacingNorth(x, y) {
	return {x, y, direction:"E"};
}

function turnRightFacingEast(x, y) {
	return {x, y, direction:"S"};
}

function turnRightFacingWest(x, y) {
	return {x, y, direction:"N"};
}

function turnRightFacingSouth(x, y) {
	return {x, y, direction:"W"};
}

const left = {
	N: ({x, y}) => (turnLeftFacingNorth(x, y)),
	E: ({x, y}) => (turnLeftFacingEast(x, y)),
	S: ({x, y}) => (turnLeftFacingSouth(x, y)),
	W: ({x, y}) => (turnLeftFacingWest(x, y)),
};

function turnLeftFacingNorth(x, y) {
	return {x, y, direction:"W"};
}

function turnLeftFacingEast(x, y) {
	return {x, y, direction:"N"};
}

function turnLeftFacingWest(x, y) {
	return {x, y, direction:"S"};
}

function turnLeftFacingSouth(x, y) {
	return {x, y, direction:"E"};
}