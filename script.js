//Responsive

var menu = "close";

function MenuMobile(){
    var mobileNav = document.getElementById("mobileNav");
    var iconmenu = document.getElementById("menuIcon");
    var intestazione = document.getElementById("intestazione")
    var sfondo1 = document.getElementById("sfondo1")
    if(menu == "close"){
        mobileNav.style.display = "flex";
        intestazione.style.display = "none";
        sfondo1.style.display = "none";
        menu="open";
        iconmenu.src = "img/Generale/IconaMenuChiudi.png";    
    }

    else{
        mobileNav.style.display = "none";
        intestazione.style.display = "block";
        sfondo1.style.display = "flex";
        menu = "close"
        iconmenu.src = "img/Generale/IconaMenu1.png"; 
    }
}