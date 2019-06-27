// Event listeners

// navigation links underlined when hovered over

let navLinks = document.querySelectorAll('.nav-items a');

navLinks.forEach(anchor => {
    anchor.addEventListener('mouseenter', event => {
        event.target.classList.toggle('navHover');
    })

    anchor.addEventListener('mouseleave', event => {
        event.target.classList.toggle('navHover');
    })
})



// Article open button underlined when hovered over

let expander = document.querySelectorAll('.openButton');

expander.forEach(button => {
    button.addEventListener('mouseenter', event => {
        event.target.classList.toggle('buttonHover');
    })

    button.addEventListener('mouseleave', event => {
        event.target.classList.toggle('buttonHover');
    })
})

let buttonPress = document.querySelectorAll('.bottom-button');

buttonPress.forEach(button => {
    button.addEventListener('mousedown', event => {
        event.target.classList.toggle('buttonPressr');
    })

    button.addEventListener('mouseup', event => {
        event.target.classList.toggle('buttonPressr');
    })
})

