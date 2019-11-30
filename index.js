const singIn = document.querySelector('.signIn');
const info = document.querySelector('.info');
const firstName = document.querySelector('.firstName');
const secondName = document.querySelector('.secondName');
const emailInput = document.querySelector('.emailInput');
const checkRadio = document.querySelectorAll('.check');
const choose = document.querySelector('.choose');
const checked = document.querySelector('.checked');
const signInButton = document.querySelector('.signInButton');
const name = document.querySelector('.name');
const surname = document.querySelector('.surname');
const email = document.querySelector('.email');
const position = document.querySelector('.position');
const checking = document.getElementById('check');
const circleMan = document.querySelector('.circleMan');
const circleWoman = document.querySelector('.circleWoman');
const man = document.querySelector('#man');
const woman = document.querySelector('#woman');
const fillName = document.forms['fillName'];
const select = document.querySelector('#select');
const light = document.querySelector('.light');

function clickSignIn() {
    singIn.style.display = "none";
    info.style.display = "block";
    name.innerHTML = firstName.value;
    surname.innerHTML = secondName.value;
    email.innerHTML = emailInput.value;
    singIn.style.display = "none";
    info.style.display = "block";
    if (man.checked) {
        circleMan.style.display = 'block';
        circleWoman.style.display = 'none';
    }
    if (woman.checked) {
        circleWoman.style.display = 'block';
        circleMan.style.display = 'none';
    }
    position.innerHTML = select.value;

}

function clickSignOut() {
    singIn.style.display = "block";
    info.style.display = "none";
}

checking.onclick = function () {
    if (checking.checked) {
        signInButton.children[0].disabled = false;
    } else {
        signInButton.children[0].disabled = true;
    }
}