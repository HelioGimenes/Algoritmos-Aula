let a = 0
let b = 1
let temp
console.log(a);
console.log(b);
for (let i = 2; i <= 10; i++) {
    temp = a + b;
    a = b;
    b = temp;
    console.log(b)
}
