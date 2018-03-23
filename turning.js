module.exports = {
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
} 