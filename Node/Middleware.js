// const express = require("express")
// const app = express()
// const userrouter = express.Router()
// const port = 3000;

// ....................application level middleware
// app.use((req,res,next)=>{
//     console.log(` ${req.method} ${req.url} at ${new Date().toDateString()}`)
//     next()
// })
// app.get('/',(req,res)=>{
//     res.send("hello world")
// })

//.....................router level middleware
// userrouter.use((req,res,next)=>{
//     console.log(`this is router middleware`)
//     next()
// })
// userrouter.get('/:id',(req,res)=>{
//     res.send(`userid is ${req.params.id}`)
// })
// app.use('/user',userrouter)

///.....................error handling middleware
// app.get('/error',(req,res,next)=>{
//     const err = new Error('something went wrong')
//     err.status = 500;
//     next(err)
// })
// app.use((err,req,res,next)=>{
//     console.log(`${err.message}`)
//     res.status(err.status || 500).json({error:err.message})
// })

// app.listen(port,()=>{
//     console.log(`server is running on ${port}`)
// })



// ✅ Blocks all GET requests to /user route
// ✅ Logs all requests (date & URL) to a log.txt file
// ✅ Allows other request types (e.g., POST) to proceed
// ✅ Sends proper HTTP status and message

const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// Middleware to handle /user route
app.use("/user", (req, res, next) => {
  // Block all GET requests
  if (req.method === "GET") {
    return res.status(403).send("GET requests are blocked for this route.");
  }

  // Log request to log.txt
  const log = `${new Date().toISOString()} ${req.method} ${req.url}\n`;
  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.error("Failed to write log:", err);
    }
  });

  // Continue to the next middleware or route handler
  next();
});

// Example POST route (to test non-GET requests)
app.post("/user", (req, res) => {
  res.send("POST request received at /user");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
