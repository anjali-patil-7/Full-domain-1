// 1-------------------Repeat a String n Times
function repeat(str, times){
let out = ""
for(let i=0; i<times; i++){
out +=str
}
return out
}
console.log(repeat("anjali",4))

// 2-------------------factorial of number

function fact(n){
let a = 1
for(let i=1; i<=n; i++){
a *= i
}
return a
}
console.log(fact(5))

// 3----------------check palindrome in case of string(”malayalam”) 

function check(str){
let rev = ""
for(let i=str.length-1; i>=0; i--){
rev += str[i]
}
if(str === rev){
return true
}else{
return false
}
}
console.log(check ("malayalam"))

// 4--------------check palindrome in case of numbers[1,2,3,2,1]

function check(num){
let ispalindrome = false
for(let i=0; i<num.length/2; i++){
if(num[i] === num[num.length-1-i]){
ispalindrome = true
}
}
return ispalindrome
}
console.log(check([1,2,3,2,1]))

// 5--------------count vowels in the string

function countvowels(str){
let count = 0
let vowels = "aeoiu"
for(let i=0; i<str.length; i++){
for(let j=0; j<vowels.length; j++){
if(str[i] === vowels[j]){
count++
}
}
}
return count
}
console.log(countvowels("apple"))

// 6--------------longest word in the sentence                                                                  
function longestword(str){
let spl = str.split(" ")
let largest = ""
for(let i=0; i<spl.length; i++){
if(spl[i].length > largest.length ){                                                                        
largest = spl[i]
}
}
return largest
}
console.log(longestword("i love programing"))

// 7-------------largest number in the array

let arr = [10,20,1000,300,50000]
let large = arr[0]
for(let i=1; i<arr.length; i++){
if(arr[i] > large){
large = arr[i]
}
}
console.log(large)

// 8----------------unique elements 

function unique(ele){
let uni = []
for(let i=0; i<ele.length; i++){
for(let j=i+1; j<ele.length; j++){
if(ele[i] !== ele[j] && !uni.includes(ele[i])){
uni.push(ele[i])
}
}
}
return uni
}
console.log(unique([1,1,2,3,4,4,5,6,7,8,9]))

// 9--------------isprime check

function isprime(num){
if(num<2){
return false
}
for(let i=2; i<num; i++){
if(num%i === 0){
return false
}
}
return true
}
console.log(isprime(7))

// 10---------------------flatten array 

function flattenarr(arr){
return arr.flat(Infinity)
}
console.log(flattenarr([1, [2, [3, 4]], 5]))

// 11-------------sum of digits (1234)

function sumofdig(num){
let sum = 0
let out = num.toString()
for(let i=0; i<out.length; i++){
sum += parseInt(out[i])
}
return sum
}
console.log(sumofdig(1234))

// 12----------------element frequency(count of elements in the array)

function elementfrq(arr){
let frq = {}
for(let i=0; i<arr.length; i++){
let elem = arr[i]

 if(frq[elem]){
     frq[elem] = frq[elem] + 1
 }else{
     frq[elem] = 1
 }

}
return frq
}
console.log(elementfrq(["a", "b", "a", "c", "b", "a"]))

// 13-------sort the array of string by length [”apple”,”pea”,”bannana”]

function sortbylength(arr){
let newarr = []
for(let i=0; i<arr.length; i++){
newarr =  arr.sort((a,b)=>a.length-b.length)
}
return newarr
}
console.log(sortbylength(["apple","pie","banana"]))

