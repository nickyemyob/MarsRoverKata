module.exports = {
    moveForward: function({x,y,direction}){
        if(direction === 'N'){
            return {x:x, y:y+1, direction:direction};
        }
        if(direction === 'E'){
            return {x:x+1, y:y, direction:direction};
        }
        if(direction === 'S'){
            return {x:x, y:y-1, direction:direction};
        }
        if(direction === 'W'){
            return {x:x-1, y:y, direction:direction};
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

    // turnRight: function(location){
    //     if(location.direction === 'N'){
    //         return {x:location.x, y:location.y+1, direction:location.direction};
    //     }
    //     if(location.direction === 'E'){
    //         return {x:location.x+1, y:location.y, direction:location.direction};
    //     }
    //     if(location.direction === 'S'){
    //         return {x:location.x, y:location.y-1, direction:location.direction};
    //     }
    //     if(location.direction === 'W'){
    //         return {x:location.x-1, y:location.y, direction:location.direction};
    //     }
    //}
};