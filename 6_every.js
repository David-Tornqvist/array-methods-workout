//every returnerar true ifall alla element upfyller testfunktionen

const arr = ["Hej","fem","sju","ko"];
const arr2 = ["ko","ko","ko","ko"];

console.log(arr2.every(x => x === "ko")); // true
console.log(arr.every(x => x === "ko")); // false