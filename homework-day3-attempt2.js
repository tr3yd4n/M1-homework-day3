/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

function areaSum(height, width){
    return height * width
}
let result = areaSum(11, 12)
console.log(result)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, 
but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(value1, value2){
        if (value1 === value2){
        return value1 * value2 * 3
    }
        else {
        return value1 * value2 
    }
} 
console.log(crazySum(10, 10))
console.log(crazySum(5, 10))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(x){
    if (x <= 19){
        return (19 - x)
    }
    else{
        return (x-19) * 3
    }
}
console.log(crazyDiff(10))
console.log(crazyDiff(20))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

function boundary(n){
    if (n <= 20 > 100){
        return true
    }
    if (n === 400){
        return true
    }
    else{
        return false
    }   
}
console.log(boundary(50))
console.log(boundary(10))
console.log(boundary(101))
console.log(boundary(400))

/* THIS RUNS BUT THE FIRST IF IS INCORRECT */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

let myString = "Strive for more!"
let myStringArray = myString.split(1)
let myStringFirstWord = myStringArray[0]

function strivify(myString){
    if (myStringFirstWord === "Strive"){
        return(myString)
    }   
    else{
        myString.unshift("Strive")    
    }
} 

console.log(strivify("Strive"))

/* NOT FINISHED THIS DOES NOT WORK */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7(posNum){

}