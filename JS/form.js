
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

    const userName = document.querySelector('.name');
    const userType = document.querySelector('.type');
    const userType2 = document.querySelector('.type2');
    const userImg = document.querySelector('.img-pokemon');
    const userGeneration = document.querySelector('.generation');
    const userHeight = document.querySelector('.height');
    const userWeight = document.querySelector('.weight');

    userName.classList.remove('invalid');
    userType.classList.remove('invalid');
    userType2.classList.remove('invalid');
    userImg.classList.remove('invalid');
    userGeneration.classList.remove('invalid');
    userHeight.classList.remove('invalid');
    userWeight.classList.remove('invalid');

    if (!userName.value) {
        userName.classList.add('invalid');
    }

    if (!userType.value) {
        userType.classList.add('invalid');
    }

    if (!userType2.value) {
        userType2.classList.add('invalid');
    }

    if (!userImg.value) {
        userImg.classList.add('invalid');
    }

    if (!userGeneration.value) {
        userGeneration.classList.add('invalid');
    }

    if (!userHeight.value) {
        userHeight.classList.add('invalid');
    }

    if (!userWeight.value) {
        userWeight.classList.add('invalid');
    }

    if(!userName.value || !userType.value || !userType2.value || !userImg.value || !userGeneration.value
        || !userHeight.value || !userWeight.value) {
            alert('Veuillez remplir tout les champs');
    }
    else {
        alert('Formulaire soumis avec succès')
    }

}

buttonSubmit.addEventListener('click', handleSubmit);

