let discordElement = document.querySelector('#discord');
let emailElement = document.querySelector("#email")


function activateCIrcle() {
    let detailsInPurpleCircle = discordElement.parentElement.querySelectorAll('.circ');

    detailsInPurpleCircle[0].classList.toggle('animate-circle');
    detailsInPurpleCircle[1].classList.toggle('animate-circle');
}


function activateCube() {
    let detailsInPurpleCube = emailElement.parentElement.querySelectorAll('.cube');

    detailsInPurpleCube[0].classList.toggle('animate-on');
    detailsInPurpleCube[1].classList.toggle('animate-on');
}

//Circle
discordElement.addEventListener("mouseenter", _ => activateCIrcle());
discordElement.addEventListener('mouseleave', _ => activateCIrcle());

//Cube
emailElement.addEventListener("mouseenter", _ => activateCube())
emailElement.addEventListener("mouseleave", _ => activateCube())