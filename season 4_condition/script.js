// let x=Number(prompt("Nhap 1 so"));

// if (x>8)
// {
//     console.log("lon hon 8");
    
// }
// else if(x<8)
// {
//     console.log("nho hon 8");
    
// }
// if(x===8)
// {
//     console.log("bang 8");
    
// }
// let x=Number(prompt("Nhap 1 so:"));
// if(x%2===0)
// {
//     console.log("so chan");
    
// }
// else
// {
//     console.log("so le");
    
// }
// let x=parseInt(prompt("Nhap 1 nam"));
// if((x%4===0 && x%100!==0)|| x%400===0)
// {
//     console.log("nam nhuan")
    
// }
// else {
//     console.log("khong la nam nhuan");
    
// }
let x=parseInt(prompt("nhap 1 thang:"));
if(x==1 ||x==3|| x==5||x==7 ||x==8 ||x==10||x==12)
{
    console.log(`thang ${x} co 31 ngay`);
    
}
else if(x==4 ||x==6||x==9||x==11)
{
    console.log(`thang ${x} co 30 ngay`);
}
else{
    console.log(`thang ${x} co 28 hoac 29 ngay`);
    
}