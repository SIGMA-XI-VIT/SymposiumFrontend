var arr = [document.getElementById("c1"),document.getElementById("c2"),document.getElementById("c3"),document.getElementById("c4"),document.getElementById("c5"),document.getElementById("c6")];
var v = [document.getElementById("d1"),document.getElementById("d2")];
var r = 0;
var r2 = 0;
$(document).ready(() => {
    $("#goleft").click(() => {
        if(r>=1){
            arr[r].style.display="none";
            r--;
            arr[r].style.display="flex";
        }
    });
    $("#goleft2").click(() => {
        if(r2==1){
            v[r2].style.display="none";
            r2--;
            v[r2].style.display="flex";
        }
    });
    $("#goright").click(() => {
        if(r<=4){
            arr[r].style.display="none";
            r++;
            arr[r].style.display="flex";
        }
    });
    $("#goright2").click(() => {
        if(r2==0){
            v[r2].style.display="none";
            r2++;
            v[r2].style.display="flex";
        }
    });
    $("#home_btn").click(() => {
        $(".form_full_page").css({"display":"flex","position":"absolute","top":"0","left":"0","z-index":"10000"})
        $(".thankyou").css({"display":"none"});
        $(".all_success").css({"display":"none"});
        $(".all_form").css({"display":"unset"});
        $("body").css("overflow-y", "hidden");
    });
    $("#gobacktohome").click(() => {
        $(".form_full_page").css({"display":"none","z-index":"unset"});
        $("body").css("overflow-y", "unset");
    });
});


var show = document.getElementById("menu");
show.addEventListener('click',() => {
    document.getElementById("links").style.display="flex";
    document.getElementById("closes").style.display="block";
    show.style.display="none";
});
var hide = document.getElementById("closes");
hide.addEventListener('click',() => {
    document.getElementById("links").style.display="none";
    document.getElementById("menu").style.display="block";
});

document.querySelector(".speakers").addEventListener('mouseover',() =>{
    let abc = document.getElementById('speak');
    abc.classList.add("current");
});

document.querySelector(".speakers").addEventListener('mouseleave',() =>{
    let abc = document.getElementById('speak');
    abc.classList.remove("current");
});


document.querySelector(".main").addEventListener('mouseover',() =>{
    let abc = document.getElementById('home_link');
    abc.classList.add("current");
});

document.querySelector(".main").addEventListener('mouseleave',() =>{
    let abc = document.getElementById('home_link');
    abc.classList.remove("current");
});

document.querySelector(".aboutus").addEventListener('mouseover',() =>{
    let abc = document.getElementById('aboutus_link');
    abc.classList.add("current");
});

document.querySelector(".aboutus").addEventListener('mouseleave',() =>{
    let abc = document.getElementById('aboutus_link');
    abc.classList.remove("current");
});

document.querySelector(".sponsor").addEventListener('mouseover',() =>{
    let abc = document.getElementById('sponsor_link');
    abc.classList.add("current");
});

document.querySelector(".sponsor").addEventListener('mouseleave',() =>{
    let abc = document.getElementById('sponsor_link');
    abc.classList.remove("current");
});

document.querySelector(".contact").addEventListener('mouseover',() =>{
    let abc = document.getElementById('contact_link');
    abc.classList.add("current");
});

document.querySelector(".contact").addEventListener('mouseleave',() =>{
    let abc = document.getElementById('contact_link');
    abc.classList.remove("current");
});


document.getElementById("register_now").addEventListener('click',() => {
    document.querySelector(".all_form").style.display="none";
    document.querySelector('.all_success').style.display="flex";
}); 
const showthank = () => {
    document.querySelector('.all_success').style.display="none";
    document.querySelector(".all_form").style.display="none";
    document.querySelector('.thankyou').style.display="flex";
};
