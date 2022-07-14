/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
    const m = grid.length;
    const n = grid[0].length;
    const queue = [];
    let fresh = 0;
    let minutes = 0;
    
    grid.forEach((row,i) => {
        row.forEach((item, j) => {
            if(item === 2) { queue.push([i, j]); }
            if(item === 1) { fresh++; }
        });
    });
    
    while(queue.length) {
        const length = queue.length;
        for(let i = 0; i < length; i++) {
            const [x, y] = queue.shift();
            if(x - 1 >= 0 && grid[x - 1][y] === 1) { // 상
                grid[x - 1][y] = 2;
                fresh--;
                queue.push([x - 1, y]);
            }
            if(x + 1 < m && grid[x + 1][y] === 1) { // 하
                grid[x + 1][y] = 2;
                fresh--;
                queue.push([x + 1,y]);
            }
            if(y -1 >= 0 && grid[x][y - 1] === 1) { // 좌
                grid[x][y-1] = 2;
                fresh--;
                queue.push([x, y - 1]);
            }
            if(y + 1 < n && grid[x][y + 1] === 1) { // 우
                grid[x][y + 1] = 2;
                fresh--;
                queue.push([x, y + 1]);
            }
        }
        if(queue.length) { minutes ++; } // 새롭게 썩은 토마토가 없다면 시간을 증가시킬 필요가 없음
    }
    
    return fresh === 0 ? minutes : -1;
};