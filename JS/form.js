
const buttonCancel = document.querySelector('.link');

const handleCancel = (event) => {

    const userResponse = confirm('Voulez-vous vraiment quitter ?');

    if(!userResponse) {

        event.preventDefault();
    }
  
}

buttonCancel.addEventListener('click',handleCancel);

/******************************************************************* */

const buttonSubmit = document.querySelector('.button-submit');

const handleSubmit = (submit) => {

    submit.preventDefault();

    const inputs = [
        document.querySelector('.name'),
        document.querySelector('.type'),
        document.querySelector('.type2'),
        document.querySelector('.img-pokemon'),
        document.querySelector('.generation'),
        document.querySelector('.height'),
        document.querySelector('.weight')
    ];

    
    inputs.forEach(input => input.classList.remove('invalid'));
    
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            
            input.classList.add('invalid');
            isValid = false;
        }
    });

    if (!isValid) {
        alert('Veuillez remplir tous les champs.');
    } else {
        alert('Formulaire soumis avec succès');
    }
};


buttonSubmit.addEventListener('click', handleSubmit);

