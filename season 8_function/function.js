function helloworld(){
    console.log("Hello from function");
    
}
//goi func , run
// helloworld(); 
// helloworld(); 
// helloworld(); 

//khai bao func su dung tham so 
// function xinChao(userName){
//     console.log(`xin chao ${userName}`);
    
// }
// let name="Cuong";
// xinChao(name);

// xinChao("Son");
//tinh tong 2 so

// function sum(a,b){
    // console.log(a);
    // console.log(b);
    

//     console.log(a+b);
    
// }
// sum(2,3);

// function tinhTong(a1,a2){
//     let s = a1 + a2; 
//     return s;
// }

// let s = tinhTong("Nhap 1 so: ") ;
// console.log(s);

//dau vao nhan 1 mang. sau do return. 

// function tinhTong2(arr){
    // if(typeof arr =='array'){
        // Array.isArray(arr);
//     let s = 0;
//     for(let i =0; i < arr.length; i++){
//         s += arr[i];
//     }
//     return s;
// }
// //     }   
//     else{
//         return 0;
//     }
// }
// let n=prompt("Nhap vao 1 so: ");
// for(let i;i < n; i++){
//     let x =prompt("Nhap 1 so ");
    
// }

// let sum = tinhTong2([1,2,3,4,5]);
// console.log(sum);

function xinChao(){
    console.log("xin chao");
    return;
    
}
//code mo` => k bao gio dc chay den 
let n1 = xinChao();
console.log(n1);

// return de ngat 

function printNumber(){
    let i =0;
    while (true){
        console.log(i++);
        if(i>3){
            return ;                //return dung func
        }
        
    }
}
printNumber();












