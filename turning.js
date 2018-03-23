module.exports = {
    turnRight: ({x,y,direction}) => {
        return right[direction]({x,y,direction});
    },
    
    turnLeft: ({x,y,direction}) => {
        if(direction === 'N') return {x:x, y:y, direction:'W'};
        if(direction === 'E') return {x:x, y:y, direction:'N'};
        if(direction === 'S') return {x:x, y:y, direction:'E'};
        if(direction === 'W') return {x:x, y:y, direction:'S'};
    }
} 

const right = {
    N: ({x,y,direction}) => (rightFacingNorth(x, y, direction)),
    E: ({x,y,direction}) => (rightFacingEast(x, y, direction)),
    S: ({x,y,direction}) => (rightFacingSouth(x, y, direction)),
    W: ({x,y,direction}) => (rightFacingWest(x, y, direction)),
};

function rightFacingNorth(x, y, direction) {
    return { x, y, direction:'E'};
}

function rightFacingEast(x, y, direction) {
    return { x, y, direction:'S'};
}

function rightFacingWest(x, y, direction) {
    return { x, y, direction:'N'};
}

function rightFacingSouth(x, y, direction) {
    return { x, y, direction:'W'};
}