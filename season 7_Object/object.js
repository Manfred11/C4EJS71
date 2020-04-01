let myInfo = {
    "name" : "Cuong",
    'age'  : 22,
    country: 'Vietnam' ,
}

console.log(myInfo);
//them moi object 
myInfo["phone"] = '0123456789' ;
myInfo.school = 'DHQG HN' ;
// sua object 
myInfo.age = 23; 

//duyet object 

for (const key in myInfo) {
    if (myInfo.hasOwnProperty(key)) {    //chay da luong( nhieu ng)     //kiem tra key thuoc obj.....
        const element = myInfo[key];
        console.log(key+": " + element);
    }
}

//xoa obj

delete myInfo.name;


//7-3



