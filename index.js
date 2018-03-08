module.exports = {
    moveForward: function(location){
        if(location.direction === 'N'){
            return {x:location.x, y:location.y+1, direction:location.direction};
        }
        if(location.direction === 'E'){
            return {x:location.x+1, y:location.y, direction:location.direction};
        }
        if(location.direction === 'S'){
            return {x:location.x, y:location.y-1, direction:location.direction};
        }
        if(location.direction === 'W'){
            return {x:location.x-1, y:location.y, direction:location.direction};
        }
    },

    moveBackward: function(location){
        if(location.direction === 'N'){
            return {x:location.x, y:location.y-1, direction:location.direction};
        }
        if(location.direction === 'E'){
            return {x:location.x-1, y:location.y, direction:location.direction};
        }
        if(location.direction === 'S'){
            return {x:location.x, y:location.y+1, direction:location.direction};
        }
        if(location.direction === 'W'){
            return {x:location.x+1, y:location.y, direction:location.direction};
        }
    }
};