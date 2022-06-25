/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const myColor = image[sr][sc];
    if(myColor === color) return image;
    
    const queue = [[sr, sc]];
    
    const dx = [-1, 0 ,1 , 0]; // 죄상우하
    const dy = [0, -1, 0, 1];
    
    while(queue.length)  {
        const [ay, ax] = queue.shift(); // 2차원 배열이기 때문에 y, x
        if(image[ay][ax] === myColor) {
            image[ay][ax] = color;
            for(let i = 0; i < 4; i++) {
                const x = ax + dx[i];
                const y = ay + dy[i];
                if(x >=0 && x < image[0].length && y >=0 && y < image.length) {
                    queue.push([y, x])
                }
            }
        }
    }
    return image;
};