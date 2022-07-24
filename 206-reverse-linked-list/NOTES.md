아 이거 생각해내기가 왜 이렇게 어렵냐 난이도 EASY 라는데 ㅡㅡ
그래도 꾸준히 한다. 포기하지 말아야지  <br/>
​
순회 방식 콘솔 이런 느낌
reverse 1: [5]
head ;  [4,5]
head :  [4]
reverse 2: [5,4]
========
reverse 1: [5,4]
head ;  [3,4] => head가 4에서 끊기는 이유는 head.next = null 을 해주기 때문
head :  [3]
reverse 2: [5,4,3]
========
reverse 1: [5,4,3]
head ;  [2,3]
head :  [2]
reverse 2: [5,4,3,2]
========
reverse 1: [5,4,3,2]
head ;  [1,2]
head :  [1]
reverse 2: [5,4,3,2,1]
========
​