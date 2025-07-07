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
