//Responsive

var menu = "colse";

function MenuMobile(){
    var mobile_menu = document.getElementById("mobileNav");

    if(menu == "close"){
        mobileNav.style.width = "100%";
        menu="open";      
    }

    else{
        mobileNav.style.width = "0%";
        menu = "close"

    }
}