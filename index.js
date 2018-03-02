// const moveForward = (location) => {
//     if(location.direction === 'N'){
//         return Object.assign({},);
//     }
// }
module.exports = {
    moveForward: function(location){
        if(location.direction === 'N'){
            return {x:location.x, y:location.y+1, direction:location.direction};
        }
    }
}
