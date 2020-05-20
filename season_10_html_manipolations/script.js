// console.dir(document.getElementById("title"));
// console.dir(document.getElementById("title").innerHTML);

// let idTitle = document.getElementById("title").innerHTML="Welcome C4EJS 71"; //thay doi gtri html 
//  idTitle.innerHTML ="welcome C4EJS71" ;


let classContent = document.getElementsByClassName("content");
// console.dir(classContent);
// document.getElementsByClassName("content")[0].innerHTML="welcome";
console.dir(classContent);

for (let i = 0; i < classContent.lengtht ;i++) {
    const dom =classContent[i] ;
    dom.innerHTML="welcome C4EJS71";
    
}  
console.dir(classContent);

// thay doi style 

title.style.color= "green" ;
title.style.backgroundColor = "yellow";

// title.innerHTML = "wlcome C4EJS<h1>Day la the h1 by JS </h1>";

let listFoods= [
    "Pho",
    "Bun ca",
    "Mi tom", 
    "com nguoi",
];

let listImgs =[
    `https://bizweb.dktcdn.net/100/201/278/articles/39-anhbia.jpg?v=1511763740217`, 
    'https://bizweb.dktcdn.net/100/201/278/articles/39-anhbia.jpg?v=1511763740217',
    'https://bizweb.dktcdn.net/100/201/278/articles/39-anhbia.jpg?v=1511763740217',
    'https://bizweb.dktcdn.net/100/201/278/articles/39-anhbia.jpg?v=1511763740217',
]



let ulFoods = document.getElementById("foods");

// ulFoods.innerHTML = `<li>
//                         Com Rang
//                         <img width = '100' src='https://bizweb.dktcdn.net/100/201/278/articles/39-anhbia.jpg?v=1511763740217'/>
//                     </li>`;


// let ulFoods = document.getElementById("foods");
// for (let j = 0; j  < listImgs.length ; j++){ 


let listFoodImges = [
    {
        food: "pho" ,
        img : 'https://bizweb.dktcdn.net/100/201/278/articles/39-anhbia.jpg?v=1511763740217',
        description: "đây là món phở ",
        linkDetail: 'https://bizweb.dktcdn.net/100/201/278/articles/39-anhbia.jpg?v=1511763740217'
    },
    {
        food: "com rang",
        img : 'https://bizweb.dktcdn.net/100/201/278/articles/39-anhbia.jpg?v=1511763740217',
        description: "đây là món phở ",
        linkDetail: 'https://bizweb.dktcdn.net/100/201/278/articles/39-anhbia.jpg?v=1511763740217'
    },
    {
        food: "bun ca  ",
        img : 'https://bizweb.dktcdn.net/100/201/278/articles/39-anhbia.jpg?v=1511763740217',
        description: "đây là món phở ",
        linkDetail: 'https://bizweb.dktcdn.net/100/201/278/articles/39-anhbia.jpg?v=1511763740217'
    },
    {
        food: "pho",
        img : 'https://bizweb.dktcdn.net/100/201/278/articles/39-anhbia.jpg?v=1511763740217',
        description: "đây là món phở ",
        linkDetail: 'https://bizweb.dktcdn.net/100/201/278/articles/39-anhbia.jpg?v=1511763740217'
    },
    {
        food: "pho",
        img : 'https://bizweb.dktcdn.net/100/201/278/articles/39-anhbia.jpg?v=1511763740217',
        description: "đây là món phở ",
        linkDetail: 'https://bizweb.dktcdn.net/100/201/278/articles/39-anhbia.jpg?v=1511763740217'
    },
    

];

// let a = Math.min(listImgs.length , listFoods.length);
    // for (let i = 0;  i< listFoods.length ; i++) {
    // // foods[i].innerHTML = listFood[i];
    // // ulFoods.innerHTML = "<li>Com Rang</li>";


    // const food = listFoods[i];
    // const img =listImgs[i];
    // // let htmlFood = `<li>${food}<img width ='100' src='${img}$'/></li>` ;

    // ulFoods.innerHTML +=htmlFood ;
    // }

// }

//  for (let i = 0;  i< listFoodImges.length ; i++) {
//     // foods[i].innerHTML = listFood[i];
//     // ulFoods.innerHTML = "<li>Com Rang</li>";


//     const foodAndImg = listFoodImges[i];
//     const food = listFoodImges[i].food;
//     const img =listFoodImges[i].img;
//     let htmlFood = `<li>${food}<img width ='100' src='${img}$'/></li>` ;
//     ulFoods.innerHTML +=htmlFood ;
//     }

let tbody = document.getElementById('foods');

    for (let i = 0; i < listFoodImges.length; i++) {
        const element = listFoodImges[i];
        let html = `<tr>
                        <td>${i+1}</td>
                        <td><img src="${listFoodImges[i].img}" width="100"></td>
                        <td>${listFoodImges[i].food}</td>
                        <td>${listFoodImges[i].description}</td>
                        <th><a href='${listFoodImges[i].linkDetail}' target="_blank">Detail</a></th>
                    </tr>` ;
        tbody.innerHTML+= html;
        
        liss
    }


/*lay du lieu tu trang thegioididong.com
chon khoang 5 dt , lay thong tin gom :
Tên- hãng-giá- ảnh - đường link đến chi tiết đt 
Hiển thị theo bảng danh sách đt này theo mẫu: 
1. Mặc định
2.danh sách được sắp xếp theo tên, hãng ,giá
3.danh sách được sắp xếp theo 1 hãng
4. danh sách được sắp xếp theo 1 khoảng giá ( VD: từ 10-20 triệu)

II. Khi click vào đường link , mở ra tab đến trang chi tiết đt.

*/