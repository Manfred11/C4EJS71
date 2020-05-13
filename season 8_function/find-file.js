// 5.Yêu cầu: cho người dùng nhập 1 từ khóa, tìm tất cả file có chứa từ khóa đó, k phân biệt chữ hoa thường.
// - name: mô tả tên của file hoặc thư mục - kiểu string
// - isFolder: mô tả object này là file hay folder - true: là folder, false: là file - kiểu boolean.
// - content: nếu object là file, content k có nội dung (mảng rỗng []), nếu object là folder, sẽ lưu danh sách các object khác.


let images = { 	
    "name": "images", 	
    "isFolder": true,
    "content":[
    { 			
        "name": "background.jpg",
        "isFolder": false,	
        "content": []
    },
    {
        "name": "forceground.jpg",
        "isFolder": false,
        "content": []
    },
    {
        "name": "my travel",
        "isFolder": true,
        "content": [
        {
            "name": "ha noi",
            "isFolder": true,
            "content": [
            {
                "name": "pho-co.jpg",
                "isFolder": false,
                "content": []
            },
            {
                "name": "ho-guom.jpg",
                "isFolder": false,
                "content": []
            }
            ]
        },
        {
            "name": "check-in.jpg",
            "isFolder": false,
            "content": []
        }
        ]
    }
    ]
}

// let a = prompt("Nhap ten tu khoa can tim kiem: ");
// var timKiem= a.toUpperCase();

// var results = [];

// for(var i=0; i<images.length; i++) {
//   for(key in images[i]) {
//     if(images[i][key].indexOf(timKiem)!=-1) {
//       results.push(images[i]);
//     }
//   }
// }

// function filterIt(object, searchKey) {
//     return object.filter(function(obj) {
//       return Object.keys(obj).some(function(key) {
//         return obj[key].includes(searchKey);
//       })
//     });
//   }
// console.log("find 'a':", filterIt(images,"timKiem"));

// function find_files(object, keyword){
//     let result=[];
//     if(object.isFolder===false){
//         if(object.name.search(keyword) >=0){
//             result.push(object.name);

//         }
//     }
//     else{
//         for (const childObject of object.content) {
//             let r = find_files(childObject, keyword);   
//             result =result.concat(r)
//         }
//     }
//     return result;
// }
// let result = find_files(images, "c");
// console.table(result);

// c2

function find_files(object, keyword){
}


let keyword = "c";
let allFileFolders = []; 
allFileFolders.push(images);

while(allFileFolders.length>0){
    let object = allFileFolders.shift();
    if(!object.isFolder ) {
        if (object.name.search(keyword) >=0){ //iscludes( tra ve true false)
            console.log(object.name);
            
        }  
        
    }
    else{
       
        // allFileFolders = allFileFolders.concat(object.content);
        allFileFolders.push(...object.content);
    }

}











