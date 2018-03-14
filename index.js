const forward = {
    N: ({x,y,direction}) => ({x, y:y+1, direction}),
    E: ({x,y,direction}) => ({x:x+1, y, direction}),
    S: ({x,y,direction}) => ({x, y:y-1, direction}),
    W: ({x,y,direction}) => ({x:x-1, y, direction}),
}

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