/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const answer = [];
    let temp = Array.from({ length: k }, () => 0);
    
    function dfs(level, start) {
        if(level === k) {
            answer.push(temp.slice());
        } else {
            for(let i = start; i <= n; i++) {
                temp[level] = i;
                dfs(level + 1, i + 1);
            }
        }
    }
    
    dfs(0, 1);
    return answer;
};