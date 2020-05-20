let menu= [
    "Home",
    "About",
    "Room", 
    "Dive site",
    "Food",
    "New", 
    "Contact",

];

let menuLink = document.getElementsByClassName("menu-link"); 

for (let i = 0; i < menuLink.length && i < menu.length; i++) {
    menuLink[i].innerHTML = menu[i];
    
}


