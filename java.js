const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const navlogo=document.querySelector('#navbar__logo')
// display Mobile Menu


const mobileMenu = () =>{
    menu.classList.toggle('.is-active');
    menulinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);


//show active menu when scrolling

const highlightMenu= ()=>{
    const elem=document.querySelector('highlight')
    const homeMenu=document.querySelector('#home-page')
    const aboutMenu=document.querySelector('#about-page')
    const servicesMenu=document.querySelector('#services-page')
    let scroolPos=window.scrollY

    //adds 'highlight' class to my menu items
    if(window.innerWidth>960 && scroolPos <600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    
    } else if(window.innerWidth > 960 && scroolPos <1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
         return
    
        } else if(window.innerWidth > 960 && scroolPos < 2345){
            servicesMenu.classList.add('highlight')
            aboutMenu.classList.remove('highlight')
            return
        }

        if((elem && window.innerWidth < 960 && scrollPoss <600) || elem){
          elem.classList.remove('highlight')
        }


};

window.addEventListener('scroll', highlightMenu)
window.addEventListener('scroll', highlightMenu)


//close mobile menu when clicking o an menu item


const hidemenuMobileMenu= ()=>{
    const menuBars=document.querySelector('.is-active')
    if(window.innerWidth <=768 && menuBars){
        menulinks.classList.remove('active')
    }


}

menulinks.addEventListener('click', hideMobileMenu)
navlogo.addEventListener('click', hideMobileMenu)
