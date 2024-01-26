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
