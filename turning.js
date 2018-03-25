module.exports = {
	turnRight: ({x,y,direction}) => {
		return right[direction]({x,y,direction});
	},
    
	turnLeft: ({x,y,direction}) => {
		return left[direction]({x,y,direction});
	}
}; 

const right = {
	N: ({x,y,direction}) => (turnRightFacingNorth(x, y, direction)),
	E: ({x,y,direction}) => (turnRightFacingEast(x, y, direction)),
	S: ({x,y,direction}) => (turnRightFacingSouth(x, y, direction)),
	W: ({x,y,direction}) => (turnRightFacingWest(x, y, direction)),
};

function turnRightFacingNorth(x, y, direction) {
	return { x, y, direction:"E"};
}

function turnRightFacingEast(x, y, direction) {
	return { x, y, direction:"S"};
}

function turnRightFacingWest(x, y, direction) {
	return { x, y, direction:"N"};
}

function turnRightFacingSouth(x, y, direction) {
	return { x, y, direction:"W"};
}

const left = {
	N: ({x,y,direction}) => (turnLeftFacingNorth(x, y, direction)),
	E: ({x,y,direction}) => (turnLeftFacingEast(x, y, direction)),
	S: ({x,y,direction}) => (turnLeftFacingSouth(x, y, direction)),
	W: ({x,y,direction}) => (turnLeftFacingWest(x, y, direction)),
};

function turnLeftFacingNorth(x, y, direction) {
	return { x, y, direction:"W"};
}

function turnLeftFacingEast(x, y, direction) {
	return { x, y, direction:"N"};
}

function turnLeftFacingWest(x, y, direction) {
	return { x, y, direction:"S"};
}

function turnLeftFacingSouth(x, y, direction) {
	return { x, y, direction:"E"};
}