/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let answer = 0;
    const m = grid.length;
    const n = grid[0].length;
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            answer = Math.max(answer, dfs(i, j, grid));
        }
    }
    
    return answer;
};

function dfs(row, col, grid) {
    if(row >= grid.length || col >= grid[0].length || row < 0 || col < 0 || grid[row][col] !== 1) {
        return 0;
    }
    
    grid[row][col] = 0;
    
    return 1 + dfs(row - 1, col, grid) + dfs(row + 1, col, grid) + 
        dfs(row, col - 1, grid) + dfs(row, col + 1, grid);
}