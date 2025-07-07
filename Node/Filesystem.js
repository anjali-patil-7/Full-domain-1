///****File systems */
//1................write the file

// const fs = require("fs")
// const data = "Hello Anjali"

// fs.writeFile('output.txt',data,(err)=>{
//     if(err){
//         console.log('error is occured',err)
//     }else{
//         console.log("the file is written",data)
//     }
// })

//2................ read the file
// fs.readFile('output.txt','utf-8',(err)=>{
//     if(err){
//         console.log("error is occured")
//     }else{
//         console.log("file is readed",data)
//     }
// })

//3................... delete the file
// fs.unlink('output.txt',(err)=>{
//     if(err){
//         console.log("error is occured")
//     }else{
//         console.log("the file is deleted ")
//     }
// })

//4................append the file - adding new data content to existsing file otherwise it create new file with the content give
// let newdata = "i am goaling to become a great software developer"

// fs.appendFile('output.txt',newdata,(err)=>{
//     if(err){
//         console.log("error occured")
//     }else{
//         console.log("the new data is updated")
//     }
// })

//..............if file doesnt excists
//  const filePath ='myData.txt'
//   const dataToAppend = "this is new data to append\n"
//  fs.appendFile(filePath,dataToAppend,(err)=>{
//     if(err){
//         console.log("error")
//     }else{
//         console.log("data is appended successfully")
//     }
//  })

/////////////////////////////STREAMS FILE SYSTEMS
//1............. write file
// const fs = require('fs')
// const writestream = fs.createWriteStream('output.txt')
// writestream.write("this is streams data")
// writestream.end()
// writestream.on('finish',(err)=>{
//    if(err){
//     console.log('error');
//    }else{
//       console.log('data is written');

//    }

// })

//2...............read stream
// const ReadStream = fs.createReadStream('output.txt',{encoding:'utf-8'})

// ReadStream.on('data',(chunck)=>{
//     console.log('data  is  ',chunck)
// })

// ReadStream.on('end',()=>{
// console.log('finished reading.......')
// })





//.....................eventEmitter
// const res = require("events")
// const eventemitter = new res()

// eventemitter.on('sayhello',()=>{
//     console.log("hello world")
// })
// eventemitter.emit('sayhello')