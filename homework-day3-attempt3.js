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
    return ((n >= 20 && n <=100) || (n ===400))
}
    
console.log(boundary(400))
console.log(boundary(50))
console.log(boundary(1))

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function Strivify (myString){
    if (myString === "Strive"){
        console.log(myString)
    }   else (myString)
            console.log("Strive " + myString)
}
Strivify("Hello my name is Daniel")
Strivify("Strive on Wayne! Strive on Garth!")

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7(number){
    let result3 = number % 3
    let result7 = number % 7
    if(result3 === 0 && result7 !==0){
        console.log("This is a multiple of 3")
    }   else if(result3 !==0 && result7 === 7){
            console.log("This is a multiple of 7")
    }    else if(result3 ===0 && result7 ===0){
            console.log("This number is a multiple of 3 and 7")
    }   else {
            console.log("This is neither a multiple of 3 or 7")
    }
}
console.log(check3and7(9))
console.log(check3and7(49))
console.log(check3and7(21))
console.log(check3and7(88))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

// function reverseString(){
//     myString = "Hello I am your string"
//     stringAsArray = split(myString)
//     arrayReversal = reverse(stringAsArray)
//     reversalOutput = join(arrayReversal)
   
// }

// const str = "the quick brown fox"
// const newStr = str.split("")
// console.log(newStr.reverse().join(""))

// const str = "the quick brown fox"
// function reverseString(str){
//   for (let i = str.length -1; 1 >= 0; i--){
//     newStr += str[i]
//   }
// }
// reverseString()
//INCOMPLETE

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

function capitalize(string){
    let array1 = string.split(" ")
    let newArray1 = []
    for(let x = 0; x < array1.length; x++){
        newArray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1))
    }
    return newArray1.join(" ")
  }
  console.log(capitalize("Hello I am a string"))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/