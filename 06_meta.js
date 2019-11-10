const text = "Mi chiamo Mario e ho 44 anni.";

// all digits: /d
const d = /hd/g;
console.log(text.match(d));

// all chars and nums: /w
const w = /\w/g;
console.log(text.match(w));

// space or tab: /s
const s = /\s/g;
console.log(text.match(s));

// tab only: /t
const t = /\t/g;
console.log(text.match(t));

// composition
const comp = /\d{3}\s\w{5}/;
console.log("123 Ninja".match(comp));
console.log("123  Ninja".match(comp));
