// or |
const alt = /(t|p)yre/;
console.log("my tyre".match(alt));
console.log("my pyre".match(alt));
console.log("my  name".match(alt));

const multi = /(pet|toy|crazy) rabbit/;
console.log("pet rabbit".match(multi));

const multiOpt = /(pet|toy|crazy)? rabbit/;
console.log("space rabbit".match(multiOpt));
