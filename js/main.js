const nav= document.querySelector('.nav')
const btn=document.querySelector('.burger-btn')
const allNavItems=document.querySelectorAll('.nav__item')
const navBtnBars=document.querySelector(".burger-btn__bars")
const allSections=document.querySelectorAll(".section")


const clickNav = () => {
nav.classList.toggle('nav--active')
btn.classList.remove('black-bars-color')



allNavItems.forEach(item=>{
item.addEventListener('click',()=>{
    nav.classList.remove('nav--active')
})
})
navAnimation();
}

const navAnimation = () => {
    let delayTime=0;
    allNavItems.forEach(item=> {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay='.'+delayTime +'s';
        delayTime++;
    })
}

const blackBars = () => {
    const currentSection = window.scrollY;
    allSections.forEach(section => {

        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black-bars-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.remove('black-bars-color')
        }
    })
}
    

blackBars();

btn.addEventListener('click',clickNav)
window.addEventListener('scroll', blackBars)