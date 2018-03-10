module.exports = {
    moveForward: ({x,y,direction}) => {
        if(direction === 'N') return {x:x, y:y+1, direction:direction};
        if(direction === 'E') return {x:x+1, y:y, direction:direction};
        if(direction === 'S') return {x:x, y:y-1, direction:direction};
        if(direction === 'W') return {x:x-1, y:y, direction:direction};
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
    }
};