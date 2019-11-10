const text = "ninja Ninja ginja ninja";

// match all letters from a to z
const all = /[a-z]inja/g;
console.log(text.match(all));

// match all letters case insensitive
const all2 = /[a-zA-Z]inja/g;
console.log(text.match(all2));

const text2 = "111ninja Ninja ginja ninja";

// digits
const dig = /[1-9]ninja/g;
console.log(text2.match(dig));
