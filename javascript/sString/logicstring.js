//1...................make Change the Last Letter of Each Word in a String to Uppercase

const str = "hello world from anjali";
const spl = str.split(" ");
let result = "";
for (let i = 0; i < spl.length; i++) {
  let val = spl[i];
  let lastchar = val[val.length - 1].toUpperCase();
  let out = val.slice(0, val.length - 1);
  result += out + lastchar + " ";
}
console.log(result.trim());


//2....................To capitalize the beginning letter of each word
let str = "anjali is good girl";
let spl = str.split(" ");
let result = "";
for (let i = 0; i < spl.length; i++) {
  let val = spl[i];
  let firstchar = val[0].toUpperCase();
  let out = val.slice(1);
  result += firstchar + out + " ";
}
console.log(result);


//3............................even index letter in uppercase
let str = "anjali is good girl";
let result = "";
for (let i = 0; i < str.length; i++) {
  if (i % 2 === 0) {
    result += str[i].toUpperCase();
  } else {
    result += str[i];
  }
}
console.log(result);

//4...........................alternative words in uppercase
let str = "anjali is good";
let spl = str.split(" "); // ['anjali', 'is', 'good']

let out = spl
  .map((word, index) => (index % 2 === 0 ? word.toUpperCase() : word))
  .join(" ");

console.log(out); 

///5................................alternative letters in uppercase
//Alternative elements to uppercase
let result = "anjali is good"
  .split(" ").map(word =>  word.split("").map((char, index) =>index % 2 === 0 ? char.toUpperCase() : char).join("")
  )
  .join(" ");

console.log(result); 

