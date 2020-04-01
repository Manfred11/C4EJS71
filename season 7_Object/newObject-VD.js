//khai bao 1 object, chua thong tin 1 dien thoai :
//chua tên , giá, hãng sx

//1. in thông tin đt ra màn hình
//2.cho người dùng nhập năm sản xuấtcủa đt này 
//3.cho ng dùng sửa 1 value của đt này 
//4. nhập 1 key , xóa thông tin này trong đt 



//Bai 1

// let phone ={
//     'name' : "Galaxy A71" ,
//     "price"  : 7e6 ,
//     "brand": "Samsung" ,
// }
// for (const key in phone) {
//         const element = phone[key];
//         console.log(key+": " +element);
// }
// let releaseDate = parseInt(prompt("Nhap nam san xuat: "));
// phone.releaseYear = releaseDate ;

// // phone['releaseYear '] = releaseDate ;      them ' ko loi
// console.log("\n===== Thêm thành công =====\n");
// for (const key in phone) {
//     const element = phone[key];
//     console.log(key+": " +element);
// }

// let editKey = prompt("Nhap key muon sua: "); 
// for(const key in phone) {               //name 
//     while (!phone.hasOwnProperty(editKey)) {
//         editKey = prompt("Gía trị mới : ");
//     }
// }
// phone[editKey] = prompt("Gia tri moi: ");
// console.log("\n===== Sửa thành công =====\n");
// for (const key in phone) {
//     const element = phone[key];
//     console.log(key+": " +element);
// }

// //xoa key
// let removeKey = prompt("Ban muon xoa gi: ");
// for(const key in phone) {
//     while (!phone.hasOwnProperty(removeKey)) {
//         removeKey = prompt("Ban muon xoa gi : ");
//     }
// }
// delete phone[removeKey]; 


//Bai 2

// II. Khai báo 1 mảng chứa thông tin 3 đt, mỗi đt gồm:
// tên, giá, hãng sx
// 1. in ds đt ra màn hình (không sử dụng log mảng và log object)
// 2. cho ngdung thêm 1 đt mới vào mảng, bằng cách cho ngdung nhập tên, giá, hãng rồi thêm đt mới này vào mảng
// 3. ngdung nhập stt và key muốn sửa, cho người dùng sửa thông tin của đt có stt đó
// 4. nhập stt, xóa đt có stt đó
// 5. Nhập 1 tên đt, tìm đt có tên đó (ko phân biệt hoa thường)
// 6. Nhập 2 số, tìm các đt có giá nằm giữa 2 số đó
// 7. Nhập 1 hãng SX, tìm các đt thuộc hãng sx đó
// 8. sắp xếp DS đt theo tên, theo giá, (tăng, giảm dần)


//Bai 2

let listPhone = [
    {
        name: 'Galaxy Note' ,
        price: 10e6 ,
        brand: 'Samsung'
    } ,
    {
        name: 'Xperia 1' ,
        price: 11e6,
        bread: 'Sony'
    }, 
    {
        name: 'Iphone 11' ,
        price: 12e6 ,
        brand: 'Apple'
    },
];
//c1
// let phone1 ={
//         'name' : "Galaxy A71" ,
//         "price"  : 7e6 ,
//         "brand": "Samsung" ,
//     }

// listPhone.push(phone1);
for(let i =0; i< listPhone.length; i++)
{
    const phone = listPhone[i];
    console.log(i + 1) ;

    for (const key in phone) {
        const value = phone[key];
        console.log("\t"+ key +": "  + value);
        
    } 
    console.log('\t --- \t --- ');
}     

let newPhoneName = prompt("Ten điện thoại mới: ");
let newPhonePrice = prompt("Gia đt mới");
let newPhoneBrand = prompt("Hãng đt mới: ");

let newPhone ={
    name: newPhoneName,
    price: newPhonePrice,
    brand: newPhoneBrand
 };
listPhone.push(newPhone);

console.log("===== Thêm thành công =====");
for(let i =0; i< listPhone.length; i++)
{
    const phone = listPhone[i];
    console.log(i + 1) ;

    for (const key in phone) {
        const value = phone[key];
        console.log("\t"+ key +": "  + value);
        
    } 
    console.log('\t --- \t --- ');
}     


// sửa
// let sttSua = parseInt(prompt("Nhập vị trí muốn sửa:"));
// if (sttSua >= 1 && sttSua <= listPhone.length) {
//   // Nhập đúng
//   let phoneEdit = listPhone[sttSua - 1];
//   let keyEdit = prompt("Nhập thông tin cần sửa: (name, price, brand)");
//   if (phoneEdit.hasOwnProperty(keyEdit)) {
//     // Nhập đúng
//     phoneEdit[keyEdit] = prompt(`Nhập ${keyEdit} mới:`);
//     console.log("======= Sửa thành công ======");

//     // in ra
//     for (let i = 0; i < listPhone.length; i++) {
//       const phone = listPhone[i];
//       console.log(i + 1);
//       for (const key in phone) {
//         const value = phone[key];
//         console.log("\t" + key + ": " + value);
//       }
//       console.log('\t --- \t --- ');
//     }
//   } else {
//     // Nhập sai
//     alert("Sai key cần sửa");
//   }
// } else {
//   // Nhập sai
//   alert("Nhập sai stt");
// }
// xóa
// let sttXoa = parseInt(prompt("Vị trí cần xóa:"));
// if (sttXoa >= 1 && sttXoa <= listPhone.length) {
//   // Nhập đúng:
//   listPhone.splice(sttXoa - 1, 1);
//   console.log("======= Xóa thành công ======");

//   // in ra
//   for (let i = 0; i < listPhone.length; i++) {
//     const phone = listPhone[i];
//     console.log(i + 1);
//     for (const key in phone) {
//       const value = phone[key];
//       console.log("\t" + key + ": " + value);
//     }
//     console.log('\t --- \t --- ');
//   }
// } else {
//   alert("Nhập sai");
// }

// Tìm theo tên đt

// let searchPhoneName = prompt("Tên đt cần tìm");
// let minPrice = Number(prompt("Nhập price min:"));
// let maxPrice = Number(prompt("Nhập price max:"));
// console.log("======= Tìm đt ======");
// let resultSearch = [];

// for (const phone of listPhone) { // Vòng lặp tìm kiếm
//   // if (phone.name.toLowerCase().includes(searchPhoneName.toLowerCase())) {
//   //   resultSearch.push(phone);
//   // }
//   if (phone.price >= minPrice && phone.price <= maxPrice) {
//     resultSearch.push(phone);
//   }
// }

// // console.log(`=== Kết quả tìm kiếm: ${searchPhoneName}`);
// console.log(`=== Kết quả tìm kiếm: ${minPrice} - ${maxPrice}`);
// if (resultSearch.length > 0) {
//   // in ra
//   for (let i = 0; i < resultSearch.length; i++) {
//     const phone = resultSearch[i];
//     console.log(i + 1);
//     for (const key in phone) {
//       const value = phone[key];
//       console.log("\t" + key + ": " + value);
//     }
//     console.log('\t --- \t --- ');
//   }
// }
// else {
//   console.log("Không có kết quả thỏa mãn");
// }

// Sắp xếp
for (let i = 0; i < listPhone.length - 1; i++) {
    for (let j = i + 1; j < listPhone.length; j++) {
      if (listPhone[i].brand.toLowerCase().localeCompare(listPhone[j].brand.toLowerCase()) > 0) {
        let temp = listPhone[i];
        listPhone[i] = listPhone[j];
        listPhone[j] = temp;
      }
    }
  }
  // in ra
  console.log("====== Sắp xếp ======");
  
  for (let i = 0; i < listPhone.length; i++) {
    const phone = listPhone[i];
    console.log(i + 1);
    for (const key in phone) {
      const value = phone[key];
      console.log("\t" + key + ": " + value);
    }
    console.log('\t --- \t --- ');
  }

  // Kiến thức mới: 
  // 1. Function. // function không tham số, có tham số, có giá trị trả về
  // 2. Array methods:
  // - Array.filter()
  // - array.find(), array.findIndex();
  // - array.indexOf(), lastIndexOf();
  // - array.every(), array.some();


