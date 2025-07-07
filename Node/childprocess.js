// 1.exec method-- is used to run a shell command and buffer the output

// const {exec} = require('child_process')

// exec('dir',(error,stdout,stderr)=>{
//     if(error){
//         console.log(`error: ${error.message}`)
//         return
//     }
//     if(stderr){
//         console.log(`stderr : ${stderr}`)
//         return
//     }
//     console.log(`stdout :${stdout}`)
// })

// 2.execFile -- method is used to run an executable file directly without a shell
// const {execFile} = require('child_process')
// const { stdout, stderr } = require('process')
// execFile('node',['--version'],(error, stdout, stderr)=>{
//     if(error){
//         console.log(`error:${error.message}`)
//         return
//     }
//     if(stderr){
//         console.error(`stderr: ${stderr}`)
//         return
//     }
//     console.log(`Node.js version :${stdout}`)
// })

// 3.spawn --
// const {spawn} = require ('child_process')
// const child = spawn('cmd.exe', ['/c', 'dir']);

// child.stdout.on('data',(data)=>{
//     console.log(`stdout:${data}`)
// })
// child.stderr.on('data',(data)=>{
//     console.log(`stderr:${data}`)
// })
// child.on('close',(code)=>{
//     console.log(`child process exited with code ${code}`)
// })

// 4.fork --
// parent process-- need to create a child.js file from there the message have to come to this page
// const {fork} = require ('child_process');
// const child = fork('child.js');
// child.send({hello : 'world'})
// child.on('message',(message)=>{
//     console.log(`message from child: ${message}`)
// })
// child.on('close',(code)=>{
//     console.log(`child process exited with code ${code }`)
// })

// /*****creating a cors middleware to enable cors */
// const express = require('express')
// const cors = require('cors')
// const app = express()
// // enable cors for all routes
// app.use(cors())
// //use any routes
// app.get('/data',(req,res)=>{
//     res.json({message:''})
// })
