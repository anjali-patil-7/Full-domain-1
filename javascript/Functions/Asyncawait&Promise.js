// ✅ Basic Level

// 1.............. Promise Basics
function getNumber() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(42), 1000);
  });
}
getNumber().then(console.log); // Output: 42

// 2............................ Promise Chaining
function step1(n) {
  return Promise.resolve(n * 2);
}
function step2(n) {
  return Promise.resolve(n * 2);
}
function step3(n) {
  return Promise.resolve(n * n);
}
step1(2).then(step2).then(step3).then(console.log); // Output: 64

// 3........... Async/await version
async function processNumber() {
  const s1 = await step1(2);
  const s2 = await step2(s1);
  const s3 = await step3(s2);
  console.log(s3); // Output: 64
}
processNumber();

// 4.......................... Promise Reject
function checkPositive(n) {
  return new Promise((resolve, reject) => {
    if (n >= 0) resolve(n);
    else reject("Negative number not allowed");
  });
}
checkPositive(-5).catch(console.log); // Output: Negative number not allowed

// 5........... Async/await with try/catch
async function safeCheck(n) {
  try {
    const result = await checkPositive(n);
    console.log(result);
  } catch (err) {
    console.log("Error:", err);
  }
}
safeCheck(-5); // Output: Error: Negative number not allowed

// ✅ Intermediate Level

// 6........... Promise.all
const p1 = new Promise((res) => setTimeout(() => res(10), 1000));
const p2 = new Promise((res) => setTimeout(() => res(20), 2000));
const p3 = new Promise((res) => setTimeout(() => res(30), 3000));
Promise.all([p1, p2, p3]).then(console.log); // Output: [10, 20, 30]

// 7.................. Promise.race
const race1 = new Promise((res) => setTimeout(() => res("A"), 1000));
const race2 = new Promise((res) => setTimeout(() => res("B"), 500));
Promise.race([race1, race2]).then(console.log); // Output: B

// 8...................... Promise.allSettled
const allSet1 = Promise.resolve(10);
const allSet2 = Promise.resolve(20);
const allSet3 = Promise.reject("Failed");
Promise.allSettled([allSet1, allSet2, allSet3]).then(console.log);

// 9.............. Promise.any
const any1 = Promise.reject("Error1");
const any2 = Promise.reject("Error2");
const any3 = Promise.resolve("Success");
Promise.any([any1, any2, any3]).then(console.log); // Output: Success

// 10............ Promise.resolve
Promise.resolve(5).then((num) => console.log(num * 2)); // Output: 10

// 11........................ Fetch user data
async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();
  console.log(data); // Output: User object
}
fetchUser();

// ✅ Advanced Level

// 12...................... Nested Promises
function nestedPromise() {
  return Promise.resolve(Promise.resolve("Done"));
}
async function resolveNested() {
  const inner = await nestedPromise();
  const result = await inner;
  console.log(result); // Output: Done
}
resolveNested();

// 13........................ Retry Logic
async function retryTask(task, retries) {
  for (let i = 0; i < retries; i++) {
    try {
      const result = await task();
      return console.log("Success:", result);
    } catch (e) {
      console.log("Retrying...", i + 1);
    }
  }
  console.log("Failed after", retries, "attempts");
}
let attempt = 0;
retryTask(() => {
  return new Promise((res, rej) => {
    attempt++;
    attempt === 3 ? res("Done") : rej("Fail");
  });
}, 5);

// 14.................... Sequential vs Parallel
async function seqCalls() {
  const r1 = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const r2 = await fetch("https://jsonplaceholder.typicode.com/users/2");
  console.log("Sequential done");
}
async function parallelCalls() {
  await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/users/2"),
  ]);
  console.log("Parallel done");
}

// 15.................... Timeout with race
function timeoutPromise(p, time) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject("Timeout!"), time)
  );
  return Promise.race([p, timeout]);
}
timeoutPromise(fetch("https://jsonplaceholder.typicode.com/users/1"), 2000)
  .then((res) => res.json())
  .then(console.log)
  .catch(console.error);

// 16...................... Delay function
function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
delay(1000).then(() => console.log("Waited 1 sec"));

// 17................ Polling
async function pollUntilReady() {
  let count = 0;
  let value = null;
  while (value !== "ready") {
    count++;
    value = count === 5 ? "ready" : null;
    console.log("Checking...");
    await delay(1000);
  }
  console.log("Done Polling!");
}
pollUntilReady();

// 18.................... Mix promise + async
function normalPromise() {
  return Promise.resolve("Hello");
}
async function mixed() {
  const part1 = await normalPromise();
  console.log(part1);
  return "World";
}
mixed().then(console.log); // Output: Hello \n World

// 19..................... API retry once on fail
async function fetchWithRetry(url) {
  try {
    return await fetch(url);
  } catch {
    console.log("Retrying...");
    return fetch(url);
  }
}

// 20....................... Order processing
function validateOrder() {
  return Promise.resolve("Order validated");
}
function checkInventory() {
  return Math.random() > 0.5
    ? Promise.resolve("Inventory available")
    : Promise.reject("Out of stock");
}
function makePayment() {
  return Promise.resolve("Payment done");
}
function confirmOrder() {
  return Promise.resolve("Order confirmed");
}

// Using async/await
async function orderFlow() {
  try {
    const v = await validateOrder();
    console.log(v);
    const i = await checkInventory();
    console.log(i);
    const p = await makePayment();
    console.log(p);
    const c = await confirmOrder();
    console.log(c);
  } catch (err) {
    console.log("Failed:", err);
  }
}
orderFlow();
