
//  1. Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

// 2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

// 3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

// 4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

// 5. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

// 6. Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.

// 7. Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

// 8. Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.

// 9. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

//1

const maxOfTwoNumbers = (x,y) => {
    if (x >=y) {
        return x;
    } else {
        return y;
    }
}
console.log(maxOfTwoNumbers(8,7));

//2

const maxOfThreeNumbers = (x,y,z) => {
    if ( x >= y && x >= z) {
        return x;
    }else if (y >=z) {
        return y;
    }else {
        return z;
    }
}
console.log(maxOfThreeNumbers(8,7,9))

//3

const isCharAVowel = (x) => {
    if (x === "a" ){
        return "true"
    }
    if (x === "e" ){
        return "true"
    }
    if (x ==="i"){
        return "true"
    }
    if (x ==="o"){
        return "true"
    }
    if (x ==="u"){
        return "true"
    }else{
        return "false"
    }
}
console.log(isCharAVowel("u"))

//4

const array = [3,5,9]
let total = 0

const sumarray = (ray) => {
    for (i = 0; i <= (array.length - 1); i++){

        total = total + array[i]
    }
}
sumarray(array)
console.log(total)

//5

const ray5 = [2,4,5]
let product = 1

const multiplyArray = (aray) => {
    for (i = 0; i <= (ray5.length -1); i++){
        product = product * ray5[i]
    }
}
multiplyArray(ray5)
console.log(product)

//6 ??? ask in class

const numArgs = () => {
    console.log(arguments.length)
}
numArgs()

//7

let words = "this is a string"
const reverses = () => {
  return words.split('').reverse().join('');
}
console.log(reverses(words))

//8 

const stray =["wow", "super", "awesome", "amazing"]
let longString = 0

 const longestStringInArray =() => {

for (i = 0; i < stray.length; i++) {
  if (stray[i].length > longString){
     longString = stray[i].length
  }
  }
 }
 longestStringInArray(stray)
 console.log(longString)

//9

const rayray = ["wow", "super", "dad", "kill", "animal"]

const stringsLongerThan = ( [] , y ) => {
    for (i = 0; i < rayray.length; i++){
        if (y >= rayray[i].length){
            rayray.splice(i,1);
            
        }
    }
}
stringsLongerThan(rayray, 3)
console.log(rayray)
