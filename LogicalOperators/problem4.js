//Problem 4: Given 3 numbers (all different values), print which is greatest

let a = 69;
let b = 500;
let c = 13;

// Ternary Operator replaced the if... else if... else

(a>b) && (a>c) ? console.log(a,"i.e. a is Greatest one")
  : (b>a) && (b>c) ? console.log(b,"i.e. b is Greatest one")
  : console.log(c,"i.e. c is Greastest one");