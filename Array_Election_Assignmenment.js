// 1. Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

// Sample Cases
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500

let firstValue = function getFirstValue(newArray ){
    // newArray = prompt("Enter your New Array : ")
    let storage = []
    storage = newArray.pop(newArray[0])
    return storage
}




// 2. Pair Management
// Given two arguments, return an array which contains these two arguments.

// Sample Cases
// makePair(1, 2) ➞ [1, 2]
// makePair(51, 21) ➞ [51, 21]
// makePair(512124, 215) ➞ [512124, 215]

function makePair( arg1, arg2){
    arg1 = prompt("input the first argument:" )
    arg2 = prompt("input the second argument:" )
    NewArray = [arg1,arg2]
    return NewArray 
}

// 3. Reverse an Array
// Write a function to reverse an array.

// Sample Case
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []


 let ArrayReversal = function reverseArray(arg){ 
    arg =[]
    let size = 4
    for (let i = 0 ; i < size ; i++){
        arg[i] =  prompt("input the array argument:" + (i +1))
    }
     NewArray = arg.reverse()
     return NewArray
}

// 4. Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// Sample Case
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

function ArrayToString(arrayArg){
    arrayArg=[]
   let  size = 5
for (let i = 0 ; i < size ; i++){
        arrayArg[i] =  prompt("input the array argument:" + (i +1))
    }
     return NewArray = arrayArg.split(',').join().toString()
}



// 5. Array Indexing
// Given an index and an array, return the value of the array with the given index.

// Sample Cases
// valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6
// valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5
// valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4

function ArrayIndex(index,arry){
    arry = []
    let n = 0
    index = arry[n]
    size = 5
    for (let i = 0 ; i < size ; i++){
        arry[i] =  prompt("input the array argument:" + (i +1))
    }
    n = prompt("Enter the index :")
    n =  Number(n , 10)
    return NewNumber = arry[n] 
}


// 6. Find the Index 
// Create a function that finds the index of a given item.

// Sample cases
// search([1, 5, 3], 5) ➞ 1
// search([9, 8, 3], 3) ➞ 2
// search([1, 2, 3], 4) ➞ -1



function indexFinder(arry, index){

    arry = []
    size = 6
    for (let i = 0 ; i < size ; i++){
        arry[i] =  prompt("input the array argument:" + (i +1))
    }
    n = prompt("Enter the index :")
    n = Number(n , 10)
    let item 
    return  arry[n] = item 

}

// 7. Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

// Sample cases
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false

function Check( arry, item){
     arry =[]
     size = 6
     for (let i = 0 ; i < size ; i++){
        arry[i] =  prompt("input the array argument:" + (i +1))
    }
   item = prompt("Enter the item :")
   //item = Number(item,10)
   let result = arry.includes(item) ?  true : false
   return result 

}


// 8. Invert an Array
// Create a function that takes an array of numbers arr and returns an inverted array.

// Sample case
// invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]
// invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]
// invertArray([]) ➞ []




// 9. Skip the Drinks with Too Much Sugar
// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// cola
// fanta

// Sample case
// skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ ["water"]
// skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []
// skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]

// 10. Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// Sample cases
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]
// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]
// filterArray(["Nothing", "here"]) ➞ []

// 11. The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.

// Sample cases
// forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false
// forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true
// forbiddenLetter("m", []) ➞ true


// 12. Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

// Sample cases
// cleanUpArray(["8"]) ➞ [[8], []]
// cleanUpArray(["11"]) ➞ [[], [11]]
// cleanUpArray(["7", "4", "8"]) ➞ [[4, 8], [7]]
// cleanUpArray(["9", "4", "5", "8"]) ➞ [[4, 8], [9, 5]]


// 13. String Pairs
// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

// Sample cases
// stringPairs("mubashir") ➞ ["mu", "ba", "sh", "ir"]
// stringPairs("edabit") ➞ ["ed", "ab", "it"]
// stringPairs("airforces") ➞ ["ai", "rf", "or", "ce", "s*"]


// 14. Word Endings
// Create a function that adds a string ending to each member in an array.

// Sample cases
// addEnding(["clever", "meek", "hurried", "nice"], "ly") 
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// addEnding(["new", "pander", "scoop"], "er")
// ➞ ["newer", "panderer", "scooper"]
// addEnding(["bend", "sharpen", "mean"], "ing")
// ➞ ["bending", "sharpening", "meaning"]

// 15. Spelling it Out
// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// Sample cases
// spelling("bee") ➞ ["b", "be", "bee"]
// spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
// spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eage"]