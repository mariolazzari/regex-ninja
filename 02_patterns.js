// match first
const text = "mario mario Mario";
// single word case sensitive
const name1 = /Mario/;
const matchName1 = text.match(name1);
// single workd global case sensitive
const name2 = /mario/g;
const matchName2 = text.match(name2);

// global case insensitive
const name3 = /mario/gi;
// case insensitive
const name4 = /mario/i;

console.log("match name1", matchName1);
console.log("match name2", matchName2);
console.log(text.match(name3));
console.log(text.match(name4));
