// + one or more
const atLeast = /[0-9]+/g;

const test1 = "123";
console.log(test1 + " match:", test1.match(atLeast));

// uk phone (11 digits)
const ukPhone = /[0-9]{11}/g;
const test2 = "12345678901";

console.log(test1 + " match uk:", test1.match(ukPhone));
console.log(test2 + " match uk:", test2.match(ukPhone));

// match from 5 to 8
const fromTo = /[a-z]{5,8}/gi;
const test3 = "Ciao";
const test4 = "Mario";

console.log(test3, test3.match(fromTo));
console.log(test4, test4.match(fromTo));
console.log(test3 + test4, (test3 + test4).match(fromTo));
