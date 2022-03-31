const incButton = document.querySelector('.inc-btn')
const decButton = document.querySelector('.dec-btn')
const counterScreen = document.querySelector('.counter-screen')



// * for increase btn 
incButton.addEventListener('click', () => {
    counterScreen.textContent++;

    // * for color change 
    if (counterScreen.textContent < 0) {
        counterScreen.style.color = "red"
    } 
    else if (counterScreen.textContent > 0) {
        counterScreen.style.color = "blue"
    } 
    else {
        counterScreen.style.color = "black"
    }
})

// * for decrease btn 
decButton.addEventListener('click', () => {
    counterScreen.textContent--;

    // * for color change 
    if (counterScreen.textContent < 0) {
        counterScreen.style.color = "red"
    } 
    else if (counterScreen.textContent > 0) {
        counterScreen.style.color = "blue"
    } 
    else {
        counterScreen.style.color = "black"
    }
})


// * custom functions   
// ! not in use 

function inc() {
    counterScreen.textContent++
}

function dec() {
    counterScreen.textContent--
}

