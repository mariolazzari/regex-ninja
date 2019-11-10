// ^ begin
const start = /^[a-z]{5}/;
console.log("xxxxxzzz".match(start));

// ^ begin
const end = /[a-z]{5}$/;
console.log("xxxxxzzz".match(end));

// both
const both = /^[a-z]{5}$/;
console.log("xxxxxzzz".match(both));
console.log("xxzzz".match(both));
