//Responsive Home

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
        iconmenu.src = "img/Generale/IconaMenu1.png" 
    }
}


//Responsive News

function MenuMobileNews(){
    var mobileNav = document.getElementById("mobileNav");
    var iconmenu = document.getElementById("menuIcon");
    var intestazione = document.getElementById("intestazione")
    var sfondo1 = document.getElementById("sfondo1")
    if(menu == "close"){
        mobileNav.style.display = "flex";
        intestazione.style.display = "none";
        sfondo1.style.display = "none";
        menu="open";
        iconmenu.src = "../img/Generale/IconaMenuChiudi.png";    
    }

    else{
        mobileNav.style.display = "none";
        intestazione.style.display = "block";
        sfondo1.style.display = "flex";
        menu = "close"
        iconmenu.src = "../img/Generale/IconaMenu1.png" 
    }
}

//News Mobile
function NewsMobile(){
    var ModsMobile = document.getElementById("ModsMobile");
    var pagina2 = document.getElementById("paginaMods2")
    if(menu == "close"){
        ModsMobile.style.display = "flex";
        pagina2.style.display
        menu="open";    
    }

    else{
        ModsMobile.style.display = "none";
        menu = "close";
    }
}

//Pres Mobile
function MenuMobilePres(){
    var mobileNav = document.getElementById("mobileNav");
    var iconmenu = document.getElementById("menuIcon");
    var intestazione = document.getElementById("intestazione")
    var sfondo1 = document.getElementById("sfondo1")
    var intro = document.getElementById("introPresM")
    if(menu == "close"){
        mobileNav.style.display = "flex";
        intestazione.style.display = "none";
        sfondo1.style.display = "none";
        intro.style.display = "none";
        menu="open";
        iconmenu.src = "../../img/Generale/IconaMenuChiudi.png";    
    }

    else{
        mobileNav.style.display = "none";
        intestazione.style.display = "block";
        sfondo1.style.display = "flex";
        intro.style.display = "flex";
        menu = "close"
        iconmenu.src = "../../img/Generale/IconaMenu1.png" 
    }
}