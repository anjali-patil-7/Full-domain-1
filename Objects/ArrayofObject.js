// 1-----------------get all the user  name (map)

const users = [
{ id: 1, name: 'Anjali' },
{ id: 2, name: 'Rahul' },
{ id: 3, name: 'Sneha' }
];

function getusername(users){
let out = users.map(val=>[val.name](val.name))
return out
}
console.log(getusername(users))  

// 2----------------find user by id   (find)

const users = [
{ id: 1, name: 'Anjali' },
{ id: 2, name: 'Rahul' }
];
function finduserbyid(users, id){
let out = users.find(val=>[val.id](val.id) === id)
return out
}
console.log(finduserbyid(users,2))

// 3-------------get products above 500

const products = [
{ id: 1, name: 'Bag', price: 450 },
{ id: 2, name: 'Watch', price: 1200 },
{ id: 3, name: 'Shoes', price: 700 }
];
function bla(products){
let out = products.filter(val=>val.price>500)
return out
}
console.log(bla(products))

// 4-------------add new same property in object

const products = [
{ id: 1, name: 'Pen' },
{ id: 2, name: 'Pencil' }
];
function bla(products){
return products.map(val=>{
return{...val,discound:true,rating:5}
})
}
console.log(bla(products))

// 5--------------add different properties

const products = [
{ id: 1, name: 'Pen' },
{ id: 2, name: 'Pencil' }
];
function bla(products){
let dis = [10,5]
let out = products.map((val, index)=>{
return {...val, discount:dis[index]}
})
return out
}
console.log(bla(products))

// 6-----------count the active user

const users = [
{ id: 1, name: 'Anjali', isActive: true },
{ id: 2, name: 'Ravi', isActive: false },
{ id: 3, name: 'Sneha', isActive: true }
];
function bla(users){
let out = users.filter(val=>val.isActive === true).length
return out
}
console.log(bla(users))