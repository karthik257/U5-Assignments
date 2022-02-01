// destructure the first value and second value of the array

// [ 100, 200, 500, 600 ]

const arr = [100, 200, 500, 600];

const [first, second, ...remaining] = arr
console.log(first,second);