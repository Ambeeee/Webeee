//Responsive

var menu = "close";

function MenuMobile(){
    var mobile_menu = document.getElementById("mobileNav");
    var iconmenu = document.getElementById("menuIcon");

    if(menu == "close"){
        mobileNav.style.width = "100%";
        menu="open";
        iconmenu.src = "img/Generale/IconaMenuChiudi.png"    
    }

    else{
        mobileNav.style.width = "0%";
        menu = "close"
        iconmenu.src = "img/Generale/IconaMenu1.png" 
    }
}