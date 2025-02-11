import HashMap from "./hashMap.js";

const test = new HashMap();
test.loadFactor = 0.75;

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')
test.set('tiger', 'orange')
test.set('cat', 'white')
test.set('mouse', 'gray')

console.log('length', test.length()); //16
console.log(test.entries());

console.log(`get value of key banana: ${test.get('banana')}`); // yellow
console.log(`get value of key ball: ${test.get('ball')}`); // null

console.log(`check if key tiger exists: ${test.has('tiger')}`); // true
console.log(`check if key table exists: ${test.has('table')}`); // false

test.remove('moon');
console.log('length', test.length()); //15
console.log(test.entries());

// test.clear();
// console.log('length', test.length()); //15
// console.log(test.entries());

console.log('keys: ', test.keys());
console.log('values: ', test.values());