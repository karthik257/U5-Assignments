// destructure to get the value 2,3 into a new array

// [  1, {
//      arr: [ 1, 2, 3 ]
//    }
//  ]

const array = [
  1,
  {
    arr: [1, 2, 3],
  },
]; 

const [unwanted, { arr:[first, ...newArr] }] = array
console.log(newArr);