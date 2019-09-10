function iterative(list: number[]) {
  for (let i = 1; i < list.length; i++) {
    const key = list[i];

    let j = i - 1;

    while (j >= 0 && list[j] > key) {
      list[j + 1] = list[j];
      j--;
    }

    list[j + 1] = key;
  }

  return list;
}

console.log('Iterative', iterative([5, 2, 4, 6, 1, 3]));

