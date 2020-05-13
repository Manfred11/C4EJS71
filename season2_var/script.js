// alert("Xin chao CE4JS 71"); //thong bao         

// prompt("Ten ban la gi");  //nhap thong tin tu nguoi dung

// let age;    //khai bao bien
// age = 25;    //gan gia tri

// let age1=25;
// var name;
// const PI=3.14;

// //su dung
// // alert(age);
// // alert(age1);
// console.log(age);
// console.log(age1);
// let a =5;
// let b=10;
// let c= a+b ;
// console.log(c);

// let yourName =prompt("Nhap ten:");
// // let age = prompt("Nhap tuoi:");
// let yourYearOfBirth =prompt("Nhap nam sinh:");

// yourAge = 2020- yourYearOfBirth;
// alert(yourName);
// alert(yourAge);

// let x=parseInt(prompt("nhap 1 so:"));
// let y=prompt("nhap 1 so:");
// alert("cong:"+ x+y);
// alert("tru:" + x-y);
// alert("chia:" + x/y);
// alert("nhan:" + x*y);

//cac cach khai bao

const PI=3.14;

var name; 
let a = 5;
//khac nhau giua var và let

var b1 = 1;
// var khai bao bien toan cuc , co kha nang su dung nhieu noi

if(true){
    let b2 =10;

    console.log(b2);
    
}
console.log(b2);  //do let chi su dung trong scope




// var b1 = 1;

// if (true) {
//   let b2 = 10;

//   if (true) {
//     console.log(b2);
//   }
// }
// //scope

// let b2 = 20;
// console.log(b2);


// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// // 
// var bienChung = 0;
// console.log(i);
// for (let i = 10; i < 20; i++) {
//   console.log(i);
// }

// let a = 5, b = 10, name = "Hung";
// var age = 20;

// let c = a + b;
// ++a;
// --b;

// Toán tử 3 ngôi: ? :

// toán tử 1 ? toán tử 2 : toán tử 3
// toán tử 1: trả về true >< false (điều kiện)
// - true: trả về toán tử 2
// - false: trả về toán tử 3
//
// if (a >= 0){ d = a; }
// else { d = (-1)*a; }

// let a = -10;
// let d = (a >= 0 ? a : (-1)*a); // d là trị tuyệt đối của a.
// console.log("d = " + d);


// Tìm 1 chuỗi
// indexOf(), lastIndexOf()
// search();

// giống:
// trả về số nguyên, vị trí của từ cần tìm trong chuỗi gốc
// -1, 0<=
// -1 không tìm thấy
// 0<= tìm thấy

let a = "abadfjsadfsa@gmail.com"   // search gg: pattern email javascript
let b = "2";
// console.log(a.indexOf(b));
// console.log(a.lastIndexOf(b));
// // console.log(a.search(b));
// var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // pattern (regular expression)

// console.log(a.search(re));

// includes(): true, false

// a = "123454321";
// b = "@";
// // console.log(a.includes(b));
// if (!a.includes(b)) { // === false
//   console.log("b không nằm trong a");
// } else {
//   console.log("b nằm trong a");
// }

// Nhập tên và tuổi cùng 1 lúc (cách nhau bởi dấu phẩy (,))
// lấy đc 2 thông tin
// VD: Hung,20
// name = Hung
// age = 20
// let str = "Hung 20 HN";
// console.log(str);
// let split = str.split(' ');
// console.log(split);
// let name = split[0];
// let age = split[1];
// let country = split[2];
// console.log(name);
// console.log(age);
// console.log(country);

// let arr = ["Hung", "Quang", "Duy"];
// let listPhone = [
//   {
//     name: "dt1",
//     price: 10e6,
//   },
//   {
//     name: "dt2",
//     price: 20e6,
//   },
//   {
//     name: "dt3",
//     price: 30e6,
//   }
// ]
// for (const phone of listPhone) { // for of sử dụng ở mảng
//   // console.log(value);
//   for (const key in phone) { // for in sử dụng ở object
//     const value = phone[key];
//     console.log(key + ": " + value);
//   }
// }

// Mảng - Object

// thêm 1 dữ liệu mới
// Mảng: push(), unshift();
// thêm mới - chèn: [1,2,3] => [1,2,4,3];
// splice() // vừa xóa vừa chèn
// let arr0 = [1,2,3];
// // arr.splice(2, 0, 4, 5, 6);
// // console.log(arr);
// let arr1 = [4,5,6];
// let arr2 = arr0.concat(arr1);
// console.log(arr2);
// Object: object.keymoi = valuemoi

// sửa
// Mảng: arr[index] = valuemoi // số
// object: object[keycu] = valuemoi // key: chuỗi

// xóa
// Mảng: arr.splice(start, count);
// object. delete object[keycu];
// delete arr[index];
// let arr = [1,2,3];
// // delete arr[2]; // cấm
// arr.splice(2, 1);
// console.log(arr);

// duyệt
// Mảng: for hoặc for-of
// Object: for-in
