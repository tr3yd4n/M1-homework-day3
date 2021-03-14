//EXERCISE 1
//Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.

function areaSum(height, width){
    return height * width
}
console.log(areaSum(100, 15))

//EXERCISE 2
//Write a function "crazySum" which receives two integers. It should return the sum of those two values, 
//but if the two values are the same then it should return their sum multiplied by 3.

function crazySum(value1, value2){
    if (value1 === value2){
    return (value1 + value2) * 3
    }   
    else{
    return value1 + value2 
    }
} 
console.log(crazySum(1, 1))
console.log(crazySum(1, 2))

//EXERCISE 3
//Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
//It should return triple their absolute difference if the given number is greater than 19.

function crazyDiff(x){
    if (x <= 19){
        return Math.abs(19 - x)
    }
    else{
        return Math.abs(x-19) * 3
    }
}
console.log(crazyDiff(-1))
console.log(crazyDiff(20))

//EXERCISE 4
//Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.

function boundary(n){
    return ((n >= 20 && n <=100) || (n ===400))
}
console.log(boundary(400))
console.log(boundary(50))
console.log(boundary(1))
console.log(boundary(111))

//EXERCISE 5
//Write a function "strivify" which accepts a string.
//It should add the word "Strive" in front of the given string, 
//but if the given string already begins with "Strive", then it should just return the original string.

function strivify(myString){
    if (myString.startsWith("Strive")){
        return myString
        }else{
        return "Strive " + myString
        }
}
console.log(strivify("hello i am a string"))
console.log(strivify("Strive string strive"))

//EXERCISE 6
//Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
//HINT: Module Operator

function check3and7(n) {
    if (n >= 0 && (n % 3 === 0 || n % 7 === 0)) {
      return true;
    } else {
      return false;
    }
}
console.log(check3and7(9))
console.log(check3and7(49))
console.log(check3and7(21))                 
console.log(check3and7(88))

//EXERCISE 7
//Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).

function reverseString(str) {
    return str.split("").reverse("").join("");
}
console.log(reverseString("Strive"));

//EXERCISE 8
//Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.

function upperFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(upperFirst("strivers"));

//EXERCISE 9
//Write a function "cutString" to create a new string without the first and last character of a given string.

function cutString(str) {
    return str.slice(1, str.length - 1);
}
console.log(cutString("hello"));

//EXERCISE 10
//Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.

function giveMeRandom(n) {
    const arr = [];
    for (let i = 0; i <= n; i++) {
      arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}
console.log(giveMeRandom(5));