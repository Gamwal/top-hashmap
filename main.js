import HashMap from "./hashMap.mjs";

const test = new HashMap();

// console.log(test.hash("apple"));
// console.log(test.hash("banana"));
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
// console.log(test.get("frog"));
console.log(test.buckets);
console.log(test.length());
test.remove("kite");
console.log(test.buckets);
console.log(test.length());
test.remove("jacket");
console.log(test.buckets);
console.log(test.length());
