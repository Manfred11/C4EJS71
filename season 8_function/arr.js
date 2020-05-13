// // let arr =[2, 3, 5, 7, 9, 3, 2, 6];

// // let r1= arr.findIndex(function(v, i , a){
// //     console.log(v= `${v}`);
// //     console.log(i = `${i}`);
// //     console.log(a);
        
// //     return v >4 ;
// // });

// // console.log(r1= `${r1}`);

// let arr =[2, 3, 5, 7, 9, 3, 2, 6];

// // let r2= arr.find(function(v, i , a){
// //     console.log(`v= ${v}`);
// //     console.log(`i = ${i}`);
// //     console.log(a);
        
// //     return v >4 ;
// // });

// // console.log(r2= `${r2}`);

// let r3= arr.filter(function(v, i , a){
//     console.log(`v= ${v}`);
//     console.log(`i = ${i}`);
//     console.log(a);
        
//     return v >4 ;
// });

// console.log(`r3= ${r3}`);
// console.log(r3);

// let r4= arr.every(function(v,i){
//     return v% 2 ===0 ;
// });
// console.log(r4);
// let r5= arr.some(function(v, i){
//     return v%2 ===0 ;
// });

// console.log(r5);






// 1. tìm ra 1 đt có giá > 10tr và < 12tr
// 2.tìm ra các đt của hãng samsung
// 3. tìm các dt có giá > 12tr
//4. tìm các đt có tên chứa chữ "a" (ko phân biệt hoat thường)
let listPhone = [
    {
        name: 'Galaxy Note' ,
        price: 10e6 ,
        brand: 'Samsung'
    } ,
    {
        name: 'Xperia 1' ,
        price: 11e6,
        brand: 'Sony'
    }, 
    {
        name: 'Iphone 11' ,
        price: 12e6 ,
        brand: 'Apple'
    },
];
// 1
// let findPhone = listPhone.find(function(v, i ,a){
//     // console.log(v);
//     // console.log(i);
    
//     return (v.price> 10e6 && v.price <12e6);
// });
// console.log(findPhone);


// // 2
// let findPhone = listPhone.filter(function(phone){
//     // console.log(v);
//     // console.log(i);
    
//     return phone.brand.toLowerCase()=== 'samsung';
// });
// console.log(findPhone);

// // 3
// let findPhone = listPhone.findIndex(function(v){

    
//     return (v.price> 12e6);
// });
// console.log(findPhone);


// 4
// let findPhone = listPhone.filter(function(v){

    
//     return (v.name.toLowerCase().includes("a"));
// });
// console.log(findPhone);

// 5
let findPhone = listPhone.filter(function(v, i ,a){

    
    return (v.price <20e6 && v.brand.search("Apple")>=0);
});
console.log(findPhone);


