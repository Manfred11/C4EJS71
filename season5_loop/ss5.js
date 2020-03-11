// for (let index = 0; index < 10; index+=2) {
//     // console.log("Hello World");
//     console.log(index);

// }

// for (let index = 1; index < 10; index+=2) {
//     //     // console.log("Hello World");
//         console.log(index);
// // }
// for (let index = 10; index >0; index-=2) {
//     //     // console.log("Hello World");
//         console.log(index);
// }

// let m =Number(prompt("Nhap so m: "));
// let n =Number(prompt("Nhap so n: "));
// let a, b;
// if(m<=n)
// {
//     // for(let i=m;i<=n;i++)
//     // {
//     // console.log(i);
//     // }
//     a=n;
//     b=m;
// }
// else
// {
// for(let i=n; i <= m; i++)
// {
// console.log(i);
// }
// }
// for(let i=Math.min(m,n); i <= Math.max(m,n); i++)
// {
//     console.log(i);
// }
// // a = m<n ? b:a;

// let M = Number(prompt("nhap vao so m: "));
// let S=0;
// for(let i =0; i< M; i ++)
// {
//     S += i ;
// }
//     console.log(S);
// let m = parseInt(prompt("nhap vao so m: "));
// let s = 0;
// for(let i =1; i< m; i +2)
// {
//     s += i ;
// }
//     console.log(s);
// for(let i =1; i< m; i ++)
//     {
//         s += 1/i ;
//     }
//     console.log(s);
// for(let i =0; i< m; i ++)
//     {
//         s += 1/(i*(i+1)) ;
//     }
//     console.log(s);
// for(let i =0; i< m; i ++)
//     {
//         s += 1/(i/i+1);
//     }
//     console.log(s);

// for(let i =1; i< m; i ++)
//     {
//         s *=i ;
//     }
// console.log(s);

// let s1=0;
// for(let i=1 ;i <=m; i ++)
// {
//     let giaiThua=1;
//     for (let j = 1; j <=i ; j++) {    //tinh giai thua
//        giaiThua= giaiThua*j; 
//     }
//     s1= s1 + giaiThua;
// }
//     console.log(s1);

// let s1=1;
// let giaiThua =1;
// for(let i=2 ;i <=m; i ++)
// {
//     giaiThua= giaiThua*i;
//     s1= s1 + giaiThua;
// }
// console.log(s1);


// let n =Number(prompt("Nhap so N: "));
// while(n< 8)
// {
//     n =Number(prompt("Nhap lai N>=8"));
// }
// console.log(n);

// let x=prompt("Nhap pass 8 ky tu: ");
// while(x.length<8)
// {
//     console.log("nhap lai pass: ");
//     let x= prompt("Nhap pass 8 ky tu: ");
    
// }   
// if(x.length <8)
// {
//     x=prompt("pass qua ngan. nhap lai");
// }
//     console.log(x);

// let x =parseInt(prompt("Nhap so x: "));   
// while(!(x > 10 && x%2===0))
// {
//     x=parseInt(prompt("Nhap lai so x: "));     // vo li vd
// }
//     console.log(x); 
    
let pass=prompt("Nhap pass 8 ki tu: ");
while(!(pass.length>=8 && pass.indexOf("@")>=0))           //hoac indexOf
{
    pass=prompt("Nhap lai pass");
}
console.log(pass);



 
