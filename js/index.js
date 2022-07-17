const openNav =document.querySelector('.open-btn')
const closeNav =document.querySelector('.close-btn')
const menu =document.querySelector('.nav-list')
openNav.addEventListener("click",()=>{
    menu.classList.add("show")
})

closeNav.addEventListener("click",()=>{
    menu.classList.remove("show")
})


//fix Nav
const navBar= document.querySelector(".nav");
const navHeight =navBar.getBoundingClientRect().height;
window.addEventListener("scroll",()=>
{
    const scrollHeight =window.pageYOffset;
    if(scrollHeight>navHeight){
        navBar.classList.add("fix-nav");
    }
    else {
        navBar.classList.remove("fix-nav");
    }
})

