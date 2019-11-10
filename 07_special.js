const text = "hello world";

// optional ?
const opt = /hello?/g;
console.log(text.match(opt));
console.log("hell".match(opt));

// any chars .
const any = /.+/g;
console.log("any chars".match(any));

// zero ot more: *
const star = /a[a-z]*/g;
console.log("aa1".match(star));

// escape *
const esc = /abc\*/g;
console.log("abc*".match(esc));
