right의 시작점을 left + 1로 굳이 할 필요가 없었다.
애초에 정렬이 되어있는 배열이기 때문에 right를 numbers.length - 1부터 시작하게 하고,
left + right 가 target보다 작으면 큰 숫자가 있는 right를 내려주면 되고, 그 반대의 경우는 left를 올리면 됐다.
이런 생각이 아직 잘 안된다.