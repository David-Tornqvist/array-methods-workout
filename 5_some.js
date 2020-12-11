//some returnerar true ifall minst ett element upfyller testfunktionen

const arr = ["Hej","fem","sju","ko"];

console.log(arr.some(x => x === "ko")); // true
console.log(arr.some(x => x === "dsad")); // false