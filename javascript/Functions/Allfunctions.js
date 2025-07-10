//.............Higher order function 
function greet(name) {
    return `Hello, ${name}`;
  }
  
  function processUser(name, callback) {
    return callback(name);
  }
  
  console.log(processUser("Anjali", greet)); // Hello, Anjali

  