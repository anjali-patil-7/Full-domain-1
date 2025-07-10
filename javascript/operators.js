// 1............spread operator
const aa = [1,2,3,4]  
const bb = [...aa,5,6]
console.log(bb)

const cc = [1,2], dd = [3,4]
const ee = [...cc,...dd]
console.log(ee)


// 2.....................rest operator
function sum(...num){
    return num.reduce((ac,cu)=>ac+cu,0)
}
console.log(sum(2,3,4,5))


let {a,...rest} = {a:1 , b:2, c:3}
console.log(a)
console.log(rest)


// 3....................array destructing
const colors = ['red','yellow','green']
const[a,b,c] = colors
console.log(a)
console.log(b)

let a = 5, b=10;
[a,b] = [b,a]
console.log(a,b)

// 4..............object destructing 
const person = {
    name:'Anjali',age:22,city:'kochi'
}
const {name, age} = person 
console.log(name)
console.log(age)

// 5...................shallow copy
const user = {
    name:"Anjali",
    address:{
        city:"kochi"
    }
}
const shallowcopy = {...user}
console.log(user)
shallowcopy.address.city = "pune"
console.log(user.address.city)
console.log(user)

// 6............deep copy
const student = {
    name:"anjali",
    subjects:["math","english"],
    rollno:199
}
const deepcopy = JSON.parse(JSON.stringify(student))
deepcopy.rollno = 200
deepcopy.subjects[1]="hindi"
console.log(student.rollno)
console.log(student.subjects[1])
console.log(student)
console.log(deepcopy)
console.log(deepcopy.rollno)

///..............call, apply, bind
function greet(age) {
    console.log(`${this.name} is ${age} years old`);
  }
  
  const user = { name: "Anjali" };
  
  greet.call(user, 24);           // Anjali is 24
  greet.apply(user, [24]);        // Anjali is 24
  const boundGreet = greet.bind(user, 24);
  boundGreet();                   // Anjali is 24


  