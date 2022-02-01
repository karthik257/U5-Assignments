// destructure to get the value 50 from this array

// [ 100, [  50, 60, 70  ]   ]

const arr = [100, [50, 60, 70]]; 

const [unwanted, [first, ...remaining]] = arr
console.log(first);