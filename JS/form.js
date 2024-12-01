
const buttonElement = document.querySelector('.link');

const eventListener = (event) => {

    const userResponse = confirm('Voulez-vous vraiment quitter ?');

    if(!userResponse) {

        event.preventDefault();
    }

    
}

buttonElement.addEventListener('click',eventListener);

