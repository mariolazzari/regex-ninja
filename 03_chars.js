const text = "La mamma di Mario si chiama Maria.";

// match different chars in single position
const char1 = /mari[ao]/gi;
console.log("char 1 match:", text.match(char1));

// exclude set ^
const exclude = /[^pe]000/g;
const text2 = "a000 b000 p000 e000";
console.log("Exclude p or e", text2.match(exclude));
