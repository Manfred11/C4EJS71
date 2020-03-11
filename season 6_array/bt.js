// let arr=[];
// let length = 5;
// for(let i =0; i < length; i++)
// {
//     let n = parseInt(prompt("Nhap 5 so thu "+ i+ ":"));
//     arr.push(n);
//     //arr[i]= n ; //khong nên
// }

// for(let i = 0; i< arr.length; i ++)
// {
//     console.log(`${i+1}: ${arr[i]}`);
    
// }

// let s =0, tb = 0;
// for(let i = 0; i< arr.length; i ++)
// {
//     s= t+arr[i]; 
// }
// tb=t/(arr.length);
// console.log(s);
// console.log(tb);


// let x = parseInt(prompt("Nhap 1 so: "));
// for(let i = 0; i< arr.length; i++)
// {
//     if(x===arr[i])
//     {
//         console.log("so x co trong mang");
//         break;
//     }
//     else{
//         console.log("Khong co trong mang");
//         break;
        
//     }
// }
let isExist = false;
let N = Number(prompt("Nhap 1 so N: "));
for(let i = 0; i< arr.length; i++)
{   
    const element =arr[i];

    if(element===N)
    {
        isExist= true;
        break;
    }
}
    if(isExist)
{
    console.log("Co ton tai");
}
else{
    console.log("Khong ton tai");
    
}
for(let i = 0; i< arr.length; i++)
{
    if(N > arr[i])
    {
        console.log(i);
    }
}

let stt = parseInt(prompt("Nhap 1 vi tri muon sua: "));
while(stt < 1 || stt> arr.length){
    stt = parseInt(prompt("Nhap dung stt: "));
}

arr[stt-1] = Number(prompt("Nhap gia tri moi: "));

//sắp xếp rồi in    (short)
//Hàm short 
// Thuật toán 








































