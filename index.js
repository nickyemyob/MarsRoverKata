module.exports = {
    moveForward: ({x,y,direction}) => {
        return forward[direction]({x,y,direction});
    },

    moveBackward: ({x,y,direction}) => {
        if(direction === 'N') return {x:x, y:y-1, direction:direction};
        if(direction === 'E') return {x:x-1, y:y, direction:direction};
        if(direction === 'S') return {x:x, y:y+1, direction:direction};
        if(direction === 'W') return {x:x+1, y:y, direction:direction};
    },
    
    turnRight: ({x,y,direction}) => {
        if(direction === 'N') return {x:x, y:y, direction:'E'};
        if(direction === 'E') return {x:x, y:y, direction:'S'};
        if(direction === 'S') return {x:x, y:y, direction:'W'};
        if(direction === 'W') return {x:x, y:y, direction:'N'};
    },
    
    turnLeft: ({x,y,direction}) => {
        if(direction === 'N') return {x:x, y:y, direction:'W'};
        if(direction === 'E') return {x:x, y:y, direction:'N'};
        if(direction === 'S') return {x:x, y:y, direction:'E'};
        if(direction === 'W') return {x:x, y:y, direction:'S'};
    } 
    //detectAtEdgeOfWorldHorizontal({gridX, currentX})
    //detectAtEdgeOfWorldVertical({gridY, currentY})
};

const forward = {
    N: ({x,y,direction}) => (forwardFacingNorth(x, y, direction)),
    E: ({x,y,direction}) => (forwardFacingEast(x, y, direction)),
    S: ({x,y,direction}) => (forwardFacingSouth(x, y, direction)),
    W: ({x,y,direction}) => (forwardFacingWest(x, y, direction)),
}

function forwardFacingWest(x, y, direction) {
    return { x: x - 1, y, direction };
}

function forwardFacingSouth(x, y, direction) {
    return { x, y: y - 1, direction };
}

function forwardFacingEast(x, y, direction) {
    return { x: x + 1, y, direction };
}

function forwardFacingNorth(x, y, direction) {
    return { x, y: y + 1, direction };
}
