const { readFileSync, writeFileSync } = require("fs");
// reading the file using the fs module, we are only getting two methods from that module
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.text",
  `here is the result: ${first}, ${second}`
);

console.log("done with this task");
console.log("starting the next one");
