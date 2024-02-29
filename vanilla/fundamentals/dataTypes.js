// Number =>  Ints OR Floats
// BigInt =>  Ints of arbitrary length
// String =>  
// Boolean => 
// null =>   Special value that represents nothing or empty => unknown values => If you purposely dont want something known you would define it as null not undefined
// undefined =>   Standalone type => Value not assigned
// Symbol =>   Unique Identifier

// Object is the only NON-PRIMITIVE data type:
// Object =>   K/V pairs

const lucky = 44;
const notABigInt = 900719925474099163532;
const bigInt = 900719925474099122n;
const sym1 = Symbol("FOOP");
// ========================================
console.log(typeof(sym1));
console.log(typeof(lucky));
console.log(typeof(bigInt));
console.log(typeof(notABigInt));
console.log(typeof(Math));
console.log(typeof null)


// adding a number to a string returns a string value:
const numsAndStrings = () => {
  const variable = 2 + "cabbage"
  return typeof variable
}


// Iterators: 

// Map:

const tripledNumbersWithMap = (array) => {
  return array.map((number) => number * 3)
}

console.log(tripledNumbersWithMap([2, 6, 10]));

// Filter:
const filterOutOdds = (array) => {
  return array.filter((number) => number % 2 === 0);
}

console.log(filterOutOdds([3, 5, 8, 1, 10]));

// Reduce:

const multiplyAllTogether = (arr) => {
  return arr.reduce((total, currentItem) => total * currentItem);
}

console.log(multiplyAllTogether([3, 3, 3]));


// Solution:

function sumOfTripledEvens(array) {
  return array.map((number) => number % 2 === 0 ? number * 3 : number)
    .reduce((totalSum, currentNumber) => totalSum + currentNumber);
}

console.log(sumOfTripledEvens([1, 4, 5, 8, 10]));

// Correct solution (only summing the evens):
function sumOfTripledEvens2(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}

console.log(sumOfTripledEvens2([1, 4, 5, 8, 10]));
