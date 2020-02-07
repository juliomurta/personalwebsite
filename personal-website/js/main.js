window.onload = function(){
    var burgerButton = document.querySelector(".burgerbutton");    
    burgerButton.onclick = function(){
        var menuMobile = document.querySelector(".mobilemenu");
        if(menuMobile.classList.contains('mobilemenu--hide')){
            show(menuMobile);
        } else {
            hide(menuMobile);
        }           
    }
};

function hide(element){
    element.classList.remove('mobilemenu--block');
    element.classList.add('mobilemenu--hide');
}

function show(element){
    element.classList.remove('mobilemenu--hide');
    element.classList.add('mobilemenu--block');
}

window.addEventListener("resize", function(){
    if(window.innerWidth >= 701){
       var menuMobile = document.querySelector(".mobilemenu");
       hide(menuMobile);
    }
 });