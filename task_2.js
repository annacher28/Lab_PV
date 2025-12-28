// 18
// В массиве A[N] занесены натуральные числа. Сформировать массив из чисел, больших заданного K.
const A = [10, 5, 8, 3, 15, 7, 20];
const K = 8;
const result = A.filter(num => num > K);

console.log(result); 
