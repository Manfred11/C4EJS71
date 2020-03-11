// let name="Cuong";
// let welcome ="Xin Chao";

// let welcome1 =`${welcome} C4EJS71`;
// console.log(welcome1)

// let x=prompt("nhap x:");

// y1=4*(x*x + 10*x* Math.sqrt(x*x+3*x+1));

// console.log(y1);
// // y2= (Math.sin(Math.PI *x*x)+Math.sqrt(x*x+1))/((Math.pow((Math.E),2*x))+Math.cos((Math.PI)*x/4))

// let yourName=prompt("Nhap ten:");
// console.log("Xin chao! "+ yourName);

//chuyen chuoi => so

let x=Number("5");
let y=Number("6");
console.log(x+y);

//chuoi =>so nguyen

x = parseInt("5.6");
console.log(x);

//chuoi=> so thuc

y=parseFloat("6.5");
console.log(y);

//so =>chuoi 
// => so + chuoi "" (rong)
// let s=10+""; //=> s ="10";

// let r =parseFloat(prompt("Ban kinh :"));
// var cv= 2*Math.PI *r;
// var dt= Math.PI *r*r;
// console.log("chu vi hinh tron:"+cv);
// // console.log("dien tich hinh tron: " +dt);
// console.log(`chu vi hinh tron: ${r} la: ${cv}`);

let d= parseFloat(prompt("Nhap chieu dai:"));
let r=parseFloat(prompt("Nhap chieu rong:"));
let cv = 2*(d+r);
let dt = d*r;

console.log(`chu vi hinh chu nhat la: ${cv}`);
console.log((`dien tich hinh chu nhat la: ${dt}`));
console.log(typeof r);
console.log(typeof "abc");







