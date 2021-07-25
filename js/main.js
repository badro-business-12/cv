/* Changer la page */
let principale = document.querySelector('#principale');
let experience = document.querySelector('#experience');
let competence = document.querySelector('#competence');
let formation = document.querySelector('#formation');
experience.addEventListener("click", function () {
    principale.src = 'experience.html';
});
competence.addEventListener("click", function () {
    principale.src = 'competence.html';
});
formation.addEventListener("click", function () {
    principale.src = 'formation.html';
});


