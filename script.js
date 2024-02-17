let menu = document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


const sr= ScrollReveal ({
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})

sr.reveal('.home .text',{delay:200, origin:'top'})
sr.reveal('.text .h2',{delay:300, origin:'top'})
sr.reveal('.home .hill',{delay:300, origin:'right'})
sr.reveal('.form-container form',{delay:800, origin:'left'})
sr.reveal('.heading',{delay:300, origin:'top'})
sr.reveal('.ride-container .box',{delay:350, origin:'top'})
sr.reveal('.services-container .box',{delay:300, origin:'top'})
sr.reveal('.about-container .box',{delay:300, origin:'top'})
sr.reveal('.reviews-container',{delay:300, origin:'top'})
sr.reveal('.newsletter .box',{delay:200, origin:'bottom'})
sr.reveal('.contact',{delay:100, origin:'bottom'})
