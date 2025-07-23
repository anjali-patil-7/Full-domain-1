// 1................... Sort an array in ascending order using bubble sort
arr = [5, 3, 1, 4, 2];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log("Sorted array:", arr);

// 2................. Check if array is sorted (ascending or descending)
arr = [5, 4, 3, 2, 1];
let asc = true,
  desc = true;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) asc = false;
  if (arr[i] < arr[i + 1]) desc = false;
}
console.log(asc ? "Ascending" : desc ? "Descending" : "Not Sorted");

// 3....................... Count even and odd numbers in array
arr = [1, 2, 3, 4, 5, 6];
let even = 0,
  odd = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) even++;
  else odd++;
}
console.log("Even:", even, "Odd:", odd);

//4........................zeros to the end
let arr = [1, 0, 2, 0, 3, 0, 4, 0, 6, 6];
let end = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    let temp = arr[i];
    arr[i] = arr[end];
    arr[end] = temp;
    end++;
  }
}
console.log(arr);

///5......................zeros to the begining
let arr = [1, 0, 2, 0, 4, 0, 5, 0];
let n = arr.length;
let left = n - 1;
for (let i = n - 1; i >= 0; i--) {
  if (arr[i] !== 0) {
    let temp = arr[i];
    arr[i] = arr[left];
    arr[left] = temp;
    left--;
  }
}
console.log(arr);

//6................missing numbers
let arr = [1, 3, 4, 6, 7];
for (let i = 0; i < arr.length; i++) {
  if (arr[i + 1] !== arr[i] + 1) {
    console.log(arr[i] + 1);
  }
}

let arr = [1, 2, 4, 6, 8, 9];
let n = 10;
let miss = [];
for (let i = 0; i <= n; i++) {
  if (!arr.includes(i)) {
    miss.push(i);
  }
}
console.log(miss);


//7.......................prefix sum [1,3,6,10,15]
let arr = [1,2,3,4,5]
for(let i=1; i<arr.length; i++){
  arr[i] = arr[i] + arr[i-1]
}
console.log(arr)

//8......................Given arr and an index k, return the sum of elements from index 0 to k.
let arr = [5, 3, 2, 6, 1];
let k = 3;
let sum = 0;
for (let i = 0; i <= k; i++) {
  sum += arr[i];
}
console.log(sum);


//9...............................Compute a prefix sum array but add only even numbers.
//  Input: [1, 2, 3, 4, 5, 6]
//Output: [0, 2, 2, 6, 6, 12]
let arr = [1, 2, 3, 4, 5, 6];
let result = [];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    sum += arr[i];
  }
  result.push(sum);
}
console.log(result);


//10..................................Is Prefix Sum Equal to Target?
let arr = [1, 2, 3];
let k = 2;
let target = 6;
let sum = 0;
for (let i = 0; i <= k; i++) {
  sum += arr[i];
}
if (target === sum) {
  console.log("true");
} else {
  console.log("false");
}

//11............................Find Pair with a Given Sum
let arr = [1, 2, 3, 4, 5];
let target = 6;
let out = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      out.push([arr[i], arr[j]]);
    }
  }
}
console.log(out);


//12............................ find non repeating 1st element 
let arr = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6];
let nonrep = [];
for (let i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
    nonrep = arr[i];
    break;
  }
}
console.log(nonrep);


//13...............check the array is palindrome or not 
let arr = [1, 2, 3, 2, 1];
let ispalindrome = true;
for (let i = 0; i < arr.length / 2; i++) {
  if (arr[i] !== arr[arr.length - 1 - i]) {
    ispalindrome = false;
    break;
  }
}
console.log(ispalindrome);















