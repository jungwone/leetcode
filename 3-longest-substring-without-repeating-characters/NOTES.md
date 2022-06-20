음 .. 첫번째로 시도했던 방법. `brute force`
​
```javascript
var lengthOfLongestSubstring = function(s) {
let obj = {};
let answer = 0;
for(let i = 0; i < s.length; i++) {
for(let j = i; j < s.length; j++) {
if(check(i, j, s)) answer = Math.max(answer, j - i + 1);
}
}
return answer;
};
​
function check(start, end, str) {
let obj = {};
for(let i = start; i <= end; i++) {
const a = str[i];
if(!obj[a]) {
obj[a] = 1;
} else {
obj[a]++;
}
if(obj[a] > 1) return false;
}
return true;
}
```
시간초과가 떠서 통과하지 못했다 ㅋㅋㅋㅋ
​
​
문제 분류가 슬라이딩 윈도우니까 역시 주제에 맞게 풀어야 하는건가 생각이 들었다.
알고리즘을 워낙 자주 안풀고 내가 약한 부분이다 보니, 혼자 힘으로 생각해서 문제를 해결하는게 마음처럼 잘 안된다.
​
Map 자료구조를 사용해도 될 것 같은데 그냥 오브젝트를 사용했다.
​
right를 이동시키면서, obj에서 내가 현재 가리키고 있는 자리의 문자가 몇번 나왔는지 확인한다.
한번도 나오지 않았다면 right를 계속 증가시키면서 substring의 길이를 늘린다.
​
그러다가 obj[character]의 개수가 1보다 커지게 되면 현재 left~right까지 겹치는 문자가 있다는 뜻이 된다. 그때 left를 증가시키면서 right까지 끌어오는 식으로 진행하면 최대 길이를 찾을 수 있다.
​