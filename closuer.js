//1...................closuer
function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  inner();
}
outer();

//2.....incrementing number
