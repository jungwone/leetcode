/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {

    const m = mat.length;
    const n = mat[0].length;
    const queue = [];
    
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++) {
            if(mat[i][j] === 0) queue.push([i, j]);
            else mat[i][j] = Infinity; // 거리를 구하기 전이므로 무한으로 설정
        }
    }
    
    const direction = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    
    while(queue.length) {
        const [x, y] = queue.shift();
        // visited[x,y] = true;
        direction.forEach(([ax, ay]) => {
            ax += x;
            ay += y;
            
            if(ax < 0 || ax >= m || ay < 0 || ay >= n) return;
            // if(visited[ax][ay]) return;
            if(mat[ax][ay] < mat[x][y] + 1) return;
            
            mat[ax][ay] = mat[x][y] + 1;
            queue.push([ax,ay])
        });
    }
    
    return mat;
};